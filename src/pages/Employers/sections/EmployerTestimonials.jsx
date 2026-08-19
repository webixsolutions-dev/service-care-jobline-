import { employersPageContent } from "../../../data/employersPageContent";
import { employerTestimonials } from "../../../data/employerTestimonials";
import { employerLogos } from "../../../data/employerLogos";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import styles from "./EmployerTestimonials.module.css";

export default function EmployerTestimonials() {
  const { kicker, heading, subtext, logosKicker } = employersPageContent.testimonials;

  return (
    <section className={styles.section} aria-labelledby="employer-stories-heading">
      <div className="container">
        <p className={styles.kicker}>{kicker}</p>
        <h2 id="employer-stories-heading">{heading}</h2>
        <p className={styles.sub}>{subtext}</p>
        <div className={styles.grid}>
          {employerTestimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>

        <p className={styles.logosKicker}>{logosKicker}</p>
        <ul className={styles.logos}>
          {employerLogos.map((logo, i) => (
            <li key={logo.id}>
              {i > 0 ? <span className={styles.divider} /> : null}
              <span className={`${styles.wordmark} ${styles[logo.style]}`}>
                <strong>{logo.name}</strong>
                <small>{logo.sub}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
