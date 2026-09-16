import React from "react";
import { AlertTriangle, X } from "lucide-react";
import Button from "../Button/Button";
import styles from "./WithdrawConfirmModal.module.css";

export default function WithdrawConfirmModal({
  isOpen,
  jobTitle,
  company,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onCancel} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onCancel}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className={styles.iconWrapper}>
          <AlertTriangle size={28} className={styles.warningIcon} />
        </div>

        <h3 className={styles.title}>Withdraw Application?</h3>
        <p className={styles.description}>
          Are you sure you want to withdraw your application for{" "}
          <strong>{jobTitle}</strong> at <strong>{company}</strong>? This action cannot be undone.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className={styles.withdrawBtn} onClick={onConfirm}>
            Withdraw Application
          </button>
        </div>
      </div>
    </div>
  );
}
