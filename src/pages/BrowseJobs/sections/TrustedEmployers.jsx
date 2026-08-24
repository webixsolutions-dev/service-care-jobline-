import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { browseJobsContent } from "../../../data/browseJobsContent";
import EmployerMark from "./EmployerMark";

import styles from "./TrustedEmployers.module.css";

/* =========================================
   MOCK TRUSTED EMPLOYERS
========================================= */

const mockEmployers = [
  {
    id: 1,
    name: "Sunnybrook",
    sub: "Health Centre",
    style: "tree",
    color: "#5d9b3f",
  },
  {
    id: 2,
    name: "Coast",
    sub: "Hotels",
    style: "wave",
    color: "#147ea3",
  },
  {
    id: 3,
    name: "Comfort",
    sub: "Home Care",
    style: "heartHouse",
    color: "#13a99f",
  },
  {
    id: 4,
    name: "River Valley",
    sub: "Seniors Residence",
    style: "leaf",
    color: "#26745d",
  },
  {
    id: 5,
    name: "HealthPlus",
    sub: "Medical Clinic",
    style: "cross",
    color: "#2472c8",
  },
  {
    id: 6,
    name: "Fairmont",
    sub: "Hotels & Resorts",
    style: "script",
    color: "#15243a",
  },
];

/* =========================================
   COMPONENT
========================================= */

export default function TrustedEmployers() {
  const {
    heading,
    viewAllLabel,
    viewAllTo,
  } = browseJobsContent.trustedEmployers;

  return (
    <section
      className={styles.section}
      aria-labelledby="employers-heading"
    >
      <div className="container">
        <div className={styles.card}>
          {/* HEADER */}

          <div className={styles.head}>
            <h2 id="employers-heading">
              {heading ||
                "Trusted Employers in Healthcare & Hospitality"}
            </h2>

            <Link
              to={viewAllTo || "/employers"}
              className={styles.viewAll}
            >
              <span>
                {viewAllLabel || "View All Employers"}
              </span>

              <ArrowRight
                size={15}
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* EMPLOYERS */}

          <ul className={styles.logos}>
            {mockEmployers.map((employer) => (
              <li key={employer.id}>
                <Link
                  to={viewAllTo || "/employers"}
                  className={`${styles.logo} ${
                    employer.style === "script"
                      ? styles.script
                      : ""
                  }`}
                  style={{
                    color: employer.color,
                  }}
                >
                  <EmployerMark
                    styleName={employer.style}
                    color={employer.color}
                  />

                  <span className={styles.companyText}>
                    <strong>
                      {employer.name}
                    </strong>

                    <small>
                      {employer.sub}
                    </small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}