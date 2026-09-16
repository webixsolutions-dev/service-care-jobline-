import React, { useState } from "react";
import { MapPin, Calendar, Trash2, Building } from "lucide-react";
import ApplicationStatusBadge from "./ApplicationStatusBadge";
import WithdrawConfirmModal from "./WithdrawConfirmModal";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./ApplicationListItem.module.css";

export default function ApplicationListItem({ application }) {
  const { withdrawApplication } = useDashboardData();
  const [showConfirm, setShowConfirm] = useState(false);

  function handleWithdrawConfirm() {
    withdrawApplication(application.id);
    setShowConfirm(false);
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.companyIcon}>
            <Building size={22} />
          </div>
          <div className={styles.details}>
            <h3 className={styles.jobTitle}>{application.title}</h3>
            <span className={styles.companyName}>{application.company}</span>
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <MapPin size={14} /> {application.location}
              </span>
              <span className={styles.metaItem}>
                <Calendar size={14} /> Applied on {application.dateApplied}
              </span>
            </div>
            {application.notes && (
              <p className={styles.notes}>Note: {application.notes}</p>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <ApplicationStatusBadge status={application.status} />
          <button
            type="button"
            className={styles.withdrawBtn}
            onClick={() => setShowConfirm(true)}
            title="Withdraw application"
          >
            <Trash2 size={16} />
            <span>Withdraw</span>
          </button>
        </div>
      </div>

      <WithdrawConfirmModal
        isOpen={showConfirm}
        jobTitle={application.title}
        company={application.company}
        onConfirm={handleWithdrawConfirm}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
