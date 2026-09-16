import { aboutPageContent } from "../../../data/aboutPageContent";
import ImageFeatureCard from "../../../components/ImageFeatureCard/ImageFeatureCard";
import styles from "./WhoWeServe.module.css";

export default function WhoWeServe() {
  const { subtext, cards } = aboutPageContent.whoWeServe;

  return (
    <section className={styles.section} aria-labelledby="who-heading">
      <div className="container">
        <div className={styles.panel}>
          <h2 id="who-heading">
            Who <span>We</span> Serve
          </h2>
          <p className={styles.sub}>{subtext}</p>
          <div className={styles.grid}>
            {cards.map((card) => (
              <ImageFeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
