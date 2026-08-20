import { aboutPageContent } from "../../../data/aboutPageContent";
import { getIcon } from "../../../components/icons";
import StatCard from "../../../components/StatCard/StatCard";
import TimelineNode from "../../../components/TimelineNode/TimelineNode";
import SmartImage from "../../../components/SmartImage";
import styles from "./WhyMatters.module.css";

export default function WhyMatters() {
  const why = aboutPageContent.whyMatters;
  const journey = aboutPageContent.journey;
  const hiring = aboutPageContent.hiring;

  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className="container">
        <div className={styles.statsBlock}>
          <div className={styles.intro}>
            <h2 id="why-heading">
              {why.heading}
              <span>{why.accent}</span>
            </h2>
            <p>{why.description}</p>
          </div>
          <div className={styles.stats}>
            {why.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} compact className={styles.statCard} />
            ))}
          </div>
        </div>

        <div className={styles.journey}>
          <div className={styles.journeyIntro}>
            <h2>
              {journey.heading}
              <span>{journey.accent}</span>
            </h2>
            <p>{journey.description}</p>
          </div>
          <div className={styles.timeline}>
            <span className={styles.track} aria-hidden />
            {journey.milestones.map((item) => (
              <TimelineNode key={item.year} {...item} />
            ))}
          </div>
        </div>

        <div className={styles.hiring}>
          <div className={styles.hiringImage}>
            <SmartImage src={hiring.image} alt={hiring.imageAlt} />
          </div>
          <div>
            <h2>
              {hiring.heading} <span>{hiring.accentWords[0]}</span> and{" "}
              <span>{hiring.accentWords[1]}</span> {hiring.rest}
            </h2>
            <ul className={styles.features}>
              {hiring.features.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <li key={item.title}>
                    <span className={`${styles.sq} ${styles[item.color]}`}>
                      <Icon size={18} />
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
