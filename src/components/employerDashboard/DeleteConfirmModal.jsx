import React from "react";
import { AlertTriangle, X } from "lucide-react";
import styles from "./DeleteConfirmModal.module.css";

export default function DeleteConfirmModal({
  isOpen,
  title = "Confirm Action",
  message,
  confirmLabel = "Delete",
  confirmTone = "danger", // 'danger' | 'warning'
  onConfirm,
  onCancel,
  confirmLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={confirmLoading ? undefined : onCancel} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onCancel}
          disabled={confirmLoading}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className={`${styles.iconWrapper} ${styles[confirmTone]}`}>
          <AlertTriangle size={28} />
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{message}</p>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={onCancel} disabled={confirmLoading}>
            Cancel
          </button>
          <button
            type="button"
            className={`${styles.confirmBtn} ${styles[`${confirmTone}Btn`]}`}
            onClick={onConfirm}
            disabled={confirmLoading}
          >
            {confirmLoading ? <><span className="sc-spinner sc-spinner-sm" aria-hidden="true" /> Working…</> : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
