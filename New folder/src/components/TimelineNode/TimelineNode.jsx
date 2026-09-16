import { getIcon } from "../icons";
import styles from "./TimelineNode.module.css";

export default function TimelineNode({ icon, color = "teal", year, title, description }) {
  const Icon = getIcon(icon);

  return (
    <article className={styles.node}>
      <span className={`${styles.icon} ${styles[color]}`}>
        <Icon size={20} strokeWidth={2.1} />
      </span>
      <p className={`${styles.year} ${styles[color]}`}>{year}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}
