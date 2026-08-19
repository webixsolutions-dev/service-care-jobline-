import { CircleHelp } from "lucide-react";
import { contactPageContent } from "../../../data/contactPageContent";
import { contactFAQs } from "../../../data/contactFAQs";
import IconBadge from "../../../components/IconBadge/IconBadge";
import FAQItem from "../../../components/FAQItem/FAQItem";
import styles from "./FAQTeaser.module.css";

export default function FAQTeaser() {
  const { heading, subtext } = contactPageContent.faq;

  return (
    <section className={styles.section} aria-labelledby="faq-teaser-heading">
      <div className={`container ${styles.row}`}>
        <div className={styles.label}>
          <IconBadge icon={CircleHelp} color="teal" size="lg" />
          <h2 id="faq-teaser-heading">{heading}</h2>
          <p>{subtext}</p>
        </div>
        {contactFAQs.map((item) => (
          <FAQItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
