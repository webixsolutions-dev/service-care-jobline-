import IconBadge from "../IconBadge/IconBadge";
import { icons } from "../icons";
import styles from "./InfoCard.module.css";

/**
 * Generic icon + title + description card.
 * Used for hero support tiles, help/support grids, and similar blocks.
 */
export default function InfoCard({
  icon,
  iconColor = "teal",
  title,
  description,
  theme = "dark",
  showAccent = false,
  className = "",
}) {
  const Icon = typeof icon === "string" ? icons[icon] || icons.users : icon;

  return (
    <article className={`${styles.card} ${styles[theme]} ${className}`}>
      <IconBadge icon={Icon} color={iconColor} />
      <h3>{title}</h3>
      {showAccent ? <span className={styles.bar} /> : null}
      <p>{description}</p>
    </article>
  );
}
