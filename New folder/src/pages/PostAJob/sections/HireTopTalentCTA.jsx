import { Briefcase, Send } from "lucide-react";
import { postJobPageContent } from "../../../data/postJobPageContent";
import Button from "../../../components/Button/Button";
import LogoMark from "../../../components/Logo/Logo";
import styles from "./HireTopTalentCTA.module.css";

export default function HireTopTalentCTA({ onPostJob }) {
  const { headingBefore, headingAccent, subtext, primaryCta, secondaryCta, backgroundImage } =
    postJobPageContent.closingCta;

  return (
    <section className={styles.section} aria-labelledby="hire-talent-heading">
      <div className="container">
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.overlay} aria-hidden />
          <LogoMark size={88} className={styles.mark} />
          <div className={styles.copy}>
            <h2 id="hire-talent-heading">
              {headingBefore} <span>{headingAccent}</span>?
            </h2>
            <p>{subtext}</p>
          </div>
          <div className={styles.ctas}>
            <Button
              variant="solid-gold"
              icon={Briefcase}
              href="#job-posting-form"
              onClick={onPostJob}
            >
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} variant="solid-teal" icon={Send}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
