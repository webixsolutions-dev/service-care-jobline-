import React, { useState } from "react";
import { Check, User, Bell, LogOut, Lock, Mail } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { paths } from "../../data/navLinks";
import styles from "./SettingsPage.module.css";

export default function SettingsPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Account form state
  const [accountData, setAccountData] = useState({
    email: currentUser?.email || "alex.rivera@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [accountSuccess, setAccountSuccess] = useState(false);
  const [accountError, setAccountError] = useState("");

  // Notification switches state
  const [notifications, setNotifications] = useState({
    jobMatches: true,
    statusUpdates: true,
    weeklyDigest: false,
    promotionalOffers: false,
  });
  const [notifSuccess, setNotifSuccess] = useState(false);

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

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Settings"
        subtitle="Manage your login credentials, email preferences, and notification alerts."
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
              <p className={styles.cardSub}>Update your email address or account password.</p>
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
                <Mail size={14} /> Email Address
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

        {/* Notifications & Sign Out Card */}
        <div className={styles.sideStack}>
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Bell size={20} />
              </div>
              <div>
                <h2 className={styles.cardTitle}>Notifications</h2>
                <p className={styles.cardSub}>Control what emails you receive.</p>
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
                  <span className={styles.toggleTitle}>New Job Matches</span>
                  <span className={styles.toggleSub}>Email me when new jobs match my profile skills</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.jobMatches}
                  onChange={() => handleToggleNotification("jobMatches")}
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.toggleRow}>
                <div>
                  <span className={styles.toggleTitle}>Application Updates</span>
                  <span className={styles.toggleSub}>Notify me when an employer reviews my application</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.statusUpdates}
                  onChange={() => handleToggleNotification("statusUpdates")}
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.toggleRow}>
                <div>
                  <span className={styles.toggleTitle}>Weekly Career Digest</span>
                  <span className={styles.toggleSub}>Summary of top hiring trends for newcomers</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.weeklyDigest}
                  onChange={() => handleToggleNotification("weeklyDigest")}
                  className={styles.checkbox}
                />
              </label>
            </div>
          </section>

          {/* Session Sign Out Box */}
          <section className={styles.signOutBox}>
            <div>
              <h3 className={styles.signOutTitle}>Sign Out</h3>
              <p className={styles.signOutSub}>Sign out of your session on this device.</p>
            </div>
            <button type="button" className={styles.signOutActionBtn} onClick={handleSignOut}>
              <LogOut size={16} /> Sign Out
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
