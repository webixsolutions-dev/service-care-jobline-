import { Bell, ArrowRight } from "lucide-react";
import { browseJobsContent } from "../../../data/browseJobsContent";
import Button from "../../../components/Button/Button";
import styles from "./JobAlertsBanner.module.css";

export default function JobAlertsBanner() {
  const { line1, line2, accent, subtext, submitLabel } = browseJobsContent.alerts;

  return (
    <section className={styles.section} id="job-alerts" aria-labelledby="alerts-heading">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.copy}>
            <span className={styles.badge} aria-hidden>
              <Bell size={22} />
            </span>
            <div>
              <h2 id="alerts-heading">
                {line1}
                <br />
                {line2} <span>{accent}</span>
              </h2>
              <p>{subtext}</p>
            </div>
          </div>
          <div className={styles.form}>
            <Button to="/signup" variant="solid-gold" icon={ArrowRight} iconPosition="right">
              {submitLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
