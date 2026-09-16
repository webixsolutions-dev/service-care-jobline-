import { contactCategories } from "../../../data/contactCategories";
import ContactInfoCard from "../../../components/ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm";
import styles from "./ContactFormSection.module.css";

export default function ContactFormSection({ formRef }) {
  return (
    <section className={styles.section} aria-labelledby="contact-form-heading">
      <div className={`container ${styles.grid}`}>
        <ContactForm ref={formRef} />
        <div className={styles.cards}>
          {contactCategories.map((item) => (
            <ContactInfoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
