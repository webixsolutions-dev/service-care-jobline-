import JobPostingForm from "./JobPostingForm";
import WhyPostWithUs from "./WhyPostWithUs";
import styles from "./JobPostingFormSection.module.css";

export default function JobPostingFormSection({ formRef }) {
  return (
    <section className={styles.section} aria-labelledby="job-details-heading">
      <div className={`container ${styles.grid}`}>
        <JobPostingForm ref={formRef} />
        <WhyPostWithUs />
      </div>
    </section>
  );
}
