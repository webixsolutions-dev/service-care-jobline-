import {
  CircleCheck,
  ArrowRight,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

import { employersPageContent } from "../../../data/employersPageContent";
import { pricingPlans } from "../../../data/pricingPlans";
import { hireableRoles } from "../../../data/hireableRoles";
import { paths } from "../../../data/navLinks";

import PricingCard from "../../../components/PricingCard/PricingCard";
import Pill from "../../../components/Pill/Pill";
import { getIcon } from "../../../components/icons";

import styles from "./PricingPlans.module.css";

/* =========================================================
   ACTIVE CANDIDATES ICON
========================================================= */

function CandidatesIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="44"
      height="44"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="32" cy="17" r="7" />

      <path
        d="
          M20 48
          V42
          C20 33.5 24.8 28 32 28
          C39.2 28 44 33.5 44 42
          V48
          C44 51 42 53 39 53
          H25
          C22 53 20 51 20 48
          Z
        "
      />

      <circle cx="16" cy="22" r="5.5" />

      <path
        d="
          M5 48
          V43
          C5 36.2 9 32 15 32
          C18 32 20.5 33 22.5 35
          C19.7 38 18 41.7 18 46
          V52
          H10
          C7 52 5 50 5 48
          Z
        "
      />

      <circle cx="48" cy="22" r="5.5" />

      <path
        d="
          M59 48
          V43
          C59 36.2 55 32 49 32
          C46 32 43.5 33 41.5 35
          C44.3 38 46 41.7 46 46
          V52
          H54
          C57 52 59 50 59 48
          Z
        "
      />
    </svg>
  );
}

/* =========================================================
   EMPLOYERS ICON
========================================================= */

function EmployersIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="44"
      height="44"
      fill="currentColor"
      aria-hidden
    >
      <path
        d="
          M19 5
          H45
          C48 5 50 7 50 10
          V56
          H14
          V10
          C14 7 16 5 19 5
          Z
        "
      />

      <rect
        x="21"
        y="13"
        width="6"
        height="7"
        rx="1"
        fill="#081f3c"
      />

      <rect
        x="36"
        y="13"
        width="6"
        height="7"
        rx="1"
        fill="#081f3c"
      />

      <rect
        x="21"
        y="25"
        width="6"
        height="7"
        rx="1"
        fill="#081f3c"
      />

      <rect
        x="36"
        y="25"
        width="6"
        height="7"
        rx="1"
        fill="#081f3c"
      />

      <rect
        x="21"
        y="37"
        width="6"
        height="7"
        rx="1"
        fill="#081f3c"
      />

      <rect
        x="36"
        y="37"
        width="6"
        height="7"
        rx="1"
        fill="#081f3c"
      />

      <rect
        x="28"
        y="46"
        width="8"
        height="10"
        rx="1"
        fill="#081f3c"
      />

      <path d="M7 24H14V56H7V24Z" />
    </svg>
  );
}

/* =========================================================
   CANADA ICON
========================================================= */

function CanadaIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="45"
      height="45"
      fill="currentColor"
      aria-hidden
    >
      <path
        d="
          M32 2
          L37 15
          L45 9
          L43 22
          L57 18
          L50 30
          L60 34
          L46 40
          L49 49
          L35 45
          L35 61
          L29 61
          L29 45
          L15 49
          L18 40
          L4 34
          L14 30
          L7 18
          L21 22
          L19 9
          L27 15
          Z
        "
      />
    </svg>
  );
}

/* =========================================================
   STAT ICON RESOLVER
========================================================= */

function getStatIcon(item, index) {
  const text =
    `${item?.label || ""} ${item?.value || ""}`.toLowerCase();

  if (
    text.includes("candidate") ||
    text.includes("4,800")
  ) {
    return CandidatesIcon;
  }

  if (
    text.includes("employer") ||
    text.includes("1,200")
  ) {
    return EmployersIcon;
  }

  if (
    text.includes("canada") ||
    text.includes("reach")
  ) {
    return CanadaIcon;
  }

  const icons = [
    CandidatesIcon,
    EmployersIcon,
    CanadaIcon,
  ];

  return icons[index] || CandidatesIcon;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function PricingPlans({
  sectionRef,
}) {
  const {
    kicker,
    headingBefore,
    hospitality,
    healthcare,
    headingAfter,
    subtext,
    note,
  } = employersPageContent.pricing;

  const stats = employersPageContent.stats;
  const roles = employersPageContent.roles;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="pricing-heading"
    >
      <div className="container">

        {/* =====================================
            HEADER
        ====================================== */}

        <p className={styles.kicker}>
          {kicker}
        </p>

        <h2 id="pricing-heading">
          {headingBefore}

          <br />

          <span className={styles.gold}>
            {hospitality}
          </span>

          {" "}&amp;{" "}

          <span className={styles.teal}>
            {healthcare}
          </span>

          {" "}
          {headingAfter}
        </h2>

        <p className={styles.sub}>
          {subtext}
        </p>

        {/* =====================================
            PRICING CARDS
        ====================================== */}

        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              priceTone={plan.priceTone}
              features={plan.features}
              popular={plan.popular}
              popularLabel={plan.popularLabel}
              buttonVariant={plan.buttonVariant}
              buttonTo={plan.buttonTo}
            />
          ))}
        </div>

        {/* =====================================
            NOTE
        ====================================== */}

        <p className={styles.note}>
          <CircleCheck
            size={16}
            strokeWidth={2.4}
            aria-hidden
          />

          {note}
        </p>

        {/* =====================================
            STATS
        ====================================== */}

        <ul className={styles.stats}>
          {stats.map((item, index) => {
            const StatIcon = getStatIcon(
              item,
              index
            );

            return (
              <li
                key={item.label}
                className={styles.statItem}
              >
                <span className={styles.statIcon}>
                  <StatIcon />
                </span>

                <div className={styles.statContent}>
                  {item.value ? (
                    <p className={styles.value}>
                      {item.value}
                    </p>
                  ) : null}

                  <p
                    className={
                      item.value
                        ? styles.label
                        : styles.reachLabel
                    }
                  >
                    {item.label}
                  </p>

                  <p className={styles.statDesc}>
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* =====================================
            ROLES YOU CAN HIRE FOR
        ====================================== */}

        <div className={styles.roles}>

          {/* LEFT SIDE */}

          <div className={styles.rolesLabel}>
            <div className={styles.rolesIcon}>
              <User
                size={23}
                strokeWidth={1.8}
                aria-hidden
              />
            </div>

            <h3>
              Roles You
              <br />
              Can Hire For
            </h3>
          </div>

          {/* CENTER PILLS */}

          <div className={styles.pills}>
            {hireableRoles.map((role) => {
              const Icon = getIcon(role.icon);

              return (
                <Pill
                  key={role.label}
                  as={Link}
                  to={`${paths.browseJobs}?keyword=${encodeURIComponent(
                    role.label
                  )}`}
                  tone="navy"
                  icon={Icon}
                >
                  {role.label}
                </Pill>
              );
            })}
          </div>

          {/* RIGHT HELP */}

          <div className={styles.help}>
            <p>
              {roles.help}
            </p>

            <Link to={roles.contactTo}>
              <span>
                {roles.contactLabel}
              </span>

              <ArrowRight
                size={14}
                strokeWidth={2}
              />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}