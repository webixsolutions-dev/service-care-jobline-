import { Search, Briefcase } from "lucide-react";
import { homePageContent } from "../../../data/homePageContent";
import Button from "../../../components/Button/Button";
import IconBadge from "../../../components/IconBadge/IconBadge";
import styles from "./NextStepCTA.module.css";

export default function NextStepCTA() {
  const { headingBefore, accent, subtext, primaryCta, secondaryCta } = homePageContent.nextStep;

  return (
    <section className={styles.section} aria-labelledby="next-step-heading">
      <div className="container">
        <div className={styles.banner}>
          <IconBadge icon={Briefcase} color="tealOutline" size="xl" />
          <div className={styles.copy}>
            <h2 id="next-step-heading">
              {headingBefore} <span>{accent}</span>?
            </h2>
            <p>{subtext}</p>
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
