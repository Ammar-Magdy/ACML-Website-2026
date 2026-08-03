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
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from "pdfjs-dist";

// Configure PDF.js worker in a Vite-compatible, deployment-safe way.
// Use new URL(...) with import.meta.url so Vite resolves and emits the worker file
// into the dist assets and produces a correct hashed URL at build time.

type PDFPreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  triggerRef?: RefObject<HTMLElement>;
};

type LoadState = "loading" | "ready" | "error";

// Set the workerSrc using Vite-friendly resolution. This tells PDF.js where
// to load its ES module worker from. Vite will rewrite the URL at build time
// to point to the hashed asset in dist.
try {
  // Use the worker file that exists in the installed pdfjs-dist package.
  // Prefer the modern ES module build path.
  GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();
} catch (err) {
  // Fallback: leave workerSrc unset and let pdf.js attempt default behavior.
  // Provide a dev-time diagnostic.
  if (typeof console !== "undefined" && !import.meta.env.PROD) {
    console.error("Failed to configure PDF.js workerSrc:", err);
  }
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function PDFPreviewModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  triggerRef,
}: PDFPreviewModalProps) {
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [retryKey, setRetryKey] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1.25);
  const [isRenderingPages, setIsRenderingPages] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pdfDocumentRef = useRef<PDFDocumentProxy | null>(null);
  const pageContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const pageCanvasRefs = useRef<Array<HTMLCanvasElement | null>>([]);
  // Cache the last successfully loaded URL to avoid re-downloading the same PDF
  const lastLoadedUrlRef = useRef<string | null>(null);
  const renderSessionRef = useRef(0);
  const titleId = useMemo(
    () => `pdf-preview-title-${Math.random().toString(36).slice(2, 11)}`,
    [],
  );

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
    const timeoutMs = 30000; // 30 seconds
    let timeoutId: number | null = null;

    // If the same URL was already loaded successfully, reuse it and avoid re-fetching
    if (pdfDocumentRef.current && lastLoadedUrlRef.current === pdfUrl) {
      setPageCount(pdfDocumentRef.current.numPages);
      setLoadState("ready");
      return;
    }

    const loadPdfDocument = async () => {
      setLoadState("loading");
      setErrorMessage("");
      setPageCount(0);
      setCurrentPage(1);
      pdfDocumentRef.current = null;
      pageContainerRefs.current = [];
      pageCanvasRefs.current = [];

      try {
        timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

        // Fetch the PDF from the same origin using a deployment-safe URL passed in.
        const response = await fetch(pdfUrl, { signal: controller.signal, method: "GET" });
        if (!response.ok) {
          throw new Error(`Failed to fetch PDF (status: ${response.status})`);
        }

        const contentType = response.headers.get("content-type") ?? "";
        if (!contentType.toLowerCase().includes("application/pdf")) {
          // Provide dev-only diagnostics if server responds with the wrong content type
          if (!import.meta.env.PROD) {
            console.error("PDF preview: unexpected Content-Type", { pdfUrl, status: response.status, contentType, base: import.meta.env.BASE_URL });
          }
          throw new Error(`Unexpected Content-Type: ${contentType || "unknown"}`);
        }

        const arrayBuffer = await response.arrayBuffer();

        if (isCancelled) {
          return;
        }

        // Create the loading task from the in-memory data to avoid range requests
        loadingTask = getDocument({ data: arrayBuffer });
        const pdfDocument = await loadingTask.promise;

        if (isCancelled) {
          return;
        }

        pdfDocumentRef.current = pdfDocument;
        lastLoadedUrlRef.current = pdfUrl;
        setPageCount(pdfDocument.numPages);
        setLoadState("ready");

        // Dev-only logging for troubleshooting
        if (!import.meta.env.PROD) {
          console.info("PDF preview loaded", { pdfUrl, pages: pdfDocument.numPages, base: import.meta.env.BASE_URL });
        }
      } catch (error: unknown) {
        if (isCancelled) {
          return;
        }

        let message =
          error instanceof Error
            ? error.message
            : "Unable to load the PDF file right now. Please try again.";

        // Detect worker-specific failures and provide clearer developer guidance
        const lowerMsg = (message || "").toLowerCase();
        if (
          lowerMsg.includes("setting up fake worker failed") ||
          lowerMsg.includes("failed to fetch dynamically imported module") ||
          lowerMsg.includes("worker-src") ||
          lowerMsg.includes("pdf.worker")
        ) {
          // User-facing minimal message
          message = "PDF rendering worker failed to load. Open the browser console for details.";

          // Dev-only diagnostics
          if (!import.meta.env.PROD) {
            console.error("PDF worker load error", { pdfUrl, rawError: error, base: import.meta.env.BASE_URL });
            // Provide a suggested worker configuration to check
            console.info(
              "Suggested workerSrc configuration (Vite):",
              "GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();",
            );
          }
        }

        // Dev-only detailed logging
        if (!import.meta.env.PROD) {
          console.error("PDF preview load error", { pdfUrl, message, error });
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
      if (loadingTask && typeof loadingTask.destroy === "function") {
        void loadingTask.destroy();
      }
    };
  }, [isOpen, pdfUrl, retryKey]);

  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) {
      return;
    }

    const container = scrollContainerRef.current;
    const updateWidth = () => {
      setContainerWidth(container.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isOpen, pageCount]);

  useEffect(() => {
    if (
      !isOpen ||
      loadState !== "ready" ||
      !pdfDocumentRef.current ||
      pageCount < 1 ||
      containerWidth < 1
    ) {
      return;
    }

    let isCancelled = false;
    renderSessionRef.current += 1;
    const sessionId = renderSessionRef.current;
    const renderTasks: Array<{ cancel: () => void }> = [];

    const renderPages = async () => {
      const pdfDocument = pdfDocumentRef.current;
      if (!pdfDocument) {
        return;
      }

      setIsRenderingPages(true);

      try {
        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
          if (isCancelled || sessionId !== renderSessionRef.current) {
            return;
          }

          const page = await pdfDocument.getPage(pageNumber);
          const baseViewport = page.getViewport({ scale: 1 });
          const usableWidth = Math.max(240, containerWidth - 24);
          const fitScale = usableWidth / baseViewport.width;
          const viewport = page.getViewport({
            scale: Math.max(0.25, fitScale * zoom),
          });
          const canvas = pageCanvasRefs.current[pageNumber - 1];
          if (!canvas) {
            continue;
          }

          const context = canvas.getContext("2d");
          if (!context) {
            continue;
          }

          const pixelRatio = window.devicePixelRatio || 1;
          canvas.width = Math.floor(viewport.width * pixelRatio);
          canvas.height = Math.floor(viewport.height * pixelRatio);
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          const renderTask = page.render({
            canvas,
            canvasContext: context,
            viewport,
          });
          renderTasks.push(renderTask);
          await renderTask.promise;
        }
      } catch (error: unknown) {
        if (!isCancelled) {
          const message =
            error instanceof Error
              ? error.message
              : "Failed to render PDF pages.";
          if (
            message.includes("Cannot use the same canvas during multiple render() operations") ||
            message.toLowerCase().includes("rendering cancelled")
          ) {
            return;
          }
          setErrorMessage(message);
          setLoadState("error");
        }
      } finally {
        if (!isCancelled) {
          setIsRenderingPages(false);
        }
      }
    };

    void renderPages();

    return () => {
      isCancelled = true;
      renderTasks.forEach((task) => {
        task.cancel();
      });
    };
  }, [isOpen, loadState, pageCount, zoom, containerWidth]);

  useEffect(() => {
    if (!isOpen || loadState !== "ready" || pageCount < 1 || !scrollContainerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        const pageNumber = Number(
          visibleEntries[0].target.getAttribute("data-page-number"),
        );

        if (Number.isFinite(pageNumber)) {
          setCurrentPage(pageNumber);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: [0.5, 0.75],
      },
    );

    pageContainerRefs.current.forEach((pageElement) => {
      if (pageElement) {
        observer.observe(pageElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isOpen, loadState, pageCount]);

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

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  const handleRetry = () => {
    setRetryKey((currentKey) => currentKey + 1);
  };

  const goToPage = (targetPage: number) => {
    const boundedPage = Math.max(1, Math.min(pageCount, targetPage));
    const targetElement = pageContainerRefs.current[boundedPage - 1];
    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentPage(boundedPage);
  };

  const canZoomOut = zoom > 0.6;
  const canZoomIn = zoom < 1.8;
  const showLoading = loadState === "loading" || isRenderingPages;
  const renderCanvasKey = `${Math.round(zoom * 100)}-${Math.round(
    containerWidth,
  )}`;

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
                onClick={() => setZoom((value) => Math.max(0.6, value - 0.2))}
                disabled={!canZoomOut}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"
                aria-label="Zoom out"
              >
                <ZoomOut size={14} />
              </button>
              <span className="min-w-[3.5rem] text-center font-medium tabular-nums">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.min(1.8, value + 0.2))}
                disabled={!canZoomIn}
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
              download
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

        <div className="relative flex-1 overflow-hidden bg-gray-50 dark:bg-gray-950">
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
                  download
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
                className="h-full overflow-x-hidden overflow-y-auto p-[clamp(0.5rem,1.5vw,1rem)] pb-[clamp(1.25rem,2.5vw,2.5rem)]"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div className="mx-auto w-full max-w-[1100px] space-y-[clamp(0.75rem,1.2vw,1rem)]">
                  {Array.from({ length: pageCount }, (_, index) => (
                    <div
                      key={`${index + 1}-${renderCanvasKey}`}
                      data-page-number={index + 1}
                      ref={(element) => {
                        pageContainerRefs.current[index] = element;
                      }}
                      className="w-full rounded-lg bg-white p-[clamp(0.35rem,1vw,0.5rem)] shadow-md dark:bg-gray-900"
                    >
                      <canvas
                        ref={(element) => {
                          pageCanvasRefs.current[index] = element;
                        }}
                        className="block w-full max-w-full rounded"
                        aria-label={`PDF page ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {showLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 dark:bg-gray-950/90">
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
                    <Loader2 size={16} className="animate-spin" />
                    {loadState === "loading"
                      ? "Loading PDF preview..."
                      : "Rendering pages..."}
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
