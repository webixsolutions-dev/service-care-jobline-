import { Users } from "lucide-react";
import { employersPageContent } from "../../../data/employersPageContent";
import { employerFeatures } from "../../../data/employerFeatures";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const { badge, heading, brand, subtext } = employersPageContent.whyChoose;

  return (
    <section className={styles.section} aria-labelledby="why-choose-heading">
      <div className="container">
        <span className={styles.badge}>
          <Users size={15} strokeWidth={2.2} aria-hidden />
          {badge}
        </span>
        <h2 id="why-choose-heading">
          {heading} <span>{brand}</span>
        </h2>
        <p className={styles.sub}>{subtext}</p>
        <div className={styles.grid}>
          {employerFeatures.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
