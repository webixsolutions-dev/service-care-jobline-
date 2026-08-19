import { Users } from "lucide-react";
import { aboutPageContent } from "../../../data/aboutPageContent";
import IconBadge from "../../../components/IconBadge/IconBadge";
import { getIcon } from "../../../components/icons";
import styles from "./ConnectingPeople.module.css";

export default function ConnectingPeople() {
  const { heading, accent, paragraphs, features } = aboutPageContent.connecting;

  return (
    <section className={styles.section} aria-labelledby="connecting-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <div className={styles.ornament}>
            <span className={styles.line} />
            <IconBadge icon={Users} color="teal" size="md" />
            <span className={styles.line} />
          </div>
          <h2 id="connecting-heading" className={styles.heading}>
            {heading} <span>{accent}</span>
          </h2>
          <div className={styles.copy}>
            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          {features.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.title} className={styles.row}>
                {i > 0 ? <hr /> : null}
                <div className={styles.feature}>
                  <IconBadge icon={Icon} color="teal" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
