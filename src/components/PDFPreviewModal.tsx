import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Loader2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { RefObject, useEffect, useMemo, useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const DEFAULT_ZOOM = 0.85;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;

type PDFPreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  downloadName?: string;
  triggerRef?: RefObject<HTMLElement>;
};

type LoadState = "loading" | "ready" | "error";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type PDFPageProps = {
  pdfDocument: PDFDocumentProxy;
  pageNumber: number;
  zoom: number;
  containerWidth: number;
  isVisible: boolean;
};

const PDFPage = forwardRef<HTMLDivElement, PDFPageProps>(
  ({ pdfDocument, pageNumber, zoom, containerWidth, isVisible }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
      if (!isVisible || containerWidth === 0) return;

      let isCancelled = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let renderTask: any = null;

      const renderPage = async () => {
        try {
          const page = await pdfDocument.getPage(pageNumber);
          if (isCancelled) return;

          const baseViewport = page.getViewport({ scale: 1 });
          const usableWidth = Math.max(240, containerWidth - 24);
          const fitScale = usableWidth / baseViewport.width;
          const viewport = page.getViewport({
            scale: Math.max(0.25, fitScale * zoom),
          });

          const canvas = canvasRef.current;
          if (!canvas) return;
          const context = canvas.getContext("2d");
          if (!context) return;

          const pixelRatio = window.devicePixelRatio || 1;
          canvas.width = Math.floor(viewport.width * pixelRatio);
          canvas.height = Math.floor(viewport.height * pixelRatio);
          
          canvas.style.width = `${viewport.width}px`;
          canvas.style.height = `${viewport.height}px`;

          context.clearRect(0, 0, canvas.width, canvas.height);
          context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

          renderTask = page.render({ canvas, canvasContext: context, viewport });
          await renderTask.promise;

          if (!isCancelled) {
            setIsRendered(true);
          }
        } catch (error: unknown) {
          if (!isCancelled && !(error instanceof Error && error.message?.includes("cancelled"))) {
            console.error(`PDF page ${pageNumber} failed to render`, error);
          }
        }
      };

      void renderPage();

      return () => {
        isCancelled = true;
        if (renderTask) {
          try {
            renderTask.cancel();
          } catch {
            // ignore
          }
        }
      };
    }, [pdfDocument, pageNumber, zoom, containerWidth, isVisible]);

    return (
      <div
        ref={ref}
        data-page-number={pageNumber}
        className="flex shrink-0 justify-center w-full rounded-lg bg-white p-[clamp(0.35rem,1vw,0.5rem)] shadow-md dark:bg-gray-900 overflow-hidden"
        style={{ minHeight: isRendered ? "auto" : "800px" }}
      >
        <canvas
          ref={canvasRef}
          className="block rounded"
          aria-label={`PDF page ${pageNumber}`}
        />
      </div>
    );
  },
);

PDFPage.displayName = "PDFPage";

