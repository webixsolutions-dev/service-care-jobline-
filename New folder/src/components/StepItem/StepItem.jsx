import { ChevronRight } from "lucide-react";
import { getIcon } from "../icons";
import styles from "./StepItem.module.css";

/**
 * Numbered hiring-flow step. Pass `icon` as a key from `icons.js`.
 * `theme="dark"` for navy cards on dark sections; `theme="onDark"` for
 * unframed steps on a navy panel; `hideLabel` hides "Step N".
 * `connector` renders a trailing chevron, solid line, or dotted line.
 */
export default function StepItem({
  number,
  icon,
  title,
  description,
  theme = "light",
  hideLabel = false,
  numberPosition = "top-left",
  connector = "none",
}) {
  const Icon = typeof icon === "string" ? getIcon(icon) : icon;
  const themeClass =
    theme === "dark" ? styles.dark : theme === "onDark" ? styles.onDark : "";

  const article = (
    <article className={`${styles.step} ${themeClass}`}>
      <div className={styles.iconWrap}>
        <span
          className={`${styles.number} ${
            numberPosition === "bottom-right" ? styles.numberBottomRight : ""
          }`}
        >
          {number}
        </span>
        <span className={styles.iconCircle}>
          <Icon size={28} strokeWidth={2} />
        </span>
      </div>
      {!hideLabel ? <p className={styles.label}>Step {number}</p> : null}
      <h3>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );

  if (!connector || connector === "none") return article;

  return (
    <>
      {article}
      {connector === "chevron" ? (
        <ChevronRight className={styles.connectorChevron} size={28} aria-hidden />
      ) : (
        <span
          className={`${styles.connector} ${
            connector === "dotted-line" ? styles.connectorDotted : styles.connectorLine
          }`}
          aria-hidden
        />
      )}
    </>
  );
}
