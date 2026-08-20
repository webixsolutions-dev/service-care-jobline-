import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { paths } from "../../data/navLinks";
import styles from "./ComingSoon.module.css";

export default function ComingSoon({ title = "This page" }) {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.icon}>
          <Clock size={32} />
        </div>
        <p className={styles.kicker}>{title}</p>
        <h1>Coming Soon</h1>
        <p className={styles.copy}>
          We&apos;re building this page. Check back soon for the full {title.toLowerCase()} experience.
        </p>
        <Link to={paths.home} className={styles.back}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
