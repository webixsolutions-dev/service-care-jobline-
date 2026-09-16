import { homePageContent } from "../../../data/homePageContent";
import { whyChooseHomeFeatures } from "../../../data/whyChooseHomeFeatures";
import { getIcon } from "../../../components/icons";

import styles from "./WhyChooseHome.module.css";

export default function WhyChooseHome() {
  const {
    headingBefore,
    brand,
    subtext,
  } = homePageContent.whyChoose;

  return (
    <section
      className={styles.section}
      aria-labelledby="why-choose-home-heading"
    >
      <div className="container">
        {/* =========================
            HEADING
        ========================== */}

        <div className={styles.head}>
          <span
            className={`${styles.line} ${styles.lineLeft}`}
            aria-hidden
          />

          <h2 id="why-choose-home-heading">
            {headingBefore}{" "}
            <span className={styles.teal}>
              {brand}
            </span>
          </h2>

          <span
            className={`${styles.line} ${styles.lineRight}`}
            aria-hidden
          />
        </div>

        <p className={styles.sub}>
          {subtext}
        </p>

        {/* =========================
            FEATURES
        ========================== */}

        <div className={styles.grid}>
          {whyChooseHomeFeatures.map((item) => {
            const Icon = getIcon(item.icon);

            return (
              <article
                key={item.title}
                className={styles.card}
              >
                <div className={styles.iconCircle}>
                  {Icon ? (
                    <Icon
                      size={36}
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  ) : null}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}