import { Fragment } from "react";

import { homePageContent } from "../../../data/homePageContent";
import { howItWorksHomeSteps } from "../../../data/howItWorksHomeSteps";

import styles from "./HowItWorksHome.module.css";

/* =========================================================
   HOME STEP ICONS
========================================================= */

function SearchJobsIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="46"
      height="46"
      fill="none"
      aria-hidden
    >
      <circle
        cx="27"
        cy="27"
        r="16"
        stroke="#FFFFFF"
        strokeWidth="4"
      />

      <path
        d="M39 39L53 53"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ApplyEasyIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="46"
      height="46"
      fill="none"
      aria-hidden
    >
      <rect
        x="14"
        y="9"
        width="32"
        height="43"
        rx="3"
        stroke="#FFFFFF"
        strokeWidth="3"
      />

      <rect
        x="19"
        y="15"
        width="10"
        height="10"
        rx="1.5"
        fill="#FFFFFF"
      />

      <circle
        cx="24"
        cy="18.5"
        r="2.5"
        fill="#071D38"
      />

      <path
        d="M20.5 23C21.5 20.8 26.5 20.8 27.5 23"
        stroke="#071D38"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M33 17H41"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M33 23H41"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M19 32H36"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M19 39H33"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="45"
        cy="45"
        r="10"
        fill="#12BBB5"
      />

      <path
        d="M40.5 45L44 48.5L50 41.5"
        stroke="#071D38"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmployersIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="48"
      height="48"
      fill="none"
      aria-hidden
    >
      <circle
        cx="25"
        cy="23"
        r="9"
        fill="#FFFFFF"
      />

      <path
        d="M10 50C10 39.5 16.5 34 25 34C33.5 34 40 39.5 40 50"
        fill="#FFFFFF"
      />

      <circle
        cx="43"
        cy="24"
        r="7"
        fill="#12BBB5"
      />

      <path
        d="M38 35C47 34 54 39.5 54 48"
        stroke="#12BBB5"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CareerIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="48"
      height="48"
      fill="none"
      aria-hidden
    >
      <rect
        x="12"
        y="40"
        width="7"
        height="13"
        rx="1"
        fill="#FFFFFF"
      />

      <rect
        x="24"
        y="33"
        width="7"
        height="20"
        rx="1"
        fill="#12BBB5"
      />

      <rect
        x="36"
        y="24"
        width="7"
        height="29"
        rx="1"
        fill="#FFFFFF"
      />

      <rect
        x="48"
        y="17"
        width="7"
        height="36"
        rx="1"
        fill="#12BBB5"
      />

      <path
        d="M11 32L23 23L32 27L50 10"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M41 10H50V19"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stepIcons = {
  1: SearchJobsIcon,
  2: ApplyEasyIcon,
  3: EmployersIcon,
  4: CareerIcon,
};

/* ========================================================= */

export default function HowItWorksHome() {
  const {
    headingBefore,
    brand,
    headingAfter,
    subtext,
  } = homePageContent.howItWorks;

  return (
    <section
      className={styles.section}
      aria-labelledby="home-how-it-works-heading"
    >
      <div className="container">
        <div className={styles.panel}>
          {/* HEADING WITH GOLD LINES */}
          <div className={styles.head}>
            <span
              className={`${styles.headingLine} ${styles.headingLineLeft}`}
              aria-hidden
            />

            <h2 id="home-how-it-works-heading">
              {headingBefore}{" "}
              <span className={styles.teal}>
                {brand}
              </span>{" "}
              {headingAfter}
            </h2>

            <span
              className={`${styles.headingLine} ${styles.headingLineRight}`}
              aria-hidden
            />
          </div>

          <p className={styles.sub}>
            {subtext}
          </p>

          <div className={styles.steps}>
            {howItWorksHomeSteps.map((step, i) => {
              const Icon =
                stepIcons[Number(step.number)] ||
                SearchJobsIcon;

              return (
                <Fragment key={step.number}>
                  <article className={styles.card}>
                    <span className={styles.number}>
                      {step.number}
                    </span>

                    <div className={styles.iconCircle}>
                      <Icon />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </article>

                  {i <
                  howItWorksHomeSteps.length - 1 ? (
                    <span
                      className={styles.connector}
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