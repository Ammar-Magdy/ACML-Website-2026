import { useEffect } from "react";

// Store the default favicon/title once when the app loads or the first time the hook runs if not correctly captured globally.
// However, since this is a hook, it might be safer to rely on the fact that the default state is known.
// Default favicon from index.html
const DEFAULT_FAVICON = "/src/assets/icon.svg";
const DEFAULT_TITLE =
  "ACML - ACML Integrated Information Solutions & Systems | Your Gateway to the Information Age";

export const usePageMetadata = (title: string, faviconUrl: string) => {
  useEffect(() => {
    // 1. Get the link element
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    // 2. Set the NEW metadata
    document.title = title;
    link.href = faviconUrl;

    // 3. Cleanup function:
    // Restore default title and favicon when component unmounts
    return () => {
      document.title = DEFAULT_TITLE;
      link.href = DEFAULT_FAVICON;
    };
  }, [title, faviconUrl]);
};
