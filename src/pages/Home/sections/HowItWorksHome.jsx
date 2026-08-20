import { Fragment } from "react";
import { homePageContent } from "../../../data/homePageContent";
import { howItWorksHomeSteps } from "../../../data/howItWorksHomeSteps";
import StepItem from "../../../components/StepItem/StepItem";
import styles from "./HowItWorksHome.module.css";

export default function HowItWorksHome() {
  const { headingBefore, brand, headingAfter, subtext } = homePageContent.howItWorks;

  return (
    <section className={styles.section} aria-labelledby="home-how-it-works-heading">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.head}>
            <span className={styles.line} aria-hidden />
            <h2 id="home-how-it-works-heading">
              {headingBefore} <span className={styles.teal}>{brand}</span> {headingAfter}
            </h2>
            <span className={styles.line} aria-hidden />
          </div>
          <p className={styles.sub}>{subtext}</p>
          <div className={styles.steps}>
            {howItWorksHomeSteps.map((step, i) => (
              <Fragment key={step.number}>
                <StepItem {...step} theme="dark" hideLabel />
                {i < howItWorksHomeSteps.length - 1 ? (
                  <span className={styles.connector} aria-hidden />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
