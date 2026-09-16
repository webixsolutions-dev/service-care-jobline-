import React from "react";
import { Building, Globe, MapPin, ShieldCheck } from "lucide-react";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./CompanyProfileForm.module.css";

export default function CompanyProfileForm() {
  const { companyProfile } = useEmployerData();
  if (!companyProfile) return <div className={styles.card}><p>No company membership was found for this recruiter account.</p></div>;
  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Verified Company Profile</h2>
        <p className={styles.cardSub}>This identity is securely bound to your recruiter account by the shared backend.</p>
      </div>
      <div className={styles.fieldGrid}>
        <div className={styles.formGroup}><span className={styles.label}><Building size={14} className={styles.icon} /> Company Name</span><p className={styles.input}>{companyProfile.name}</p></div>
        <div className={styles.formGroup}><span className={styles.label}><Globe size={14} className={styles.icon} /> Website</span><p className={styles.input}>{companyProfile.website || "Not provided"}</p></div>
        <div className={styles.formGroup}><span className={styles.label}><MapPin size={14} className={styles.icon} /> Location</span><p className={styles.input}>{companyProfile.location || "Not provided"}</p></div>
        <div className={styles.formGroup}><span className={styles.label}><ShieldCheck size={14} className={styles.icon} /> Verification</span><p className={styles.input}>{companyProfile.verification_status || "Pending"}</p></div>
        {companyProfile.description ? <div className={`${styles.formGroup} ${styles.fullWidth}`}><span className={styles.label}>Company Description</span><p className={styles.textarea}>{companyProfile.description}</p></div> : null}
      </div>
      <p className={styles.uploadMeta}>Company ownership and legal details cannot be changed from a job posting. Contact an administrator if an update is required.</p>
    </section>
  );
}
