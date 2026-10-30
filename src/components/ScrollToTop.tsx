
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 100;

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    let cancelled = false;
    let attempts = 0;
    let frameId: number;

    const scrollToDestination = () => {
      if (cancelled) return;

      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);

      if (element) {
        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          NAVBAR_OFFSET;

        window.scrollTo({
          top: Math.max(0, top),
          behavior: "instant",
        });

        return;
      }

      attempts++;

      if (attempts < 120) {
        frameId = requestAnimationFrame(scrollToDestination);
      } else {
        console.warn("Scroll target not found:", id);
      }
    };

    frameId = requestAnimationFrame(scrollToDestination);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
