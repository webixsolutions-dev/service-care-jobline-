import React from "react";
import { Building, Globe, MapPin, Upload, Users, Briefcase } from "lucide-react";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./CompanyProfileForm.module.css";

export default function CompanyProfileForm() {
  const { companyProfile } = useEmployerData();

  if (!companyProfile) {
    return <div className={styles.card}><p>No company membership was found for this recruiter account.</p></div>;
  }

  const formData = {
    name: companyProfile.name || "",
    industry: companyProfile.industry || "Healthcare & Social Assistance",
    size: companyProfile.size || "Not provided",
    website: companyProfile.website || "",
    location: companyProfile.location || "",
    description: companyProfile.description || "",
    logoFilename: companyProfile.logo || "",
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Company Profile</h2>
        <p className={styles.cardSub}>
          Information shown here comes from the company securely linked to your recruiter account.
        </p>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Company Logo</label>
        <div className={styles.logoUploadRow}>
          <div className={styles.logoPreviewBox}>
            {formData.name ? formData.name.charAt(0).toUpperCase() : "C"}
          </div>
          <div className={styles.uploadControls}>
            <span className={styles.uploadBtn}><Upload size={14} /> Backend Managed</span>
            <span className={styles.uploadMeta}>
              {formData.logoFilename || "Contact an administrator to update the company logo."}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.fieldGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="compName" className={styles.label}>
            <Building size={14} className={styles.icon} /> Company Name <span className={styles.req}>*</span>
          </label>
          <input id="compName" name="name" type="text" value={formData.name} readOnly className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="compWebsite" className={styles.label}>
            <Globe size={14} className={styles.icon} /> Company Website
          </label>
          <input id="compWebsite" name="website" type="url" value={formData.website} readOnly placeholder="Not provided" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="compIndustry" className={styles.label}>
            <Briefcase size={14} className={styles.icon} /> Industry Category
          </label>
          <select id="compIndustry" name="industry" value={formData.industry} disabled className={styles.select}>
            <option value={formData.industry}>{formData.industry}</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="compSize" className={styles.label}>
            <Users size={14} className={styles.icon} /> Company Size
          </label>
          <select id="compSize" name="size" value={formData.size} disabled className={styles.select}>
            <option value={formData.size}>{formData.size}</option>
          </select>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="compLocation" className={styles.label}>
            <MapPin size={14} className={styles.icon} /> Headquarters Location
          </label>
          <input id="compLocation" name="location" type="text" value={formData.location} readOnly placeholder="Not provided" className={styles.input} />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="compDesc" className={styles.label}>Company Description &amp; Mission</label>
          <textarea id="compDesc" name="description" rows={5} value={formData.description} readOnly placeholder="No company description has been provided." className={styles.textarea} />
        </div>
      </div>

      <div className={styles.footer}>
        <button type="button" className={styles.saveBtn} disabled>Managed by Administrator</button>
      </div>
    </form>
  );
}
