import { homePageContent } from "../../../data/homePageContent";
import { whyChooseHomeFeatures } from "../../../data/whyChooseHomeFeatures";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";
import styles from "./WhyChooseHome.module.css";

export default function WhyChooseHome() {
  const { headingBefore, brand, subtext } = homePageContent.whyChoose;

  return (
    <section className={styles.section} aria-labelledby="why-choose-home-heading">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.line} aria-hidden />
          <h2 id="why-choose-home-heading">
            {headingBefore} <span className={styles.teal}>{brand}</span>
          </h2>
          <span className={styles.line} aria-hidden />
        </div>
        <p className={styles.sub}>{subtext}</p>
        <div className={styles.grid}>
          {whyChooseHomeFeatures.map((item) => (
            <FeatureCard key={item.title} {...item} theme="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}
