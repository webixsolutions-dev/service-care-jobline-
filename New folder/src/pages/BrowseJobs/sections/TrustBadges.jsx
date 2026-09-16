import { browseJobsContent } from "../../../data/browseJobsContent";
import { getIcon } from "../../../components/icons";
import styles from "./TrustBadges.module.css";

export default function TrustBadges() {
  return (
    <section className={styles.section} aria-label="Trust highlights">
      <div className={`container ${styles.row}`}>
        {browseJobsContent.trustBadges.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <article key={item.title} className={styles.item}>
              <span className={`${styles.icon} ${styles[item.color]}`}>
                <Icon size={22} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
