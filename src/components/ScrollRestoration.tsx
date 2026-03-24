import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollRestoration() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const scrollPositions = useRef<Map<string, number>>(new Map());

  // Disable browser's default scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Save the current scroll position when the user scrolls
  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      // Throttle the scroll position update slightly to avoid capturing invalid positions
      // during unmount/transition phases.
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        scrollPositions.current.set(pathname, window.scrollY);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Restore scroll position or scroll to top instantly without flicker
  useLayoutEffect(() => {
    if (navType === "POP") {
      const savedPosition = scrollPositions.current.get(pathname) || 0;
      window.scrollTo(0, savedPosition);
    } else {
      if (hash) {
        // Slight delay needed to allow elements to render if navigating with hash to new page
        setTimeout(() => {
          const id = hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, navType, hash]);

  return null;
}
