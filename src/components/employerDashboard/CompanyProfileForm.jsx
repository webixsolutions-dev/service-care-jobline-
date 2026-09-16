import React, { useState, useEffect } from "react";
import { Building, Globe, MapPin, Check, Upload, Users, Briefcase } from "lucide-react";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./CompanyProfileForm.module.css";

const INDUSTRY_OPTIONS = [
  "Healthcare & Social Assistance",
  "Hospitality & Food Services",
  "Senior Care & Assisted Living",
  "Retail & Customer Support",
  "Facility Management & Maintenance",
  "Other",
];

const SIZE_OPTIONS = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
];

export default function CompanyProfileForm() {
  const { companyProfile, updateCompanyProfile } = useEmployerData();

  const [formData, setFormData] = useState({
    name: companyProfile?.name || "",
    industry: companyProfile?.industry || INDUSTRY_OPTIONS[0],
    size: companyProfile?.size || SIZE_OPTIONS[2],
    website: companyProfile?.website || "",
    location: companyProfile?.location || "",
    description: companyProfile?.description || "",
    logoFilename: companyProfile?.logo || "",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (companyProfile) {
      setFormData({
        name: companyProfile.name || "",
        industry: companyProfile.industry || INDUSTRY_OPTIONS[0],
        size: companyProfile.size || SIZE_OPTIONS[2],
        website: companyProfile.website || "",
        location: companyProfile.location || "",
        description: companyProfile.description || "",
        logoFilename: companyProfile.logo || "",
      });
    }
  }, [companyProfile]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSavedSuccess(false);
  }

  function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, logoFilename: file.name }));
      setSavedSuccess(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateCompanyProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Company Profile</h2>
        <p className={styles.cardSub}>
          Information provided here is displayed to job seekers on your active postings.
        </p>
      </div>

      {savedSuccess && (
        <div className={styles.successBanner} role="alert">
          <Check size={18} />
          <span>Company profile updated successfully!</span>
        </div>
      )}

      {/* Logo Upload Mock */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Company Logo</label>
        <div className={styles.logoUploadRow}>
          <div className={styles.logoPreviewBox}>
            {formData.name ? formData.name.charAt(0).toUpperCase() : "C"}
          </div>
          <div className={styles.uploadControls}>
            <label htmlFor="logoUpload" className={styles.uploadBtn}>
              <Upload size={14} /> Upload Logo Image
            </label>
            <input
              id="logoUpload"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleLogoUpload}
            />
            <span className={styles.uploadMeta}>
              {formData.logoFilename ? `Selected: ${formData.logoFilename}` : "PNG, JPG or WEBP. Max 2MB."}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.fieldGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="compName" className={styles.label}>
            <Building size={14} className={styles.icon} /> Company Name <span className={styles.req}>*</span>
          </label>
          <input
            id="compName"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sunnybrook Health Centre"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="compWebsite" className={styles.label}>
            <Globe size={14} className={styles.icon} /> Company Website
          </label>
          <input
            id="compWebsite"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="compIndustry" className={styles.label}>
            <Briefcase size={14} className={styles.icon} /> Industry Category
          </label>
          <select
            id="compIndustry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={styles.select}
          >
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="compSize" className={styles.label}>
            <Users size={14} className={styles.icon} /> Company Size
          </label>
          <select
            id="compSize"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className={styles.select}
          >
            {SIZE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="compLocation" className={styles.label}>
            <MapPin size={14} className={styles.icon} /> Headquarters Location
          </label>
          <input
            id="compLocation"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Toronto, ON"
            className={styles.input}
          />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="compDesc" className={styles.label}>
            Company Description & Mission
          </label>
          <textarea
            id="compDesc"
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your organization, work culture, and why job seekers should join your team..."
            className={styles.textarea}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button type="submit" className={styles.saveBtn}>
          Save Company Profile
        </button>
      </div>
    </form>
  );
}
