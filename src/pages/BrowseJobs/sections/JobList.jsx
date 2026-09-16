import JobCard from "../../../components/JobCard/JobCard";
import styles from "./JobList.module.css";

export default function JobList({ jobs, layout = "list", showSalary = true }) {
  if (!jobs.length) {
    return <p className={styles.empty}>No jobs match your current filters.</p>;
  }

  return (
    <div className={layout === "grid" ? styles.grid : styles.stack}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} layout={layout} showSalary={showSalary} />
      ))}
    </div>
  );
}
