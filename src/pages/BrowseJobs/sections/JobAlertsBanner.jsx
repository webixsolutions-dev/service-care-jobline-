import { useState } from "react";
import { Bell, Mail, Lock, ArrowRight } from "lucide-react";
import { browseJobsContent } from "../../../data/browseJobsContent";
import Button from "../../../components/Button/Button";
import styles from "./JobAlertsBanner.module.css";

export default function JobAlertsBanner() {
  const [email, setEmail] = useState("");
  const { line1, line2, accent, subtext, placeholder, submitLabel, privacy } = browseJobsContent.alerts;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Job alert subscribe:", email);
  }

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.inputWrap}>
                <span className="sr-only">Email address</span>
                <Mail size={18} />
                <input
                  type="email"
                  required
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <Button type="submit" variant="solid-gold" icon={ArrowRight} iconPosition="right">
                {submitLabel}
              </Button>
            </div>
            <p className={styles.privacy}>
              <Lock size={13} /> {privacy}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
