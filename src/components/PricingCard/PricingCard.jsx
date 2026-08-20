import { Briefcase, CircleCheck } from "lucide-react";
import Button from "../Button/Button";
import styles from "./PricingCard.module.css";

/**
 * Employer pricing tile. `buttonVariant` should match the Button component.
 * `theme="light"` is the white-card variant used on Post a Job.
 */
export default function PricingCard({
  name,
  description,
  price,
  period = "/30 days",
  priceTone = "gold",
  features = [],
  popular = false,
  popularLabel = "Most Popular",
  buttonVariant = "solid-gold",
  buttonTo,
  buttonLabel = "Post a Job",
  buttonIcon: ButtonIcon = Briefcase,
  checkIconColor = "teal",
  theme = "dark",
  onSelect,
}) {
  const checkClass = checkIconColor === "gold" ? styles.checkGold : styles.checkTeal;

  return (
    <article
      className={`${styles.card} ${theme === "light" ? styles.light : ""} ${
        popular ? styles.popular : ""
      }`}
    >
      {popular ? <span className={styles.badge}>{popularLabel}</span> : null}
      <h3>{name}</h3>
      <p className={styles.tagline}>{description}</p>
      <p className={styles.price}>
        <span className={styles[priceTone] || styles.gold}>${price}</span>
        <span className={styles.period}>{period}</span>
      </p>
      <ul className={`${styles.features} ${checkClass}`}>
        {features.map((item) => (
          <li key={item}>
            <CircleCheck size={18} strokeWidth={2.2} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <Button
        to={buttonTo}
        variant={buttonVariant}
        icon={ButtonIcon || undefined}
        className={styles.cta}
        onClick={onSelect}
      >
        {buttonLabel}
      </Button>
    </article>
  );
}
