import { icons } from "../icons";
import styles from "./FAQItem.module.css";

/**
 * Compact FAQ teaser cell: icon, question, short answer.
 */
export default function FAQItem({ icon, iconColor = "teal", question, answer }) {
  const Icon = typeof icon === "string" ? icons[icon] || icons.users : icon;

  return (
    <article className={styles.item}>
      <span className={`${styles.icon} ${styles[iconColor]}`} aria-hidden>
        <Icon size={20} strokeWidth={2.1} />
      </span>
      <h3>{question}</h3>
      <p>{answer}</p>
    </article>
  );
}
