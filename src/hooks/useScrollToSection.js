import { useRef, useCallback } from "react";

/**
 * Shared scroll-into-view helper for in-page section targets
 * (e.g. Post a Job hero + closing CTA both jump to the form).
 */
export default function useScrollToSection() {
  const ref = useRef(null);

  const scrollToSection = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return [ref, scrollToSection];
}
