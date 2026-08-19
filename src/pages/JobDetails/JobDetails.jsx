import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase } from "lucide-react";
import { getJobById } from "../../data/jobsData";
import { getJobIconMeta } from "../../data/categoryIcons";
import { paths } from "../../data/navLinks";
import Button from "../../components/Button/Button";
import Pill from "../../components/Pill/Pill";
import styles from "./JobDetails.module.css";

export default function JobDetails() {
  const { jobId } = useParams();
  const job = getJobById(jobId);

  if (!job) {
    return (
      <main className={styles.page}>
        <div className={`container ${styles.missing}`}>
          <h1>Job not found</h1>
          <p>This listing may have closed. Browse current openings instead.</p>
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
            <Pill tone="teal" as="span">
              {job.jobType}
            </Pill>
            <Pill tone="blue" as="span">
              {job.category}
            </Pill>
            <Pill tone="purple" as="span">
              {job.shift}
            </Pill>
            <Pill tone="gold" as="span">
              {job.workMode}
            </Pill>
          </div>
          <p className={styles.body}>{job.description}</p>
          <p className={styles.body}>
            This is a preview of the listing. A full application flow will be connected in a later
            module. You can still reach the employer team through Contact Us or create an account to
            get started.
          </p>
          <div className={styles.actions}>
            <Button to={paths.signUp} variant="solid-teal">
              Apply Now
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
