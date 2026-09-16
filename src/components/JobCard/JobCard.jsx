import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Briefcase, Heart, CheckCircle2 } from "lucide-react";
import { getJobIconMeta } from "../../data/categoryIcons";
import { jobHref } from "../../data/jobsData";
import { paths } from "../../data/navLinks";
import Pill from "../Pill/Pill";
import Button from "../Button/Button";
import styles from "./JobCard.module.css";
import { useAuth } from "../../lib/auth/AuthContext";
import { useSavedJobs } from "../../lib/SavedJobsContext";

const tagTone = {
  jobType: "teal",
  category: "blue",
  shift: "purple",
  workMode: "gold",
};

const jobTypeTone = {
  "Full-time": "teal",
  "Part-time": "gold",
};

/**
 * Job listing card.
 * `layout` = list | grid | home (compact featured card);
 * `variant` = default | featured;
 * `buttonVariant` overrides CTA button style.
 * `isApplied`, `isSaved`, `onApply`, `onToggleSave` drive dashboard/auth application state.
 */
export default function JobCard({
  job,
  layout = "list",
  variant = "default",
  showSalary = true,
  buttonVariant = "solid-teal",
  isApplied = false,
  isSaved: controlledSaved,
  onApply,
  onToggleSave,
}) {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { savedIds, toggleSaved } = useSavedJobs();
  const [saving, setSaving] = useState(false);
  const [applying, setApplying] = useState(false);
  const [actionError, setActionError] = useState("");
  const providerSaved = savedIds.has(String(job.id));
  const isSaved = controlledSaved !== undefined ? controlledSaved : providerSaved;

  async function handleSaveToggle() {
    if (saving) return;
    setSaving(true);
    setActionError("");
    if (onToggleSave) {
      try { await onToggleSave(); }
      catch (error) { setActionError(error?.message || "Unable to update saved jobs."); }
      finally { setSaving(false); }
      return;
    }
    if (profile?.role !== "job_seeker") {
      setSaving(false);
      navigate(paths.signIn, { state: { returnTo: href } });
      return;
    }
    try {
      await toggleSaved(job.id);
    } catch (error) { setActionError(error?.message || "Unable to update saved jobs."); }
    finally { setSaving(false); }
  }

  const { Icon, bgColor, color } = getJobIconMeta(job);
  const href = job.href || jobHref(job);
  const isHome = layout === "home";
  const stacked = variant === "featured" || layout === "grid" || isHome;
  const isFeatured = variant === "featured";

  const tags = [
    { label: job.jobType, tone: tagTone.jobType },
    { label: job.category, tone: tagTone.category },
    job.shift ? { label: job.shift, tone: tagTone.shift } : null,
    job.workMode ? { label: job.workMode, tone: tagTone.workMode } : null,
  ].filter(Boolean);

  const renderApplyAction = () => {
    if (isApplied) {
      return (
        <span className={styles.appliedBadge}>
          <CheckCircle2 size={16} /> Applied ✓
        </span>
      );
    }

    if (onApply) {
      return (
        <Button variant={buttonVariant} size="sm" disabled={applying} onClick={async () => {
          setApplying(true); setActionError("");
          try { await onApply(); }
          catch (error) { setActionError(error?.message || "Unable to submit this application."); }
          finally { setApplying(false); }
        }}>
          {applying ? <><span className="sc-spinner sc-spinner-sm" aria-hidden="true" /> Applying</> : "Apply Now"}
        </Button>
      );
    }

    return (
      <Button to={href} variant={buttonVariant} size="sm">
        {isFeatured ? "View Job" : job.ctaLabel || "Apply Now"}
      </Button>
    );
  };

  if (isHome) {
    return (
      <article className={`${styles.card} ${styles.home}`}>
        <div className={styles.homeTop}>
          <div className={styles.icon} style={{ background: bgColor, color }}>
            <Icon size={26} color={color} />
          </div>
          <div className={styles.homeInfo}>
            <h3 className={styles.title}>
              <Link to={href}>{job.title}</Link>
            </h3>
            <Link to={paths.employers} className={styles.companyTeal}>
              {job.company}
            </Link>
            <p className={styles.homeLocation}>
              <MapPin size={14} /> {job.location}
            </p>
          </div>
        </div>

        {showSalary ? <p className={styles.homeSalary}>{job.salary}</p> : null}

        <div className={styles.homeTags}>
          <Pill tone={jobTypeTone[job.jobType] || "teal"} as="span">
            {job.jobType}
          </Pill>
        </div>

        <div className={styles.homeActions}>
          {renderApplyAction()}
          <SaveButton saved={isSaved} loading={saving} onToggle={handleSaveToggle} className={styles.homeSave} />
        </div>
        {actionError ? <p role="alert" style={{ color: "#b91c1c", fontSize: "0.75rem", marginTop: "8px" }}>{actionError}</p> : null}
      </article>
    );
  }

  return (
    <article
      className={`${styles.card} ${stacked ? styles.grid : styles.list} ${
        isFeatured ? styles.featured : ""
      }`}
    >
      <div className={styles.icon} style={{ background: bgColor, color }}>
        <Icon size={28} color={color} />
      </div>

      <div className={styles.body}>
        <div className={styles.headingRow}>
          <div>
            <h3 className={styles.title}>
              <Link to={href}>{job.title}</Link>
            </h3>
            <Link to={paths.employers} className={styles.company}>
              {job.company}
            </Link>
            <p className={styles.meta}>
              <span>
                <MapPin size={14} /> {job.location}
              </span>
              <span>
                <Briefcase size={14} /> {job.jobType}
              </span>
            </p>
          </div>

          {stacked ? (
            <div className={styles.headingAside}>
              <span className={styles.posted}>{job.posted}</span>
              <SaveButton saved={isSaved} loading={saving} onToggle={handleSaveToggle} />
            </div>
          ) : null}
        </div>

        <p className={styles.description}>{job.description}</p>

        <div className={styles.footerRow}>
          <div className={styles.tags}>
            {tags.slice(0, 3).map((tag) => (
              <Pill key={tag.label} tone={tag.tone} as="span">
                {tag.label}
              </Pill>
            ))}
          </div>

          {stacked ? renderApplyAction() : null}
        </div>
      </div>

      {!stacked ? (
        <div className={styles.aside}>
          <SaveButton saved={isSaved} loading={saving} onToggle={handleSaveToggle} />
          {showSalary ? <p className={styles.salary}>{job.salary}</p> : null}
          <span className={styles.posted}>{job.posted}</span>
          {renderApplyAction()}
        </div>
      ) : showSalary && !isFeatured ? (
        <p className={styles.salary}>{job.salary}</p>
      ) : null}
      {actionError ? <p role="alert" style={{ color: "#b91c1c", fontSize: "0.75rem", marginTop: "8px" }}>{actionError}</p> : null}
    </article>
  );
}

function SaveButton({ saved, loading = false, onToggle, className = "" }) {
  return (
    <button
      type="button"
      className={`${styles.save} ${saved ? styles.saved : ""} ${className}`}
      aria-label={saved ? "Remove from saved jobs" : "Save job"}
      aria-pressed={saved}
      onClick={onToggle}
      disabled={loading}
    >
      {loading ? <span className="sc-spinner sc-spinner-sm" aria-hidden="true" /> : <Heart size={18} fill={saved ? "currentColor" : "none"} />}
    </button>
  );
}
