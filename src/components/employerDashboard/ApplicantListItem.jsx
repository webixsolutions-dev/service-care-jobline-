import React, { useState } from "react";
import { FileText, ChevronRight, UserX, Check } from "lucide-react";
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
  Hired: { bg: "rgba(34, 197, 94, 0.2)", color: "#166534" },
  Rejected: { bg: "rgba(220, 38, 38, 0.1)", color: "#dc2626" },
};

export default function ApplicantListItem({ applicant }) {
  const { advanceApplicantStage, rejectApplicant } = useEmployerData();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showRejectConfirm, setShowRejectConfirm] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [actionError, setActionError] = useState("");

  const stageStyle = STAGE_BADGES[applicant.stage] || STAGE_BADGES.New;

  async function handleAdvance() {
    setUpdating(true);
    setActionError("");
    try { await advanceApplicantStage(applicant.id); }
    catch (error) { setActionError(error?.message || "Unable to update this application."); }
    finally { setUpdating(false); }
  }

  async function handleConfirmReject() {
    setUpdating(true);
    setActionError("");
    try {
      await rejectApplicant(applicant.id);
      setShowRejectConfirm(false);
    } catch (error) {
      setActionError(error?.message || "Unable to reject this application.");
    } finally {
      setUpdating(false);
    }
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
          {!['Hired', 'Rejected', 'Withdrawn'].includes(applicant.stage) && (
            <button
              type="button"
              className={styles.advanceBtn}
              onClick={handleAdvance}
              disabled={updating}
              title="Advance to next pipeline stage"
            >
              {updating ? <span className="sc-spinner sc-spinner-sm" aria-hidden="true" /> : <Check size={14} />} <span>Advance</span>
            </button>
          )}

          {!['Hired', 'Rejected', 'Withdrawn'].includes(applicant.stage) && (
            <button
              type="button"
              className={styles.rejectBtn}
              onClick={() => setShowRejectConfirm(true)}
              disabled={updating}
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
      {actionError ? <p role="alert" style={{ color: "#b91c1c", fontSize: "0.8rem", margin: "-8px 0 12px" }}>{actionError}</p> : null}

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
        confirmLoading={updating}
      />
    </>
  );
}
