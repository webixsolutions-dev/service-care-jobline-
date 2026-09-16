import { Briefcase, Users, CircleCheck } from "lucide-react";
import { employersPageContent } from "../../../data/employersPageContent";
import Button from "../../../components/Button/Button";
import styles from "./MidCTA.module.css";

export default function MidCTA() {
  const { heading, subtext, cta } = employersPageContent.midCta;

  return (
    <section className={styles.section} aria-labelledby="mid-cta-heading">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.iconWrap} aria-hidden>
            <Users size={32} strokeWidth={2} />
            <span className={styles.check}>
              <CircleCheck size={18} strokeWidth={2.4} />
            </span>
          </div>
          <div className={styles.copy}>
            <h2 id="mid-cta-heading">{heading}</h2>
            <p>{subtext}</p>
          </div>
          <Button to={cta.to} variant="solid-gold" icon={Briefcase}>
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
