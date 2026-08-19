import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./Pagination.module.css";

function pageItems(current, total, maxVisible) {
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const items = [];
  const side = Math.max(1, Math.floor((maxVisible - 3) / 2));
  let start = Math.max(2, current - side);
  let end = Math.min(total - 1, current + side);

  if (current <= side + 1) {
    end = maxVisible - 2;
  }
  if (current >= total - side) {
    start = total - (maxVisible - 3);
  }

  items.push(1);
  if (start > 2) items.push("ellipsis-start");
  for (let n = start; n <= end; n += 1) items.push(n);
  if (end < total - 1) items.push("ellipsis-end");
  items.push(total);
  return items;
}

/**
 * Numbered pagination with optional "Next →" label and dark/light themes.
 */
export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  maxVisible = 5,
  showNextLabel = false,
  theme = "light",
}) {
  if (totalPages < 1) return null;

  const items = pageItems(currentPage, totalPages, maxVisible);

  return (
    <nav className={`${styles.nav} ${theme === "dark" ? styles.dark : ""}`} aria-label="Pagination">
      {!showNextLabel ? (
        <button
          type="button"
          className={styles.btn}
          aria-label="Previous page"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={18} />
        </button>
      ) : null}

      {items.map((item) =>
        typeof item === "string" ? (
          <span key={item} className={styles.ellipsis} aria-hidden>
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={`${styles.btn} ${item === currentPage ? styles.active : ""}`}
            aria-current={item === currentPage ? "page" : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        )
      )}

      {showNextLabel ? (
        <button
          type="button"
          className={`${styles.btn} ${styles.next}`}
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        >
          Next <ArrowRight size={16} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.btn}
          aria-label="Next page"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight size={18} />
        </button>
      )}
    </nav>
  );
}
