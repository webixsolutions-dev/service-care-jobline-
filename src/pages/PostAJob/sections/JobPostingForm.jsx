import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { postJobPageContent } from "../../../data/postJobPageContent";
import { paths } from "../../../data/navLinks";
import Button from "../../../components/Button/Button";
import InputField from "../../../components/FormFields/InputField";
import SelectField from "../../../components/FormFields/SelectField";
import TextareaField from "../../../components/FormFields/TextareaField";
import styles from "./JobPostingForm.module.css";

const initialValues = {
  companyName: "",
  jobTitle: "",
  category: "",
  location: "",
  employmentType: "",
  salaryRange: "",
  contactEmail: "",
  jobSummary: "",
};

function validate(values, fields) {
  const errors = {};
  if (!values.companyName.trim()) errors.companyName = `${fields.companyName.label} is required.`;
  if (!values.jobTitle.trim()) errors.jobTitle = `${fields.jobTitle.label} is required.`;
  if (!values.category) errors.category = `${fields.category.label} is required.`;
  if (!values.location.trim()) errors.location = `${fields.location.label} is required.`;
  if (!values.employmentType) errors.employmentType = `${fields.employmentType.label} is required.`;
  if (!values.contactEmail.trim()) {
    errors.contactEmail = `${fields.contactEmail.label} is required.`;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contactEmail)) {
    errors.contactEmail = "Enter a valid email address.";
  }
  if (!values.jobSummary.trim()) errors.jobSummary = `${fields.jobSummary.label} is required.`;
  return errors;
}

/**
 * Controlled job-details form (step 1 of a future multi-step posting flow).
 * handleSubmit is the single place to later POST to an API.
 */
const JobPostingForm = forwardRef(function JobPostingForm(_, ref) {
  const {
    heading,
    subtext,
    submitLabel,
    privacy,
    fields,
    categories,
    employmentTypes,
    salaryRanges,
  } = postJobPageContent.form;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values, fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    console.log("Job posting details:", values);
  }

  return (
    <div ref={ref} id="job-posting-form" className={styles.card}>
      <h2 id="job-details-heading">{heading}</h2>
      <span className={styles.bar} />
      <p className={styles.sub}>{subtext}</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <InputField
            id="job-company"
            name="companyName"
            label={fields.companyName.label}
            required
            placeholder={fields.companyName.placeholder}
            value={values.companyName}
            onChange={handleChange}
            error={errors.companyName}
            autoComplete="organization"
          />
          <InputField
            id="job-title"
            name="jobTitle"
            label={fields.jobTitle.label}
            required
            placeholder={fields.jobTitle.placeholder}
            value={values.jobTitle}
            onChange={handleChange}
            error={errors.jobTitle}
          />
          <SelectField
            id="job-category"
            name="category"
            label={fields.category.label}
            required
            placeholder={fields.category.placeholder}
            options={categories}
            value={values.category}
            onChange={handleChange}
            error={errors.category}
          />
          <InputField
            id="job-location"
            name="location"
            label={fields.location.label}
            required
            placeholder={fields.location.placeholder}
            value={values.location}
            onChange={handleChange}
            error={errors.location}
            autoComplete="address-level2"
          />
          <SelectField
            id="job-employment-type"
            name="employmentType"
            label={fields.employmentType.label}
            required
            placeholder={fields.employmentType.placeholder}
            options={employmentTypes}
            value={values.employmentType}
            onChange={handleChange}
            error={errors.employmentType}
          />
          <SelectField
            id="job-salary"
            name="salaryRange"
            label={fields.salaryRange.label}
            placeholder={fields.salaryRange.placeholder}
            options={salaryRanges}
            value={values.salaryRange}
            onChange={handleChange}
          />
          <InputField
            id="job-email"
            name="contactEmail"
            label={fields.contactEmail.label}
            required
            type="email"
            placeholder={fields.contactEmail.placeholder}
            value={values.contactEmail}
            onChange={handleChange}
            error={errors.contactEmail}
            autoComplete="email"
            className={styles.full}
          />
          <TextareaField
            id="job-summary"
            name="jobSummary"
            label={fields.jobSummary.label}
            required
            placeholder={fields.jobSummary.placeholder}
            value={values.jobSummary}
            onChange={handleChange}
            error={errors.jobSummary}
            rows={6}
            className={styles.full}
          />
        </div>

        <Button
          type="submit"
          variant="solid-gold"
          icon={ArrowRight}
          iconPosition="right"
          className={styles.submit}
        >
          {submitLabel}
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

export default JobPostingForm;
