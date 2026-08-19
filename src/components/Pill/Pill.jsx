import styles from "./Pill.module.css";

/**
 * Reusable tag / search chip.
 * @param {"outline"|"outlineLight"|"navy"|"teal"|"blue"|"purple"|"gold"} tone
 */
export default function Pill({
  children,
  tone = "outline",
  icon: Icon,
  active = false,
  as: Tag = "button",
  type = "button",
  className = "",
  ...rest
}) {
  const classes = `${styles.pill} ${styles[tone] || styles.outline} ${
    active ? styles.active : ""
  } ${className}`;

  return (
    <Tag type={Tag === "button" ? type : undefined} className={classes} {...rest}>
      {Icon ? <Icon size={15} strokeWidth={2.2} /> : null}
      <span>{children}</span>
    </Tag>
  );
}
