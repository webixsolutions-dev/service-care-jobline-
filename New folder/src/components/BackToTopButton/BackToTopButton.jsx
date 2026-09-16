import { ChevronUp } from "lucide-react";
import styles from "./BackToTopButton.module.css";

/** Smooth-scrolls the window to the top of the page. */
export default function BackToTopButton({ className = "" }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${className}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp size={20} strokeWidth={2.4} />
    </button>
  );
}
