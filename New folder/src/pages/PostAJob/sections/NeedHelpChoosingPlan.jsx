import { Star, Send, Phone } from "lucide-react";
import { postJobPageContent } from "../../../data/postJobPageContent";
import Button from "../../../components/Button/Button";
import styles from "./NeedHelpChoosingPlan.module.css";

export default function NeedHelpChoosingPlan() {
  const { heading, subtext, ctaLabel, ctaTo, phone, phoneHref } = postJobPageContent.needHelp;

  return (
    <section className={styles.section} aria-labelledby="need-help-plan-heading">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.copy}>
            <span className={styles.star} aria-hidden>
              <Star size={22} strokeWidth={2} />
            </span>
            <div>
              <h2 id="need-help-plan-heading">{heading}</h2>
              <p>{subtext}</p>
            </div>
          </div>
          <Button to={ctaTo} variant="solid-teal" icon={Send}>
            {ctaLabel}
          </Button>
          <a className={styles.phone} href={phoneHref}>
            <Phone size={18} strokeWidth={2.1} aria-hidden />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
