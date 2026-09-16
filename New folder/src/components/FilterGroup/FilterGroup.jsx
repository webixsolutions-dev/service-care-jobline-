import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FilterGroup.module.css";

/**
 * Collapsible sidebar group. Children are typically checkbox lists.
 */
export default function FilterGroup({ title, icon: Icon, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={styles.group}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.title}>
          {Icon ? <Icon size={18} strokeWidth={2.2} /> : null}
          {title}
        </span>
        <ChevronDown size={18} className={`${styles.chevron} ${open ? styles.open : ""}`} />
      </button>
      {open ? <div className={styles.body}>{children}</div> : null}
    </section>
  );
}
