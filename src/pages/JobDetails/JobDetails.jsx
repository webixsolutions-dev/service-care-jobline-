import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase } from "lucide-react";
import { getJobIconMeta } from "../../data/categoryIcons";
import { paths } from "../../data/navLinks";
import { applyToJob, getPublicJob, getServiceCareCategories, normalizeJob, recordJobView } from "../../lib/jobs";
import { useAuth } from "../../lib/auth/AuthContext";
import Button from "../../components/Button/Button";
import Pill from "../../components/Pill/Pill";
import styles from "./JobDetails.module.css";

export default function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { token, profile } = useAuth();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [applyState, setApplyState] = useState({ loading: false, message: "", error: "" });

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");

    Promise.all([getPublicJob(jobId), getServiceCareCategories()])
      .then(([row, categories]) => {
        if (cancelled) return;
        setJob(normalizeJob(row, categories));
        recordJobView(jobId).catch(() => {});
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Job not found");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [jobId]);

  async function handleApply() {
    if (!token) {
      navigate(paths.signIn, { state: { returnTo: `/jobs/${jobId}` } });
      return;
    }
    if (profile?.role !== "job_seeker") {
      setApplyState({ loading: false, message: "", error: "Only job seeker accounts can apply for jobs." });
      return;
    }

    setApplyState({ loading: true, message: "", error: "" });
    try {
      await applyToJob(jobId, token);
      setApplyState({ loading: false, message: "Application submitted successfully.", error: "" });
    } catch (err) {
      setApplyState({ loading: false, message: "", error: err?.message || "Could not submit application." });
    }
  }

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={`container ${styles.missing}`}>
          <h1>Loading job...</h1>
        </div>
      </main>
    );
  }

  if (!job || error) {
    return (
      <main className={styles.page}>
        <div className={`container ${styles.missing}`}>
          <h1>Job not found</h1>
          <p>{error || "This listing may have closed. Browse current openings instead."}</p>
          <Button to={paths.browseJobs} variant="solid-teal">
            Browse Jobs
          </Button>
        </div>
      </main>
    );
  }

  const { Icon, bgColor, color } = getJobIconMeta(job);

  return (
    <main className={styles.page}>
      <div className={`container ${styles.wrap}`}>
        <Link to={paths.browseJobs} className={styles.back}>
          <ArrowLeft size={16} /> Back to Browse Jobs
        </Link>
        <article className={styles.card}>
          <div className={styles.icon} style={{ background: bgColor }}>
            <Icon size={32} color={color} />
          </div>
          <p className={styles.posted}>{job.posted}</p>
          <h1>{job.title}</h1>
          <Link to={paths.employers} className={styles.company}>
            {job.company}
          </Link>
          <p className={styles.meta}>
            <span>
              <MapPin size={16} /> {job.location}
            </span>
            <span>
              <Briefcase size={16} /> {job.jobType}
            </span>
          </p>
          <p className={styles.salary}>{job.salary}</p>
          <div className={styles.tags}>
            <Pill tone="teal" as="span">{job.jobType}</Pill>
            <Pill tone="blue" as="span">{job.category}</Pill>
            {job.workMode ? <Pill tone="gold" as="span">{job.workMode}</Pill> : null}
          </div>
          <p className={styles.body}>{job.description}</p>
          {applyState.message ? <p className={styles.body}>{applyState.message}</p> : null}
          {applyState.error ? <p className={styles.body}>{applyState.error}</p> : null}
          <div className={styles.actions}>
            <Button variant="solid-teal" onClick={handleApply}>
              {applyState.loading ? "Applying..." : "Apply Now"}
            </Button>
            <Button to={paths.contactUs} variant="solid-gold">
              Contact Employer
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
}
