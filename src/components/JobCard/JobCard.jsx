import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Heart, CheckCircle2 } from "lucide-react";
import { getJobIconMeta } from "../../data/categoryIcons";
import { jobHref } from "../../data/jobsData";
import { paths } from "../../data/navLinks";
import Pill from "../Pill/Pill";
import Button from "../Button/Button";
import styles from "./JobCard.module.css";

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
  const [internalSaved, setInternalSaved] = useState(false);
  const isSaved = controlledSaved !== undefined ? controlledSaved : internalSaved;

  function handleSaveToggle() {
    if (onToggleSave) {
      onToggleSave();
    } else {
      setInternalSaved((v) => !v);
    }
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
        <Button variant={buttonVariant} size="sm" onClick={onApply}>
          Apply Now
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
          <SaveButton saved={isSaved} onToggle={handleSaveToggle} className={styles.homeSave} />
        </div>
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
              <SaveButton saved={isSaved} onToggle={handleSaveToggle} />
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
          <SaveButton saved={isSaved} onToggle={handleSaveToggle} />
          {showSalary ? <p className={styles.salary}>{job.salary}</p> : null}
          <span className={styles.posted}>{job.posted}</span>
          {renderApplyAction()}
        </div>
      ) : showSalary && !isFeatured ? (
        <p className={styles.salary}>{job.salary}</p>
      ) : null}
    </article>
  );
}

function SaveButton({ saved, onToggle, className = "" }) {
  return (
    <button
      type="button"
      className={`${styles.save} ${saved ? styles.saved : ""} ${className}`}
      aria-label={saved ? "Remove from saved jobs" : "Save job"}
      aria-pressed={saved}
      onClick={onToggle}
    >
      <Heart size={18} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}
