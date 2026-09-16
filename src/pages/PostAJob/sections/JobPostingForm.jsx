import { forwardRef, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { postJobPageContent } from "../../../data/postJobPageContent";
import { paths } from "../../../data/navLinks";
import { useAuth } from "../../../lib/auth/AuthContext";
import {
  createEmployerJob,
  EMPLOYMENT_VALUES,
  getMyCompanies,
  getServiceCareCategories,
} from "../../../lib/jobs";
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

function parseLocation(value) {
  const parts = String(value || "").split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 1) {
    return { city: parts.slice(0, -1).join(", "), province: parts.at(-1) };
  }
  return { city: parts[0] || undefined, province: undefined };
}

function parseSalary(value) {
  const numbers = [...String(value || "").matchAll(/[\d,]+/g)]
    .map((match) => Number(match[0].replace(/,/g, "")))
    .filter(Number.isFinite);
  if (!numbers.length) return {};
  if (/\+$/.test(String(value).trim())) return { salary_min: numbers[0], salary_period: "yearly" };
  return {
    salary_min: numbers[0],
    salary_max: numbers[1] ?? undefined,
    salary_period: "yearly",
  };
}

const JobPostingForm = forwardRef(function JobPostingForm(_, ref) {
  const { heading, subtext, submitLabel, privacy, fields, salaryRanges } = postJobPageContent.form;
  const { token, profile } = useAuth();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingOptions, setLoadingOptions] = useState(false);

  useEffect(() => {
    setValues((prev) => ({ ...prev, contactEmail: prev.contactEmail || profile?.email || "" }));
  }, [profile?.email]);

  useEffect(() => {
    let cancelled = false;
    setLoadingOptions(true);
    const requests = [getServiceCareCategories()];
    if (token && profile?.role === "recruiter") requests.push(getMyCompanies(token));
    else requests.push(Promise.resolve([]));

    Promise.all(requests)
      .then(([categoryRows, companyRows]) => {
        if (cancelled) return;
        setCategories(Array.isArray(categoryRows) ? categoryRows : []);
        setCompanies(Array.isArray(companyRows) ? companyRows : []);
        if (companyRows?.length === 1) {
          setValues((prev) => ({ ...prev, companyName: prev.companyName || companyRows[0].name }));
        }
      })
      .catch((err) => {
        if (!cancelled) setMessage(err?.message || "Could not load posting options.");
      })
      .finally(() => {
        if (!cancelled) setLoadingOptions(false);
      });

    return () => { cancelled = true; };
  }, [token, profile?.role]);

  const categoryOptions = useMemo(
    () => categories.map((category) => ({ value: String(category.id), label: category.name })),
    [categories],
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    if (!token || profile?.role !== "recruiter") {
      setMessage("Sign in with an Employer account before posting a job.");
      return;
    }
    const nextErrors = validate(values, fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const company = companies[0];
    if (!company) {
      setErrors((prev) => ({
        ...prev,
        companyName: "Select a company linked to your Employer account before posting.",
      }));
      return;
    }

    const { city, province } = parseLocation(values.location);
    const salary = parseSalary(values.salaryRange);

    setSubmitting(true);
    try {
      const job = await createEmployerJob({
        category_id: Number(values.category),
        title: values.jobTitle.trim(),
        description: values.jobSummary.trim(),
        city,
        province,
        workplace_type: "onsite",
        experience_level: "entry_level",
        employment_type: values.employmentType,
        salary_currency: "CAD",
        ...salary,
      }, token);

      setMessage(`Job submitted successfully. Status: ${String(job?.status || "active").replaceAll("_", " ")}.`);
      setValues((prev) => ({
        ...initialValues,
        companyName: company.name,
        contactEmail: profile?.email || prev.contactEmail,
      }));
    } catch (err) {
      setMessage(err?.message || "Could not submit the job.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div ref={ref} id="job-posting-form" className={styles.card}>
      <h2 id="job-details-heading">{heading}</h2>
      <span className={styles.bar} />
      <p className={styles.sub}>{subtext}</p>

      {message ? <p className={styles.success} role="status">{message}</p> : null}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <InputField
            id="job-company"
            name="companyName"
            label={fields.companyName.label}
            required
            placeholder={companies.length ? "Select your linked company" : fields.companyName.placeholder}
            value={values.companyName}
            onChange={handleChange}
            error={errors.companyName}
            autoComplete="organization"
            readOnly
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
            placeholder={loadingOptions ? "Loading categories..." : fields.category.placeholder}
            options={categoryOptions}
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
            options={EMPLOYMENT_VALUES}
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
          disabled={submitting || loadingOptions}
          aria-busy={submitting}
        >
          {submitting ? <><span className="sc-spinner sc-spinner-sm" /> Submitting</> : submitLabel}
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
