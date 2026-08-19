import IconBadge from "../IconBadge/IconBadge";
import { getIcon } from "../icons";
import styles from "./TrustBadgeStrip.module.css";

/**
 * Three-column trust badge strip used on Home, Employers, and Post a Job.
 * Each item: `{ icon, title, description, badgeColor? }`.
 * `variant="cards"` renders separate bordered tiles; `showAccent` adds a teal underline.
 */
export default function TrustBadgeStrip({
  items = [],
  variant = "strip",
  showAccent = false,
  connected = false,
}) {
  return (
    <ul
      className={`${styles.strip} ${variant === "cards" ? styles.cards : ""} ${
        connected ? styles.connected : ""
      }`}
    >
      {items.map((item) => {
        const Icon = getIcon(item.icon);
        return (
          <li key={item.title}>
            <IconBadge icon={Icon} color={item.badgeColor || "tealOutline"} size="lg" />
            <div>
              <h3>{item.title}</h3>
              {showAccent ? <span className={styles.bar} aria-hidden /> : null}
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
