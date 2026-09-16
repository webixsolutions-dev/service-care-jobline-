import { postJobPageContent } from "../../../data/postJobPageContent";
import { postJobTestimonials } from "../../../data/postJobTestimonials";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import styles from "./PostJobTestimonials.module.css";

export default function PostJobTestimonials() {
  const { kicker, heading } = postJobPageContent.testimonials;

  return (
    <section className={styles.section} aria-labelledby="post-job-testimonials-heading">
      <div className="container">
        <p className={styles.kicker}>{kicker}</p>
        <h2 id="post-job-testimonials-heading">{heading}</h2>
        <div className={styles.grid}>
          {postJobTestimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
