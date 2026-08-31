import React, { useState } from "react";
import { User, FileText, ChevronRight, ArrowRight, UserX, Check } from "lucide-react";
import ApplicantProfileDrawer from "./ApplicantProfileDrawer";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./ApplicantListItem.module.css";

const STAGE_BADGES = {
  New: { bg: "var(--color-teal-soft)", color: "var(--color-teal-dark)" },
  Reviewed: { bg: "rgba(100, 116, 139, 0.14)", color: "#475569" },
  Shortlisted: { bg: "rgba(59, 130, 246, 0.14)", color: "#1d4ed8" },
  Interview: { bg: "var(--color-gold-soft)", color: "var(--color-gold-dark)" },
  Offer: { bg: "rgba(34, 197, 94, 0.15)", color: "#15803d" },
  Rejected: { bg: "rgba(220, 38, 38, 0.1)", color: "#dc2626" },
};

export default function ApplicantListItem({ applicant }) {
  const { advanceApplicantStage, rejectApplicant } = useEmployerData();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showRejectConfirm, setShowRejectConfirm] = useState(false);

  const stageStyle = STAGE_BADGES[applicant.stage] || STAGE_BADGES.New;

  function handleAdvance() {
    advanceApplicantStage(applicant.id);
  }

  function handleConfirmReject() {
    rejectApplicant(applicant.id);
    setShowRejectConfirm(false);
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.avatarBox} onClick={() => setDrawerOpen(true)}>
            {applicant.candidateName.charAt(0)}
          </div>
          <div className={styles.info}>
            <div className={styles.nameRow}>
              <h3 className={styles.name} onClick={() => setDrawerOpen(true)}>
                {applicant.candidateName}
              </h3>
              <span
                className={styles.stageBadge}
                style={{ backgroundColor: stageStyle.bg, color: stageStyle.color }}
              >
                {applicant.stage}
              </span>
            </div>
            <span className={styles.appliedRole}>{applicant.jobTitle}</span>
            <div className={styles.metaRow}>
              <span>Applied on {applicant.appliedDate}</span>
              {applicant.location && <span>• {applicant.location}</span>}
              {applicant.resumeFilename && (
                <span className={styles.resumeLabel}>
                  <FileText size={12} /> {applicant.resumeFilename}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.rightActions}>
          {applicant.stage !== "Offer" && applicant.stage !== "Rejected" && (
            <button
              type="button"
              className={styles.advanceBtn}
              onClick={handleAdvance}
              title="Advance to next pipeline stage"
            >
              <Check size={14} /> <span>Advance</span>
            </button>
          )}

          {applicant.stage !== "Rejected" && (
            <button
              type="button"
              className={styles.rejectBtn}
              onClick={() => setShowRejectConfirm(true)}
              title="Reject candidate"
            >
              <UserX size={14} />
            </button>
          )}

          <button
            type="button"
            className={styles.viewProfileBtn}
            onClick={() => setDrawerOpen(true)}
          >
            <span>View Profile</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Candidate Profile Drawer */}
      <ApplicantProfileDrawer
        applicant={applicant}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Reject Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={showRejectConfirm}
        title="Reject Candidate?"
        message={`Are you sure you want to mark ${applicant.candidateName} as Rejected for "${applicant.jobTitle}"?`}
        confirmLabel="Reject Candidate"
        confirmTone="danger"
        onConfirm={handleConfirmReject}
        onCancel={() => setShowRejectConfirm(false)}
      />
    </>
  );
}
