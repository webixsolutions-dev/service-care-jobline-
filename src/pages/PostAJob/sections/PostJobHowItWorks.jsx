import { postJobPageContent } from "../../../data/postJobPageContent";
import StepItem from "../../../components/StepItem/StepItem";
import styles from "./PostJobHowItWorks.module.css";

export default function PostJobHowItWorks() {
  const { headingBefore, headingAccent, subtext, steps } = postJobPageContent.howItWorks;

  return (
    <section className={styles.section} aria-labelledby="post-job-how-it-works-heading">
      <div className="container">
        <div className={styles.panel}>
          <h2 id="post-job-how-it-works-heading">
            {headingBefore} <span>{headingAccent}</span>
          </h2>
          <p className={styles.sub}>{subtext}</p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <StepItem
                key={step.number}
                {...step}
                theme="onDark"
                hideLabel
                numberPosition="bottom-right"
                connector={i < steps.length - 1 ? "line" : "none"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
