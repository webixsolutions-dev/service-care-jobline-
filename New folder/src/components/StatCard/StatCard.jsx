import IconBadge from "../IconBadge/IconBadge";
import { getIcon } from "../icons";
import styles from "./StatCard.module.css";

export default function StatCard({
  icon,
  color = "teal",
  value,
  label,
  description,
  className = "",
  compact = false,
}) {
  const Icon = getIcon(icon);

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""} ${className}`}>
      <IconBadge icon={Icon} color={color} size={compact ? "sm" : "md"} />
      <p className={`${styles.value} ${styles[color]}`}>{value}</p>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}
