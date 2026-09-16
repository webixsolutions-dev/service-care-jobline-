import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollWindowToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = previous;
}

function scrollToHash(hash) {
  const id = decodeURIComponent(hash.replace("#", ""));
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "auto", block: "start" });
  return true;
}

/**
 * Every route change lands at the top of the page.
 * Hash URLs (e.g. /browse-jobs#job-alerts) jump to that section instead.
 * Same-path nav clicks (Home while already on Home) also reset to the top.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const run = () => {
      if (cancelled) return;
      if (hash) {
        if (scrollToHash(hash)) return;
        if (attempts < 12) {
          attempts += 1;
          window.requestAnimationFrame(run);
          return;
        }
      }
      scrollWindowToTop();
    };

    const frame = window.requestAnimationFrame(run);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  useEffect(() => {
    function handleClick(event) {
      const anchor = event.target.closest("a[href]");
      if (!anchor || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      let url;
      try {
        url = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (url.hash) return;

      scrollWindowToTop();
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
