import { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Save } from "lucide-react";
import { postJobPageContent } from "../../../data/postJobPageContent";
import { paths } from "../../../data/navLinks";
import Button from "../../../components/Button/Button";
import InputField from "../../../components/FormFields/InputField";
import SelectField from "../../../components/FormFields/SelectField";
import TextareaField from "../../../components/FormFields/TextareaField";
import styles from "./JobPostingForm.module.css";

const defaultInitialValues = {
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
 * Controlled job-details form reused across public /post-a-job page and dashboard job posting page.
 */
const JobPostingForm = forwardRef(function JobPostingForm(
  {
    initialData,
    onSubmitAction,
    customHeading,
    customSubtext,
    customSubmitLabel,
    showSaveDraft = false,
  },
  ref
) {
  const {
    heading: defaultHeading,
    subtext: defaultSubtext,
    submitLabel: defaultSubmitLabel,
    privacy,
    fields,
    categories,
    employmentTypes,
    salaryRanges,
  } = postJobPageContent.form;

  const heading = customHeading || defaultHeading;
  const subtext = customSubtext || defaultSubtext;
  const submitLabel = customSubmitLabel || defaultSubmitLabel;

  const [values, setValues] = useState(defaultInitialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setValues({
        companyName: initialData.companyName || "",
        jobTitle: initialData.title || initialData.jobTitle || "",
        category: initialData.category || "",
        location: initialData.location || "",
        employmentType: initialData.employmentType || "",
        salaryRange: initialData.salaryRange || "",
        contactEmail: initialData.contactEmail || "",
        jobSummary: initialData.jobSummary || "",
      });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleFormSubmit(e, isDraft = false) {
    if (e) e.preventDefault();
    const nextErrors = validate(values, fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (onSubmitAction) {
      onSubmitAction(values, isDraft);
    } else {
      console.log("Job posting details:", values);
      setSubmitted(true);
    }
  }

  return (
    <div ref={ref} id="job-posting-form" className={styles.card}>
      <h2 id="job-details-heading">{heading}</h2>
      <span className={styles.bar} />
      <p className={styles.sub}>{subtext}</p>

      {submitted ? (
        <p className={styles.success} role="status">
          Job details received. Our team will review your posting and follow up shortly.
        </p>
      ) : null}

      <form onSubmit={(e) => handleFormSubmit(e, false)} noValidate>
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

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
          {showSaveDraft && (
            <Button
              type="button"
              variant="outline-navy"
              icon={Save}
              onClick={(e) => handleFormSubmit(e, true)}
            >
              Save as Draft
            </Button>
          )}

          <Button
            type="submit"
            variant="solid-gold"
            icon={ArrowRight}
            iconPosition="right"
            className={styles.submit}
          >
            {submitLabel}
          </Button>
        </div>
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
