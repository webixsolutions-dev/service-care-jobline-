import styles from "./IconBadge.module.css";

const iconSize = { sm: 16, md: 18, lg: 22, xl: 28 };

/**
 * Circular (or square) icon wrapper.
 * @param {"teal"|"gold"|"tealSoft"|"goldSoft"|"tealOutline"|"goldOutline"|"tealSoftOutline"} color
 * @param {"circle"|"square"} shape
 * @param {"sm"|"md"|"lg"|"xl"} size
 */
export default function IconBadge({
  icon: Icon,
  color = "teal",
  shape = "circle",
  size = "md",
  className = "",
}) {
  return (
    <span
      className={`${styles.badge} ${styles[color] || ""} ${styles[shape]} ${styles[size]} ${className}`}
    >
      <Icon size={iconSize[size] || 18} strokeWidth={2.1} />
    </span>
  );
}
