import { aboutPageContent } from "../../../data/aboutPageContent";
import { getIcon } from "../../../components/icons";
import styles from "./MissionVision.module.css";

export default function MissionVision() {
  const { heading, paragraphs, values } = aboutPageContent.mission;

  return (
    <section className={styles.section} aria-labelledby="mission-heading">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2 id="mission-heading">{heading}</h2>
            <span className={styles.bar} />
            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
          <div className={styles.values}>
            {values.map((value, i) => {
              const Icon = getIcon(value.icon);
              return (
                <article key={value.title} className={styles.value}>
                  {i > 0 ? <span className={styles.divider} /> : null}
                  <span className={`${styles.icon} ${styles[value.color]}`}>
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <h3 className={styles[value.color]}>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
