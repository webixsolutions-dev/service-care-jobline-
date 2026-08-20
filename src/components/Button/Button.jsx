import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const variantClass = {
  "solid-teal": styles.solidTeal,
  "solid-gold": styles.solidGold,
  "solid-navy": styles.solidNavy,
  "outline-gold": styles.outlineGold,
  "outline-teal": styles.outlineTeal,
  "outline-white": styles.outlineWhite,
};

/**
 * Reusable CTA button.
 * @param {"solid-teal"|"solid-gold"|"solid-navy"|"outline-gold"|"outline-teal"|"outline-white"} variant
 */
export default function Button({
  children,
  to,
  href,
  variant = "solid-teal",
  icon: Icon,
  iconPosition = "left",
  size = "md",
  className = "",
  type = "button",
  onClick,
}) {
  const classes = `${styles.btn} ${variantClass[variant] || styles.solidTeal} ${
    size === "sm" ? styles.sm : ""
  } ${className}`;
  const content = (
    <>
      {Icon && iconPosition !== "right" ? <Icon size={size === "sm" ? 16 : 18} strokeWidth={2.2} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "right" ? <Icon size={size === "sm" ? 16 : 18} strokeWidth={2.2} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
