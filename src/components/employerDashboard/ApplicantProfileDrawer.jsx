import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  UserX,
} from "lucide-react";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./ApplicantProfileDrawer.module.css";

const STAGE_OPTIONS = ["New", "Reviewed", "Shortlisted", "Interview", "Offer", "Hired", "Rejected", "Withdrawn"];

export default function ApplicantProfileDrawer({ applicant, isOpen, onClose }) {
  const { advanceApplicantStage, viewApplicantResume } = useEmployerData();

  const [currentStage, setCurrentStage] = useState(applicant?.stage || "New");
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    if (applicant) {
      setCurrentStage(applicant.stage);
      setActionError("");
    }
  }, [applicant]);

  if (!isOpen || !applicant) return null;

  async function handleStageChange(newStage) {
    const previous = currentStage;
    setCurrentStage(newStage);
    setActionError("");
    try { await advanceApplicantStage(applicant.id, newStage); }
    catch (err) { setCurrentStage(previous); setActionError(err?.message || "Unable to update this application stage."); }
  }

  function handleReject() {
    handleStageChange("Rejected");
  }

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Candidate Profile</span>
            <h2 className={styles.name}>{applicant.candidateName}</h2>
            <span className={styles.appliedRole}>Applied for: {applicant.jobTitle}</span>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Stage Change Control Bar */}
        <div className={styles.stageBar}>
          <div className={styles.stageGroup}>
            <span className={styles.stageLabel}>Pipeline Stage:</span>
            <select
              value={currentStage}
              onChange={(e) => handleStageChange(e.target.value)}
              className={styles.stageSelect}
            >
              {STAGE_OPTIONS.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.quickStageBtns}>
            {currentStage !== "Rejected" && (
              <button
                type="button"
                className={styles.rejectBtn}
                onClick={handleReject}
              >
                <UserX size={14} /> Reject
              </button>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className={styles.body}>
          {actionError ? <p role="alert" className={styles.savedNotice}>{actionError}</p> : null}
          {/* Contact Details Grid */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.icon} />
                <span>{applicant.email}</span>
              </div>
              {applicant.phone && (
                <div className={styles.contactItem}>
                  <Phone size={16} className={styles.icon} />
                  <span>{applicant.phone}</span>
                </div>
              )}
              {applicant.location && (
                <div className={styles.contactItem}>
                  <MapPin size={16} className={styles.icon} />
                  <span>{applicant.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Resume Section */}
          {applicant.resumeFilename ? <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Resume / CV</h3>
            <div className={styles.resumeCard}>
              <FileText size={24} className={styles.resumeIcon} />
              <div className={styles.resumeInfo}>
                <span className={styles.filename}>{applicant.resumeFilename}</span>
                <span className={styles.filesize}>PDF Document • Uploaded {applicant.appliedDate}</span>
              </div>
              <button
                type="button"
                className={styles.viewResumeBtn}
                onClick={async () => { try { setActionError(""); await viewApplicantResume(applicant.id); } catch (err) { setActionError(err?.message || "Resume is not available."); } }}
              >
                View Document
              </button>
            </div>
          </div> : null}

          {/* Skills Section */}
          {applicant.skills && applicant.skills.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Sparkles size={16} className={styles.titleIcon} /> Skills & Qualifications
              </h3>
              <div className={styles.skillsContainer}>
                {applicant.skills.map((skill) => (
                  <span key={skill} className={styles.skillChip}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Work Experience Section */}
          {applicant.experience && applicant.experience.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Briefcase size={16} className={styles.titleIcon} /> Work Experience
              </h3>
              <div className={styles.listContainer}>
                {applicant.experience.map((exp) => (
                  <div key={exp.id || exp.title} className={styles.entryBox}>
                    <h4 className={styles.entryRole}>{exp.title}</h4>
                    <span className={styles.entrySub}>
                      {exp.company} • {exp.dates}
                    </span>
                    {exp.description && (
                      <p className={styles.entryDesc}>{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {applicant.education && applicant.education.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <GraduationCap size={16} className={styles.titleIcon} /> Education & Credentials
              </h3>
              <div className={styles.listContainer}>
                {applicant.education.map((edu) => (
                  <div key={edu.id || edu.program} className={styles.entryBox}>
                    <h4 className={styles.entryRole}>{edu.program}</h4>
                    <span className={styles.entrySub}>
                      {edu.institution} • {edu.dates}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
