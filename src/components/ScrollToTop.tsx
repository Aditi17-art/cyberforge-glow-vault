import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Root-cause fix for stale scroll positions on navigation:
 * React Router only swaps the rendered route — it never touches the
 * window scroll, so the previous page's offset carries over to the
 * next page and the browser may also restore a saved scroll position
 * (history.scrollRestoration). This component resets the scroll to
 * (0, 0) on every location change and honours #hash targets instead,
 * accounting for the fixed navbar height when scrolling to a section.
 */
const NAVBAR_OFFSET = 88; // fixed navbar (h-20) + breathing room

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Stop the browser from restoring a previous scroll position.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        const top =
          target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: "smooth" });
        return;
      }
    }

    // Instant reset — avoids an animated scroll flying past content.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
