import { Send, Briefcase } from "lucide-react";
import { contactPageContent } from "../../../data/contactPageContent";
import Button from "../../../components/Button/Button";
import LogoMark from "../../../components/Logo/Logo";
import styles from "./LetsConnect.module.css";

export default function LetsConnect({ onScrollToForm }) {
  const { heading, accent, description, primaryCta, secondaryCta } = contactPageContent.letsConnect;

  return (
    <section className={styles.section} aria-labelledby="lets-connect-heading">
      <div className={`container ${styles.inner}`}>
        <LogoMark size={108} className={styles.mark} />
        <h2 id="lets-connect-heading">
          {heading} <span>{accent}</span>
        </h2>
        <p>{description}</p>
        <div className={styles.ctas}>
          <Button
            variant="solid-teal"
            icon={Send}
            href="#contact-form"
            onClick={onScrollToForm}
          >
            {primaryCta.label}
          </Button>
          <Button to={secondaryCta.to} variant="solid-gold" icon={Briefcase}>
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
