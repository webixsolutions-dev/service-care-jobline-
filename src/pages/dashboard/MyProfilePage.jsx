import React, { useState, useEffect } from "react";
import { Plus, X, Check, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import ProfileCompletenessBar from "../../components/dashboard/ProfileCompletenessBar";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./MyProfilePage.module.css";

export default function MyProfilePage() {
  const { profile, updateProfile } = useDashboardData();

  // Local form state
  const [formData, setFormData] = useState({
    fullName: profile?.fullName || "",
    email: profile?.email || "",
    phone: profile?.phone || "",
    location: profile?.location || "",
    skills: profile?.skills || [],
    experience: profile?.experience || [],
    education: profile?.education || [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  // New experience entry form state
  const [showExpForm, setShowExpForm] = useState(false);
  const [newExp, setNewExp] = useState({ title: "", company: "", dates: "", description: "" });

  // New education entry form state
  const [showEduForm, setShowEduForm] = useState(false);
  const [newEdu, setNewEdu] = useState({ institution: "", program: "", dates: "" });

  useEffect(() => {
    if (profile) {
      setFormData({
        fullName: profile.fullName || "",
        email: profile.email || "",
        phone: profile.phone || "",
        location: profile.location || "",
        skills: profile.skills || [],
        experience: profile.experience || [],
        education: profile.education || [],
      });
    }
  }, [profile]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSavedSuccess(false);
  }

  // Skills tag management
  function handleAddSkill(e) {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const trimmed = skillInput.trim();
      if (trimmed && !formData.skills.includes(trimmed)) {
        setFormData((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
        setSkillInput("");
        setSavedSuccess(false);
      }
    }
  }

  function handleRemoveSkill(skillToRemove) {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
    setSavedSuccess(false);
  }

  // Work Experience management
  function handleAddExperience(e) {
    e.preventDefault();
    if (!newExp.title || !newExp.company) return;
    const entry = {
      id: `exp-${Date.now()}`,
      ...newExp,
    };
    setFormData((prev) => ({ ...prev, experience: [...prev.experience, entry] }));
    setNewExp({ title: "", company: "", dates: "", description: "" });
    setShowExpForm(false);
    setSavedSuccess(false);
  }

  function handleRemoveExperience(id) {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
    setSavedSuccess(false);
  }

  // Education management
  function handleAddEducation(e) {
    e.preventDefault();
    if (!newEdu.institution || !newEdu.program) return;
    const entry = {
      id: `edu-${Date.now()}`,
      ...newEdu,
    };
    setFormData((prev) => ({ ...prev, education: [...prev.education, entry] }));
    setNewEdu({ institution: "", program: "", dates: "" });
    setShowEduForm(false);
    setSavedSuccess(false);
  }

  function handleRemoveEducation(id) {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
    setSavedSuccess(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  }

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="My Profile"
        subtitle="Tell us a bit about yourself so employers can get to know you."
      />

      <ProfileCompletenessBar showCta={false} />

      {savedSuccess && (
        <div className={styles.successBanner} role="alert">
          <Check size={18} />
          <span>Your profile details have been saved successfully!</span>
        </div>
      )}

      {/* Single Personal Details Card */}
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Personal Details</h2>
          <p className={styles.cardSub}>
            Fill out your basic contact information and skills. Keep it simple and friendly!
          </p>
        </div>

        {/* Basic Fields */}
        <div className={styles.fieldGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={styles.input}
            />
            <span className={styles.helperText}>Used for employer communications and job alerts</span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location" className={styles.label}>
              City / Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Toronto, ON"
              className={styles.input}
            />
          </div>
        </div>

        {/* Skills Tag Section */}
        <div className={styles.sectionDivider} />
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <Sparkles size={16} className={styles.labelIcon} /> Skills & Strengths
          </label>
          <p className={styles.helperText}>
            Add a few skills that describe what you're good at — press <strong>Enter</strong> or click <strong>Add</strong> after each one.
          </p>

          <div className={styles.tagInputWrapper}>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
              placeholder="e.g., Customer Service, Vital Signs, Food Safety"
              className={styles.input}
            />
            <button
              type="button"
              className={styles.addTagBtn}
              onClick={handleAddSkill}
            >
              <Plus size={16} /> Add Skill
            </button>
          </div>

          {formData.skills.length > 0 && (
            <div className={styles.tagContainer}>
              {formData.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                  <button
                    type="button"
                    className={styles.removeTagBtn}
                    onClick={() => handleRemoveSkill(skill)}
                    title={`Remove ${skill}`}
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Work Experience Section (Optional) */}
        <div className={styles.sectionDivider} />
        <div className={styles.formGroup}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <label className={styles.label}>
                <Briefcase size={16} className={styles.labelIcon} /> Work Experience{" "}
                <span className={styles.optionalTag}>(Optional)</span>
              </label>
              <p className={styles.helperText}>
                List any past positions in healthcare, hospitality, or customer care.
              </p>
            </div>
            {!showExpForm && (
              <button
                type="button"
                className={styles.addSectionBtn}
                onClick={() => setShowExpForm(true)}
              >
                <Plus size={14} /> Add Experience
              </button>
            )}
          </div>

          {/* List of existing experiences */}
          {formData.experience.length > 0 && (
            <div className={styles.entryList}>
              {formData.experience.map((exp) => (
                <div key={exp.id} className={styles.entryCard}>
                  <div>
                    <h4 className={styles.entryTitle}>{exp.title}</h4>
                    <span className={styles.entrySub}>
                      {exp.company} • {exp.dates}
                    </span>
                    {exp.description && <p className={styles.entryDesc}>{exp.description}</p>}
                  </div>
                  <button
                    type="button"
                    className={styles.removeEntryBtn}
                    onClick={() => handleRemoveExperience(exp.id)}
                    title="Remove experience"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Inline Add Experience Form */}
          {showExpForm && (
            <div className={styles.nestedForm}>
              <h4 className={styles.nestedTitle}>Add Work Experience</h4>
              <div className={styles.fieldGrid}>
                <input
                  type="text"
                  placeholder="What was your job title? (e.g. Caregiver)"
                  value={newExp.title}
                  onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Where did you work? (e.g. Comfort Home)"
                  value={newExp.company}
                  onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="When did you work there? (e.g. 2024 – 2026)"
                  value={newExp.dates}
                  onChange={(e) => setNewExp({ ...newExp, dates: e.target.value })}
                  className={styles.input}
                />
              </div>
              <input
                type="text"
                placeholder="Short summary of what you did (optional)"
                value={newExp.description}
                onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                className={`${styles.input} ${styles.marginTop}`}
              />
              <div className={styles.nestedActions}>
                <button
                  type="button"
                  className={styles.cancelNestedBtn}
                  onClick={() => setShowExpForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={styles.saveNestedBtn}
                  onClick={handleAddExperience}
                >
                  Save Position
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Education Section (Optional) */}
        <div className={styles.sectionDivider} />
        <div className={styles.formGroup}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <label className={styles.label}>
                <GraduationCap size={16} className={styles.labelIcon} /> Education & Training{" "}
                <span className={styles.optionalTag}>(Optional)</span>
              </label>
              <p className={styles.helperText}>
                Degrees, diplomas, certificates, or courses you've completed.
              </p>
            </div>
            {!showEduForm && (
              <button
                type="button"
                className={styles.addSectionBtn}
                onClick={() => setShowEduForm(true)}
              >
                <Plus size={14} /> Add Education
              </button>
            )}
          </div>

          {/* List of existing education */}
          {formData.education.length > 0 && (
            <div className={styles.entryList}>
              {formData.education.map((edu) => (
                <div key={edu.id} className={styles.entryCard}>
                  <div>
                    <h4 className={styles.entryTitle}>{edu.program}</h4>
                    <span className={styles.entrySub}>
                      {edu.institution} • {edu.dates}
                    </span>
                  </div>
                  <button
                    type="button"
                    className={styles.removeEntryBtn}
                    onClick={() => handleRemoveEducation(edu.id)}
                    title="Remove education"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Inline Add Education Form */}
          {showEduForm && (
            <div className={styles.nestedForm}>
              <h4 className={styles.nestedTitle}>Add Education / Training</h4>
              <div className={styles.fieldGrid}>
                <input
                  type="text"
                  placeholder="School or Institution (e.g. Humber College)"
                  value={newEdu.institution}
                  onChange={(e) => setNewEdu({ ...newEdu, institution: e.target.value })}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="What did you study? (e.g. PSW Certificate)"
                  value={newEdu.program}
                  onChange={(e) => setNewEdu({ ...newEdu, program: e.target.value })}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Dates attended (e.g. 2023 – 2024)"
                  value={newEdu.dates}
                  onChange={(e) => setNewEdu({ ...newEdu, dates: e.target.value })}
                  className={styles.input}
                />
              </div>
              <div className={styles.nestedActions}>
                <button
                  type="button"
                  className={styles.cancelNestedBtn}
                  onClick={() => setShowEduForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={styles.saveNestedBtn}
                  onClick={handleAddEducation}
                >
                  Save Education
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Submit Action Button */}
        <div className={styles.formFooter}>
          <button type="submit" className={styles.saveProfileBtn}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
