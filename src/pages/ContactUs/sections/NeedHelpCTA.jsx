import { Users, Search } from "lucide-react";
import { contactPageContent } from "../../../data/contactPageContent";
import Button from "../../../components/Button/Button";
import LogoMark from "../../../components/Logo/Logo";
import styles from "./NeedHelpCTA.module.css";

export default function NeedHelpCTA({ onScrollToForm }) {
  const { heading, description, primaryCta, secondaryCta } = contactPageContent.needHelp;

  return (
    <section className={styles.section} aria-labelledby="need-help-heading">
      <div className="container">
        <div className={styles.banner}>
          <LogoMark size={88} className={styles.mark} />
          <div className={styles.copy}>
            <h2 id="need-help-heading">{heading}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.ctas}>
            <Button variant="solid-gold" icon={Users} onClick={onScrollToForm}>
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} variant="outline-white" icon={Search}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
