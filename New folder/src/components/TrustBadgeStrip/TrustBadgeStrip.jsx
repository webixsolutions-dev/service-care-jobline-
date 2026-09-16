import { ShieldCheck, Send } from "lucide-react";
import { GiMapleLeaf } from "react-icons/gi";

import styles from "./TrustBadgeStrip.module.css";

export default function TrustBadgeStrip({
  items = [],
  variant = "strip",
  showAccent = false,
  connected = false,
}) {
  function getBadge(item) {
    const title = item.title?.toLowerCase() || "";

    // Verified Employers
    if (title.includes("verified")) {
      return {
        Icon: ShieldCheck,
        color: "#11bbb5",
      };
    }

    // Jobs Across Canada
    if (title.includes("canada")) {
      return {
        Icon: GiMapleLeaf,
        color: "#f5aa24",
      };
    }

    // Easy Applications
    if (title.includes("application")) {
      return {
        Icon: Send,
        color: "#11bbb5",
      };
    }

    // fallback
    return {
      Icon: ShieldCheck,
      color: "#11bbb5",
    };
  }

  return (
    <ul
      className={`${styles.strip} ${
        variant === "cards" ? styles.cards : ""
      } ${connected ? styles.connected : ""}`}
    >
      {items.map((item) => {
        const { Icon, color } = getBadge(item);

        return (
          <li key={item.title}>
            {/* ICON DIRECTLY HERE */}
            <div
              style={{
                width: "52px",
                height: "52px",
                minWidth: "52px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "50%",

                border: `1.5px solid ${color}`,
                background: "rgba(5, 29, 55, 0.65)",

                color,
              }}
            >
              <Icon
                size={25}
                strokeWidth={1.8}
                aria-hidden
              />
            </div>

            <div>
              <h3>{item.title}</h3>

              {showAccent ? (
                <span
                  className={styles.bar}
                  aria-hidden
                />
              ) : null}

              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}