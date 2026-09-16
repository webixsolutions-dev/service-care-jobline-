import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

import { employersPageContent } from "../../../data/employersPageContent";
import { howItWorksSteps } from "../../../data/howItWorksSteps";

import styles from "./HowItWorks.module.css";

/* =========================================================
   POST A JOB ICON
========================================================= */

function PostJobIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="34"
      height="34"
      fill="none"
      aria-hidden
    >
      {/* handle */}
      <path
        d="M24 18V13C24 10.8 25.8 9 28 9H36C38.2 9 40 10.8 40 13V18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* briefcase */}
      <rect
        x="10"
        y="18"
        width="44"
        height="32"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* middle line */}
      <path
        d="M10 29H54"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* lock */}
      <path
        d="M29 27V33H35V27"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   RECEIVE APPLICATIONS ICON
========================================================= */

function ReceiveApplicationsIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="34"
      height="34"
      fill="none"
      aria-hidden
    >
      {/* document */}
      <path
        d="M16 7H38L49 18V55H16V7Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M38 7V19H49"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* person */}
      <circle
        cx="29"
        cy="28"
        r="5"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <path
        d="M21 42C22 35.8 25.5 33 29 33C32.5 33 36 35.8 37 42"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* text lines */}
      <path
        d="M40 29H44"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M40 36H44"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   HIRE WITH CONFIDENCE ICON
========================================================= */

function HireConfidenceIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="36"
      height="36"
      fill="none"
      aria-hidden
    >
      {/* person */}
      <circle
        cx="26"
        cy="23"
        r="7"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M13 46C14.5 36.5 19.5 32 26 32C32.5 32 37.5 36.5 39 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* check circle */}
      <circle
        cx="45"
        cy="39"
        r="11"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M39.5 39L43.5 43L50.5 35"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stepIcons = {
  1: PostJobIcon,
  2: ReceiveApplicationsIcon,
  3: HireConfidenceIcon,
};

export default function HowItWorks() {
  const { heading } = employersPageContent.howItWorks;

  return (
    <section
      className={styles.section}
      aria-labelledby="how-it-works-heading"
    >
      <div className="container">
        <div className={styles.panel}>
          {/* =====================================
              HEADING
          ====================================== */}

          <div className={styles.head}>
            <span className={styles.line} aria-hidden />

            <h2 id="how-it-works-heading">
              {heading}
            </h2>

            <span className={styles.line} aria-hidden />
          </div>

          {/* =====================================
              STEPS
          ====================================== */}

          <div className={styles.steps}>
            {howItWorksSteps.map((step, index) => {
              const Icon =
                stepIcons[Number(step.number)] ||
                PostJobIcon;

              return (
                <Fragment key={step.number}>
                  <article className={styles.step}>
                    {/* NUMBER */}

                    <span className={styles.number}>
                      {step.number}
                    </span>

                    {/* ICON */}

                    <div className={styles.iconCircle}>
                      <Icon />
                    </div>

                    {/* TEXT */}

                    <div className={styles.stepContent}>
                      <span className={styles.stepLabel}>
                        Step {step.number}
                      </span>

                      <h3>{step.title}</h3>

                      <p>{step.description}</p>
                    </div>
                  </article>

                  {index <
                  howItWorksSteps.length - 1 ? (
                    <ChevronRight
                      className={styles.chevron}
                      size={28}
                      strokeWidth={1.7}
                      aria-hidden
                    />
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}