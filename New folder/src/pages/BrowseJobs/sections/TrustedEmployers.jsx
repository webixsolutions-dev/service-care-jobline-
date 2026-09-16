import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { browseJobsContent } from "../../../data/browseJobsContent";
import usePublicDataset from "../../../hooks/usePublicDataset";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import styles from "./TrustedEmployers.module.css";

const colors = ["#0891b2", "#0f766e", "#1d4ed8", "#334155", "#b45309", "#0369a1"];

export default function TrustedEmployers() {
  const { heading, viewAllLabel, viewAllTo } = browseJobsContent.trustedEmployers;
  const { dataset, loading, error } = usePublicDataset();
  const employers = (dataset?.companies || []).slice(0, 6);
  return (
    <section className={styles.section} aria-labelledby="employers-heading">
      <div className="container"><div className={styles.card}>
        <div className={styles.head}>
          <h2 id="employers-heading">{heading || "Active Employers in Healthcare & Hospitality"}</h2>
          <Link to={viewAllTo || "/employers"} className={styles.viewAll}><span>{viewAllLabel || "View Employers"}</span><ArrowRight size={15} /></Link>
        </div>
        {loading ? <LoadingSpinner label="Loading employers" /> : null}
        {!loading && error ? <p>{error}</p> : null}
        {!loading && !error && !employers.length ? <p>No active employers are available right now.</p> : null}
        {!loading && !error && employers.length ? (
          <ul className={styles.logos}>
            {employers.map((employer, index) => (
              <li key={employer.id}><Link to={viewAllTo || "/employers"} className={styles.logo} style={{ color: colors[index % colors.length] }}>
                <span aria-hidden="true" style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: "currentColor" }}><strong style={{ color: "white" }}>{employer.name?.slice(0, 1)?.toUpperCase()}</strong></span>
                <span className={styles.companyText}><strong>{employer.name}</strong><small>{employer.verification_status === "verified" ? "Verified employer" : "Active employer"}</small></span>
              </Link></li>
            ))}
          </ul>
        ) : null}
      </div></div>
    </section>
  );
}
