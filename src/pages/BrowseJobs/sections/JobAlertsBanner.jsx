import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Mail, Lock, ArrowRight } from "lucide-react";
import { browseJobsContent } from "../../../data/browseJobsContent";
import { paths } from "../../../data/navLinks";
import Button from "../../../components/Button/Button";
import styles from "./JobAlertsBanner.module.css";

export default function JobAlertsBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { line1, line2, accent, subtext, placeholder, submitLabel, privacy } = browseJobsContent.alerts;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
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
            {submitted ? (
              <p className={styles.success} role="status">
                You&apos;re subscribed. We&apos;ll send matching hospitality and healthcare jobs to your inbox.
              </p>
            ) : (
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
            )}
            <p className={styles.privacy}>
              <Lock size={13} /> {privacy}{" "}
              <Link to={paths.privacy}>Privacy Policy</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
