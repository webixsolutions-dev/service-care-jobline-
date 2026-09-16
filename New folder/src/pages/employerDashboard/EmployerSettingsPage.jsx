import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, User, Bell, LogOut, Lock, Mail, AlertTriangle } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import DeleteConfirmModal from "../../components/employerDashboard/DeleteConfirmModal";
import { useAuth } from "../../context/AuthContext";
import { paths } from "../../data/navLinks";
import styles from "./EmployerSettingsPage.module.css";

export default function EmployerSettingsPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Account Form State
  const [accountData, setAccountData] = useState({
    email: currentUser?.email || "recruiter@sunnybrook.ca",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [accountSuccess, setAccountSuccess] = useState(false);
  const [accountError, setAccountError] = useState("");

  // Notification Switches State
  const [notifications, setNotifications] = useState({
    candidateApplies: true,
    weeklySummary: true,
    hiringTips: false,
  });
  const [notifSuccess, setNotifSuccess] = useState(false);

  // Delete Account Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleAccountSubmit(e) {
    e.preventDefault();
    setAccountError("");
    setAccountSuccess(false);

    if (accountData.newPassword && accountData.newPassword !== accountData.confirmPassword) {
      setAccountError("New passwords do not match.");
      return;
    }

    setAccountSuccess(true);
    setAccountData((prev) => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));
    setTimeout(() => setAccountSuccess(false), 4000);
  }

  function handleToggleNotification(key) {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    setNotifSuccess(true);
    setTimeout(() => setNotifSuccess(false), 3000);
  }

  function handleSignOut() {
    logout();
    navigate(paths.signIn || "/sign-in");
  }

  function handleConfirmDeleteAccount() {
    logout();
    navigate(paths.home || "/");
  }

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Employer Settings"
        subtitle="Manage recruiter account credentials, applicant alerts, and organizational settings."
      />

      <div className={styles.grid}>
        {/* Account Credentials Card */}
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <User size={20} />
            </div>
            <div>
              <h2 className={styles.cardTitle}>Account Security</h2>
              <p className={styles.cardSub}>Update recruiter login email and password.</p>
            </div>
          </div>

          {accountSuccess && (
            <div className={styles.successAlert}>
              <Check size={16} /> Account security settings updated!
            </div>
          )}

          {accountError && <div className={styles.errorAlert}>{accountError}</div>}

          <form onSubmit={handleAccountSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <Mail size={14} /> Recruiter Email Address
              </label>
              <input
                type="email"
                value={accountData.email}
                onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.divider} />

            <div className={styles.formGroup}>
              <label className={styles.label}>
                <Lock size={14} /> Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={accountData.currentPassword}
                onChange={(e) => setAccountData({ ...accountData, currentPassword: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>New Password</label>
                <input
                  type="password"
                  placeholder="New password"
                  value={accountData.newPassword}
                  onChange={(e) => setAccountData({ ...accountData, newPassword: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={accountData.confirmPassword}
                  onChange={(e) => setAccountData({ ...accountData, confirmPassword: e.target.value })}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button type="submit" className={styles.saveBtn}>
                Update Account
              </button>
            </div>
          </form>
        </section>

        {/* Notifications & Danger Zone Stack */}
        <div className={styles.sideStack}>
          {/* Notifications Card */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Bell size={20} />
              </div>
              <div>
                <h2 className={styles.cardTitle}>Applicant Alerts</h2>
                <p className={styles.cardSub}>Control email notification preferences.</p>
              </div>
            </div>

            {notifSuccess && (
              <div className={styles.successAlert}>
                <Check size={16} /> Preferences saved.
              </div>
            )}

            <div className={styles.toggleList}>
              <label className={styles.toggleRow}>
                <div>
                  <span className={styles.toggleTitle}>Candidate Applications</span>
                  <span className={styles.toggleSub}>Email me whenever a candidate applies</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.candidateApplies}
                  onChange={() => handleToggleNotification("candidateApplies")}
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.toggleRow}>
                <div>
                  <span className={styles.toggleTitle}>Weekly Applicant Summary</span>
                  <span className={styles.toggleSub}>Weekly digest of candidates across all postings</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.weeklySummary}
                  onChange={() => handleToggleNotification("weeklySummary")}
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.toggleRow}>
                <div>
                  <span className={styles.toggleTitle}>Newcomer Hiring Tips</span>
                  <span className={styles.toggleSub}>Best practices for welcoming international talent</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.hiringTips}
                  onChange={() => handleToggleNotification("hiringTips")}
                  className={styles.checkbox}
                />
              </label>
            </div>
          </section>

          {/* Session & Danger Zone */}
          <section className={styles.card}>
            <div className={styles.signOutRow}>
              <div>
                <h3 className={styles.signOutTitle}>Sign Out</h3>
                <p className={styles.signOutSub}>Sign out of your session on this device.</p>
              </div>
              <button type="button" className={styles.signOutActionBtn} onClick={handleSignOut}>
                <LogOut size={16} /> Sign Out
              </button>
            </div>

            <div className={styles.divider} />

            <div className={styles.dangerZoneRow}>
              <div>
                <h3 className={styles.dangerTitle}>Delete Company Account</h3>
                <p className={styles.signOutSub}>Permanently delete your company account and postings.</p>
              </div>
              <button
                type="button"
                className={styles.deleteAccountBtn}
                onClick={() => setShowDeleteModal(true)}
              >
                <AlertTriangle size={15} /> Delete Account
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        title="Delete Company Account?"
        message="Are you sure you want to permanently delete your company account and remove all job postings and applicant records? This action cannot be undone."
        confirmLabel="Delete Account Permanently"
        confirmTone="danger"
        onConfirm={handleConfirmDeleteAccount}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
}
