import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Users, Edit3, Lock, Trash2, Calendar, Briefcase } from "lucide-react";
import JobPostingStatusBadge from "./JobPostingStatusBadge";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./JobPostingCard.module.css";

export default function JobPostingCard({ posting }) {
  const navigate = useNavigate();
  const { closeJobPosting, deleteJobPosting, getApplicantsForPosting } = useEmployerData();

  const [confirmModal, setConfirmModal] = useState({ isOpen: false, type: null });

  const applicants = getApplicantsForPosting(posting.id);
  const applicantCount = applicants.length;

  function handleEdit() {
    navigate(`/employer-dashboard/post-a-job?edit=${posting.id}`);
  }

  function handleViewApplicants() {
    navigate(`/employer-dashboard/job-postings/${posting.id}/applicants`);
  }

  function handleConfirmClose() {
    closeJobPosting(posting.id);
    setConfirmModal({ isOpen: false, type: null });
  }

  function handleConfirmDelete() {
    deleteJobPosting(posting.id);
    setConfirmModal({ isOpen: false, type: null });
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <div className={styles.titleArea}>
            <h3 className={styles.title}>{posting.title}</h3>
            <span className={styles.company}>{posting.companyName}</span>
          </div>
          <JobPostingStatusBadge status={posting.status} />
        </div>

        <div className={styles.metaGrid}>
          <span className={styles.metaItem}>
            <MapPin size={14} /> {posting.location}
          </span>
          <span className={styles.metaItem}>
            <Briefcase size={14} /> {posting.employmentType}
          </span>
          {posting.salaryRange && (
            <span className={styles.salaryTag}>{posting.salaryRange}</span>
          )}
          <span className={styles.metaItem}>
            <Calendar size={14} /> Posted on {posting.postedDate}
          </span>
        </div>

        {posting.jobSummary && (
          <p className={styles.summary}>{posting.jobSummary}</p>
        )}

        <div className={styles.footerRow}>
          <Link
            to={`/employer-dashboard/job-postings/${posting.id}/applicants`}
            className={styles.applicantLink}
          >
            <Users size={16} />
            <span>
              <strong>{applicantCount}</strong> Applicant{applicantCount !== 1 ? "s" : ""}
            </span>
          </Link>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={handleEdit}
              title="Edit job posting"
            >
              <Edit3 size={15} /> <span>Edit</span>
            </button>

            <button
              type="button"
              className={styles.actionBtnPrimary}
              onClick={handleViewApplicants}
            >
              View Applicants
            </button>

            {posting.status !== "Closed" && (
              <button
                type="button"
                className={styles.actionBtnWarning}
                onClick={() => setConfirmModal({ isOpen: true, type: "close" })}
                title="Close posting"
              >
                <Lock size={15} /> <span>Close</span>
              </button>
            )}

            <button
              type="button"
              className={styles.actionBtnDanger}
              onClick={() => setConfirmModal({ isOpen: true, type: "delete" })}
              title="Delete posting"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modals */}
      <DeleteConfirmModal
        isOpen={confirmModal.isOpen && confirmModal.type === "close"}
        title="Close Job Posting?"
        message={`Are you sure you want to close "${posting.title}"? Closed postings will stop receiving new candidate applications.`}
        confirmLabel="Close Posting"
        confirmTone="warning"
        onConfirm={handleConfirmClose}
        onCancel={() => setConfirmModal({ isOpen: false, type: null })}
      />

      <DeleteConfirmModal
        isOpen={confirmModal.isOpen && confirmModal.type === "delete"}
        title="Delete Job Posting?"
        message={`Are you sure you want to permanently delete "${posting.title}"? This action cannot be undone.`}
        confirmLabel="Delete Posting"
        confirmTone="danger"
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmModal({ isOpen: false, type: null })}
      />
    </>
  );
}
