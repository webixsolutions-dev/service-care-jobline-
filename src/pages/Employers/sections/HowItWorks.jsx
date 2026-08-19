import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { employersPageContent } from "../../../data/employersPageContent";
import { howItWorksSteps } from "../../../data/howItWorksSteps";
import StepItem from "../../../components/StepItem/StepItem";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const { heading } = employersPageContent.howItWorks;

  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.head}>
            <span className={styles.line} />
            <h2 id="how-it-works-heading">{heading}</h2>
            <span className={styles.line} />
          </div>
          <div className={styles.steps}>
            {howItWorksSteps.map((step, i) => (
              <Fragment key={step.number}>
                <StepItem {...step} />
                {i < howItWorksSteps.length - 1 ? (
                  <ChevronRight className={styles.chevron} size={28} aria-hidden />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
