import { aboutPageContent } from "../../../data/aboutPageContent";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const { headingBefore, employers, and, jobSeekers, headingAfter, items } =
    aboutPageContent.testimonials;

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">
          {headingBefore} <span className={styles.teal}>{employers}</span> {and}
          <br />
          <span className={styles.gold}>{jobSeekers}</span> {headingAfter}
        </h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
