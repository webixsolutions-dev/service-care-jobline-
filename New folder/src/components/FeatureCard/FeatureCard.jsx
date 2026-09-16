import IconBadge from "../IconBadge/IconBadge";
import { getIcon } from "../icons";
import styles from "./FeatureCard.module.css";

/**
 * Light or dark feature tile: icon badge, title, and description.
 * `theme="dark"` renders navy cards with gold titles for dark sections.
 */
export default function FeatureCard({
  icon,
  title,
  description,
  theme = "light",
  className = "",
}) {
  const Icon = typeof icon === "string" ? getIcon(icon) : icon;
  const badgeColor = theme === "dark" ? "tealOutline" : "tealSoftOutline";

  return (
    <article className={`${styles.card} ${theme === "dark" ? styles.dark : ""} ${className}`}>
      <IconBadge icon={Icon} color={badgeColor} size={theme === "dark" ? "lg" : "md"} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
