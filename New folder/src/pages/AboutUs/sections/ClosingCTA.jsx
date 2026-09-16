import { Search, Briefcase } from "lucide-react";
import { aboutPageContent } from "../../../data/aboutPageContent";
import Button from "../../../components/Button/Button";
import LogoMark from "../../../components/Logo/Logo";
import styles from "./ClosingCTA.module.css";

export default function ClosingCTA() {
  const { heading, accentOne, middle, accentTwo, description, primaryCta, secondaryCta } =
    aboutPageContent.closingCta;

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.banner}>
          <LogoMark size={92} className={styles.mark} />
          <div className={styles.copy}>
            <h2 id="cta-heading">
              {heading} <span className={styles.gold}>{accentOne}</span> {middle}{" "}
              <span className={styles.gold}>{accentTwo}</span>
            </h2>
            <p>{description}</p>
          </div>
          <div className={styles.ctas}>
            <Button to={primaryCta.to} variant="solid-teal" icon={Search}>
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} variant="solid-gold" icon={Briefcase}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
