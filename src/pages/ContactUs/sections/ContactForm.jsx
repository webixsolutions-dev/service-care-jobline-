import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { Send, Lock } from "lucide-react";
import { contactPageContent } from "../../../data/contactPageContent";
import { paths } from "../../../data/navLinks";
import Button from "../../../components/Button/Button";
import InputField from "../../../components/FormFields/InputField";
import SelectField from "../../../components/FormFields/SelectField";
import TextareaField from "../../../components/FormFields/TextareaField";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(values, fields) {
  const errors = {};
  if (!values.name.trim()) errors.name = `${fields.name.label} is required.`;
  if (!values.email.trim()) {
    errors.email = `${fields.email.label} is required.`;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject) errors.subject = `${fields.subject.label} is required.`;
  if (!values.message.trim()) errors.message = `${fields.message.label} is required.`;
  return errors;
}

/**
 * Controlled contact form. handleSubmit is the single place to later POST to an API.
 */
const ContactForm = forwardRef(function ContactForm(_, ref) {
  const { heading, subtext, submitLabel, privacy, fields, subjects } =
    contactPageContent.form;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values, fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("");
      return;
    }

    const supportEmail = String(import.meta.env.VITE_SUPPORT_EMAIL || "").trim();
    if (!supportEmail) {
      setStatus("Contact email is not configured for this deployment yet.");
      return;
    }
    const body = [
      values.message,
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : "",
    ].filter(Boolean).join("\n");
    const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitting(true);
    setStatus("Opening your email app so you can send this inquiry securely.");
    window.setTimeout(() => {
      window.location.assign(mailto);
      setSubmitting(false);
    }, 250);
  }

  return (
    <div ref={ref} id="contact-form" className={styles.card}>
      <h2 id="contact-form-heading">{heading}</h2>
      <span className={styles.bar} />
      <p className={styles.sub}>{subtext}</p>

      {status ? (
        <p className={styles.success} role="status">
          {status}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="contact-name"
          name="name"
          label={fields.name.label}
          required={fields.name.required}
          type="text"
          autoComplete="name"
          placeholder={fields.name.placeholder}
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          id="contact-email"
          name="email"
          label={fields.email.label}
          required={fields.email.required}
          type="email"
          autoComplete="email"
          placeholder={fields.email.placeholder}
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          id="contact-phone"
          name="phone"
          label={fields.phone.label}
          required={fields.phone.required}
          type="tel"
          autoComplete="tel"
          placeholder={fields.phone.placeholder}
          value={values.phone}
          onChange={handleChange}
        />
        <SelectField
          id="contact-subject"
          name="subject"
          label={fields.subject.label}
          required={fields.subject.required}
          placeholder={fields.subject.placeholder}
          options={subjects}
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
        />
        <TextareaField
          id="contact-message"
          name="message"
          label={fields.message.label}
          required={fields.message.required}
          placeholder={fields.message.placeholder}
          value={values.message}
          onChange={handleChange}
          error={errors.message}
        />

        <Button type="submit" variant="solid-gold" icon={submitting ? null : Send} className={styles.submit} disabled={submitting} aria-busy={submitting}>
          {submitting ? <><span className="sc-spinner sc-spinner-sm" aria-hidden="true" /> Opening email…</> : submitLabel}
        </Button>
      </form>

      <p className={styles.privacy}>
        <Lock size={14} aria-hidden />
        {privacy}{" "}
        <Link to={paths.privacy}>Privacy Policy</Link>
      </p>
    </div>
  );
});

export default ContactForm;