export default function PDFPreviewModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  downloadName,
  triggerRef,
}: PDFPreviewModalProps) {
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [retryKey, setRetryKey] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set([1]));

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pdfDocumentRef = useRef<PDFDocumentProxy | null>(null);
  const pageContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleId = useMemo(
    () => `pdf-preview-title-${Math.random().toString(36).slice(2, 11)}`,
    [],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;
      const isOutsideDialog = !activeElement || !dialog.contains(activeElement);

      if (event.shiftKey) {
        if (isOutsideDialog || activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (isOutsideDialog || activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const triggerElement = triggerRef?.current ?? null;
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      const fallbackFocusTarget = previouslyFocusedElementRef.current;
      const focusTarget = triggerElement ?? fallbackFocusTarget;
      focusTarget?.focus();
    };
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let isCancelled = false;
    let loadingTask: ReturnType<typeof getDocument> | null = null;
    const controller = new AbortController();
    const timeoutMs = 30000;
    let timeoutId: number | null = null;

    setLoadState("loading");
    setErrorMessage("");
    setPageCount(0);
    setCurrentPage(1);
    setZoom(DEFAULT_ZOOM);
    setVisiblePages(new Set([1]));
    pdfDocumentRef.current = null;
    pageContainerRefs.current = [];

    const loadPdfDocument = async () => {
      try {
        timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

        const response = await fetch(pdfUrl, { signal: controller.signal, method: "GET" });
        if (!response.ok) {
          throw new Error(`Failed to fetch PDF (status: ${response.status})`);
        }

        const arrayBuffer = await response.arrayBuffer();

        if (isCancelled) return;

        loadingTask = getDocument({ data: arrayBuffer });
        const pdfDocument = await loadingTask.promise;

        if (isCancelled) {
          void pdfDocument.cleanup();
          return;
        }

        pdfDocumentRef.current = pdfDocument;
        setPageCount(pdfDocument.numPages);
        setLoadState("ready");
      } catch (error: unknown) {
        if (isCancelled) return;

        let message =
          error instanceof Error
            ? error.message
            : "Unable to load the PDF file right now. Please try again.";

        const lowerMsg = (message || "").toLowerCase();
        if (lowerMsg.includes("cancelled") || lowerMsg.includes("aborted")) {
          return;
        }

        if (
          lowerMsg.includes("setting up fake worker failed") ||
          lowerMsg.includes("failed to fetch dynamically imported module") ||
          lowerMsg.includes("worker-src") ||
          lowerMsg.includes("pdf.worker")
        ) {
          message = "PDF rendering worker failed to load. Open the browser console for details.";
        }

        setErrorMessage(message);
        setLoadState("error");
      } finally {
        if (timeoutId != null) {
          clearTimeout(timeoutId);
        }
      }
    };

    void loadPdfDocument();

    return () => {
      isCancelled = true;
      controller.abort();

      const currentTask = loadingTask;
      const currentDoc = pdfDocumentRef.current;

      pdfDocumentRef.current = null;
      pageContainerRefs.current = [];

      if (currentTask && typeof currentTask.destroy === "function") {
        void currentTask.destroy();
      } else if (currentDoc && typeof currentDoc.cleanup === "function") {
        void currentDoc.cleanup();
      }
    };
  }, [isOpen, pdfUrl, retryKey]);

  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const updateWidth = () => {
      if (container.clientWidth > 0) {
        setContainerWidth(container.clientWidth);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || loadState !== "ready" || pageCount < 1 || !scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisiblePages((prev) => {
          const next = new Set(prev);
          let updated = false;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const pageNum = Number(entry.target.getAttribute("data-page-number"));
              if (pageNum && !next.has(pageNum)) {
                next.add(pageNum);
                updated = true;
              }
            }
          });
          return updated ? next : prev;
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: "600px 0px",
        threshold: 0.01,
      }
    );

    pageContainerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isOpen, loadState, pageCount]);

  useEffect(() => {
    if (!isOpen || loadState !== "ready" || pageCount < 1 || !scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const pageNumber = Number(visibleEntries[0].target.getAttribute("data-page-number"));
          if (Number.isFinite(pageNumber)) setCurrentPage(pageNumber);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: [0.5, 0.75],
      }
    );

    pageContainerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isOpen, loadState, pageCount]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  const handleRetry = () => {
    setRetryKey((currentKey) => currentKey + 1);
  };

  const goToPage = (targetPage: number) => {
    const boundedPage = Math.max(1, Math.min(pageCount, targetPage));
    const targetElement = pageContainerRefs.current[boundedPage - 1];
    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentPage(boundedPage);
  };

  const handleZoomIn = () => {
    setZoom((currentZoom) =>
      Math.min(MAX_ZOOM, Number((currentZoom + ZOOM_STEP).toFixed(2)))
    );
  };

  const handleZoomOut = () => {
    setZoom((currentZoom) =>
      Math.max(MIN_ZOOM, Number((currentZoom - ZOOM_STEP).toFixed(2)))
    );
  };

  const zoomLabel = `${Math.round(zoom * 100)}%`;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/70 backdrop-blur-[2px]"
      style={{
        paddingTop: "max(0.5rem, env(safe-area-inset-top))",
        paddingRight: "max(0.5rem, env(safe-area-inset-right))",
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(0.5rem, env(safe-area-inset-left))",
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      aria-hidden="true"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="mx-auto flex h-[94dvh] w-[96vw] max-w-[1600px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900 sm:h-[92dvh] sm:w-[94vw] md:h-[90dvh] md:w-[92vw] lg:h-[90vh] lg:w-[89vw] xl:h-[90vh] xl:w-[87vw] 2xl:h-[92vh] 2xl:w-[85vw]"
      >
        <header className="sticky top-0 z-10 flex flex-col gap-2 border-b border-gray-200 bg-white/95 px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.625rem,1.5vw,0.875rem)] backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id={titleId}
            className="min-w-0 pr-2 text-[clamp(0.875rem,1.8vw,1rem)] font-semibold leading-snug text-gray-900 dark:text-white"
            dir="rtl"
          >
            {title}
          </h2>
          <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto">
            <div className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-1.5 py-1 text-xs text-gray-700 dark:border-gray-600 dark:text-gray-200">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"
                aria-label="Previous page"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="min-w-[4.25rem] text-center font-medium tabular-nums">
                {currentPage} / {pageCount || 1}
              </span>
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= pageCount}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"
                aria-label="Next page"
              >
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-1.5 py-1 text-xs text-gray-700 dark:border-gray-600 dark:text-gray-200">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= MIN_ZOOM}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"
                aria-label="Zoom out"
              >
                <ZoomOut size={14} />
              </button>
              <span className="min-w-[3.5rem] text-center font-medium tabular-nums">
                {zoomLabel}
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= MAX_ZOOM}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"
                aria-label="Zoom in"
              >
                <ZoomIn size={14} />
              </button>
            </div>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center gap-1 rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 sm:text-sm"
              aria-label="Open PDF in a new tab"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Open</span>
            </a>
            <a
              href={pdfUrl}
              download={downloadName}
              className="inline-flex min-h-11 min-w-11 items-center gap-1 rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 sm:text-sm"
              aria-label="Download PDF"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Close PDF preview"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="relative flex-1 overflow-hidden bg-gray-50 dark:bg-gray-950 flex flex-col">
          {loadState === "error" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <AlertCircle
                className="text-red-500 dark:text-red-400"
                size={36}
                aria-hidden="true"
              />
              <p className="max-w-xl text-sm text-gray-700 dark:text-gray-200 sm:text-base">
                Could not load the PDF preview. {errorMessage}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRetry}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Retry
                </button>
                <a
                  href={pdfUrl}
                  download={downloadName}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <>
              <div
                ref={scrollContainerRef}
                className="flex-1 min-h-0 overflow-auto p-[clamp(0.5rem,1.5vw,1rem)] pb-[clamp(1.25rem,2.5vw,2.5rem)]"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div className="flex flex-col items-center gap-[clamp(0.75rem,1.2vw,1rem)] w-full min-h-full mx-auto max-w-[1100px]">
                  {Array.from({ length: pageCount }, (_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <PDFPage
                        key={`page_${pageNumber}`}
                        ref={(element) => {
                          pageContainerRefs.current[index] = element;
                        }}
                        pdfDocument={pdfDocumentRef.current!}
                        pageNumber={pageNumber}
                        zoom={zoom}
                        containerWidth={containerWidth}
                        isVisible={visiblePages.has(pageNumber)}
                      />
                    );
                  })}
                </div>
              </div>
              {loadState === "loading" && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 dark:bg-gray-950/90">
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
                    <Loader2 size={16} className="animate-spin" />
                    Loading PDF preview...
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
