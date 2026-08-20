import styles from "./SectionHeading.module.css";

/**
 * Heading with optional accent-colored words.
 * @param {Array<{text: string, accent?: "teal"|"gold"|null}>} parts
 */
export default function SectionHeading({
  parts = [],
  as: Tag = "h2",
  align = "left",
  theme = "light",
  underline = false,
  className = "",
}) {
  return (
    <Tag className={`${styles.heading} ${styles[align]} ${styles[theme]} ${className}`}>
      {parts.map((part, i) => (
        <span
          key={`${part.text}-${i}`}
          className={part.accent ? styles[part.accent] : undefined}
        >
          {part.text}
          {i < parts.length - 1 ? " " : ""}
        </span>
      ))}
      {underline ? <span className={styles.bar} /> : null}
    </Tag>
  );
}
