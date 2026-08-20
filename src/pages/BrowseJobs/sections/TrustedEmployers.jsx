import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trustedEmployers } from "../../../data/trustedEmployers";
import { browseJobsContent } from "../../../data/browseJobsContent";
import EmployerMark from "./EmployerMark";
import styles from "./TrustedEmployers.module.css";

export default function TrustedEmployers() {
  const { heading, viewAllLabel, viewAllTo } = browseJobsContent.trustedEmployers;

  return (
    <section className={styles.section} aria-labelledby="employers-heading">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.head}>
            <h2 id="employers-heading">{heading}</h2>
            <Link to={viewAllTo} className={styles.viewAll}>
              {viewAllLabel} <ArrowRight size={16} />
            </Link>
          </div>
          <ul className={styles.logos}>
            {trustedEmployers.map((employer) => (
              <li key={employer.id}>
                <Link
                  to={viewAllTo}
                  className={`${styles.logo} ${employer.style === "script" ? styles.script : ""}`}
                  style={{ color: employer.color }}
                >
                  <EmployerMark styleName={employer.style} color={employer.color} />
                  <span>
                    <strong>{employer.name}</strong>
                    <small>{employer.sub}</small>
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
