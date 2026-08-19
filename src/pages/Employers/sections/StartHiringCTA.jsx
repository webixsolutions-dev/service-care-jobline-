import { Briefcase, Phone } from "lucide-react";
import { employersPageContent } from "../../../data/employersPageContent";
import Button from "../../../components/Button/Button";
import IconBadge from "../../../components/IconBadge/IconBadge";
import styles from "./StartHiringCTA.module.css";

export default function StartHiringCTA() {
  const { headingBefore, brand, subtext, primaryCta, secondaryCta } =
    employersPageContent.startHiring;

  return (
    <section className={styles.section} aria-labelledby="start-hiring-heading">
      <div className="container">
        <div className={styles.banner}>
          <IconBadge icon={Briefcase} color="goldOutline" size="xl" />
          <div className={styles.copy}>
            <h2 id="start-hiring-heading">
              {headingBefore} <span>{brand}</span>
            </h2>
            <p>{subtext}</p>
          </div>
          <div className={styles.ctas}>
            <Button to={primaryCta.to} variant="solid-gold" icon={Briefcase}>
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} variant="outline-teal" icon={Phone}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
