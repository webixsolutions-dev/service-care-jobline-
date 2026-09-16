import React from "react";
import { MapPin, Calendar, Building } from "lucide-react";
import ApplicationStatusBadge from "./ApplicationStatusBadge";
import styles from "./ApplicationListItem.module.css";

export default function ApplicationListItem({ application }) {
  return (
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
        </div>
      </div>
  );
}
