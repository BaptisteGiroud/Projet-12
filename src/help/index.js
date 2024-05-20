import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScroll() {
  const location = useLocation();

  useEffect(() => {
    let lastScrollTime = Date.now();
    let isScrolling = false;
    const scrollTimeout = 300;
    const scrollDuration = 300;
    const scrollAmount = window.innerHeight;
    const bottomScrollAmount = window.innerHeight * 0.2;

    const smoothScroll = (targetY, duration) => {
      let start = window.scrollY;
      let currentTime = null;

      const animation = (timestamp) => {
        if (!currentTime) currentTime = timestamp;
        const progress = timestamp - currentTime;
        const newPosition = easeInOutQuad(
          progress,
          start,
          targetY - start,
          duration
        );
        window.scrollTo(0, newPosition);
        if (progress < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const handleScroll = (event) => {
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollTimeout || isScrolling) {
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;

      if (event.deltaY > 0) {
        isScrolling = true;
        smoothScroll(window.scrollY + scrollAmount, scrollDuration);
      } else {
        isScrolling = true;
        if (isAtBottom && location.pathname === "/projets") {
          smoothScroll(window.scrollY - bottomScrollAmount, scrollDuration);
        } else {
          smoothScroll(window.scrollY - scrollAmount, scrollDuration);
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, scrollTimeout);

      lastScrollTime = currentTime;
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [location]);

  return null;
}

export default useScroll;
