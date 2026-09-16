import { Users } from "lucide-react";

import { employersPageContent } from "../../../data/employersPageContent";
import { employerFeatures } from "../../../data/employerFeatures";

import styles from "./WhyChooseUs.module.css";

/* =========================================================
   1. VERIFIED CANDIDATES
   Shield + Person
========================================================= */

function VerifiedCandidatesIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="40"
      height="40"
      fill="none"
      aria-hidden
    >
      <path
        d="M32 5L51 12V28C51 41 43 51 32 58C21 51 13 41 13 28V12L32 5Z"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinejoin="round"
      />

      <circle
        cx="32"
        cy="25"
        r="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M22 43C23.5 35.5 28 32 32 32C36 32 40.5 35.5 42 43"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   2. FASTER HIRING
   Speed Lines + Clock
========================================================= */

function FasterHiringIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="42"
      height="42"
      fill="none"
      aria-hidden
    >
      <path
        d="M28 11C31 9.5 34 9 37 9C49 9 58 18.5 58 30.5C58 42.5 49 52 37 52C28 52 20.5 47 17 39.5"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
      />

      <path
        d="M37 17V31L47 37"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M6 19H23"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <path
        d="M3 27H20"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <path
        d="M7 35H22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   3. CANADA-WIDE REACH
   Maple Leaf
========================================================= */

function CanadaReachIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="42"
      height="42"
      fill="currentColor"
      aria-hidden
    >
      <path
        d="
          M32 4
          L36 15
          L44 10
          L42 21
          L55 18
          L49 29
          L58 33
          L45 39
          L47 47
          L35 44
          L35 58
          L29 58
          L29 44
          L17 47
          L19 39
          L6 33
          L15 29
          L9 18
          L22 21
          L20 10
          L28 15
          Z
        "
      />
    </svg>
  );
}

/* =========================================================
   4. FLEXIBLE PLANS
   Tag
========================================================= */

function FlexiblePlansIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="40"
      height="40"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 31L29 9H50C53 9 55 11 55 14V35L33 57L7 31Z"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinejoin="round"
      />

      <circle
        cx="43"
        cy="20"
        r="4"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

/* =========================================================
   5. DEDICATED SUPPORT
   Headset
========================================================= */

function DedicatedSupportIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="42"
      height="42"
      fill="none"
      aria-hidden
    >
      <path
        d="M11 34V28C11 16.5 20.5 7 32 7C43.5 7 53 16.5 53 28V34"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
      />

      <rect
        x="8"
        y="29"
        width="10"
        height="19"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.6"
      />

      <rect
        x="46"
        y="29"
        width="10"
        height="19"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.6"
      />

      <path
        d="M51 48C49 54 43 57 37 57H33"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <rect
        x="27"
        y="53"
        width="8"
        height="5"
        rx="2.5"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   6. QUALITY APPLICATIONS
   Document + Plus
========================================================= */

function QualityApplicationsIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="42"
      height="42"
      fill="none"
      aria-hidden
    >
      <path
        d="M15 6H39L50 17V50C50 54 47 57 43 57H15C11 57 8 54 8 50V13C8 9 11 6 15 6Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      <path
        d="M39 6V18H50"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      <path
        d="M17 27H37"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <path
        d="M17 35H34"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <path
        d="M17 43H29"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <circle
        cx="48"
        cy="47"
        r="10"
        fill="#12BBB5"
      />

      <path
        d="M48 42V52"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      <path
        d="M43 47H53"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   ICON RESOLVER
========================================================= */

function getFeatureIcon(item, index) {
  const title = String(item?.title || "").toLowerCase();

  if (title.includes("verified")) {
    return VerifiedCandidatesIcon;
  }

  if (title.includes("faster")) {
    return FasterHiringIcon;
  }

  if (
    title.includes("canada") ||
    title.includes("reach")
  ) {
    return CanadaReachIcon;
  }

  if (
    title.includes("flexible") ||
    title.includes("plan")
  ) {
    return FlexiblePlansIcon;
  }

  if (title.includes("support")) {
    return DedicatedSupportIcon;
  }

  if (
    title.includes("quality") ||
    title.includes("application")
  ) {
    return QualityApplicationsIcon;
  }

  const icons = [
    VerifiedCandidatesIcon,
    FasterHiringIcon,
    CanadaReachIcon,
    FlexiblePlansIcon,
    DedicatedSupportIcon,
    QualityApplicationsIcon,
  ];

  return icons[index] || VerifiedCandidatesIcon;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function WhyChooseUs() {
  const {
    badge,
    heading,
    brand,
    subtext,
  } = employersPageContent.whyChoose;

  return (
    <section
      className={styles.section}
      id="why-choose"
      aria-labelledby="why-choose-heading"
    >
      <div className="container">

        <span className={styles.badge}>
          <Users
            size={15}
            strokeWidth={2.2}
            aria-hidden
          />

          {badge}
        </span>

        <h2 id="why-choose-heading">
          {heading}{" "}
          <span>{brand}</span>
        </h2>

        <p className={styles.sub}>
          {subtext}
        </p>

        <div className={styles.grid}>
          {employerFeatures.map((item, index) => {
            const Icon = getFeatureIcon(item, index);

            return (
              <article
                key={item.title}
                className={styles.card}
              >
                <div className={styles.iconCircle}>
                  <Icon />
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}