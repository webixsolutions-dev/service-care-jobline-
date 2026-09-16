import { aboutPageContent } from "../../../data/aboutPageContent";
import { getIcon } from "../../../components/icons";
import SmartImage from "../../../components/SmartImage";
import styles from "./WhyMatters.module.css";

export default function WhyMatters() {
  const hiring = aboutPageContent.hiring;

  return (
    <section
      className={styles.section}
      aria-labelledby="hiring-heading"
    >
      <div className="container">
        <div className={styles.hiring}>
          {/* IMAGE */}
          <div className={styles.hiringImage}>
            <SmartImage
              src={hiring.image}
              alt={hiring.imageAlt}
            />
          </div>

          {/* CONTENT */}
          <div className={styles.hiringContent}>
            <h2 id="hiring-heading">
              {hiring.heading}{" "}
              <span>{hiring.accentWords[0]}</span>
              {" "}and{" "}
              <span>{hiring.accentWords[1]}</span>
              {" "}
              {hiring.rest}
            </h2>

            <ul className={styles.features}>
              {hiring.features.map((item) => {
                const Icon = getIcon(item.icon);

                return (
                  <li key={item.title}>
                    <span
                      className={`${styles.sq} ${styles[item.color]}`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}