import { Link } from "react-router-dom";
import { homePageContent } from "../../../data/homePageContent";
import JobCard from "../../../components/JobCard/JobCard";
import useServiceCareJobs from "../../../hooks/useServiceCareJobs";
import styles from "./FeaturedJobs.module.css";

export default function FeaturedJobs() {
  const { heading, viewAllLabel, viewAllTo } = homePageContent.featuredJobs;
  const { jobs, loading, error } = useServiceCareJobs({ limit: 8 });
  const featured = jobs.slice(0, 4);

  return (
    <section className={styles.section} aria-labelledby="featured-jobs-heading">
      <div className="container">
        <div className={styles.head}>
          <h2 id="featured-jobs-heading" className={styles.heading}>
            {heading}
            <span className={styles.bar} />
          </h2>
          <Link to={viewAllTo} className={styles.viewAll}>
            {viewAllLabel} →
          </Link>
        </div>
        <div className={styles.grid}>
          {loading ? <p>Loading jobs...</p> : null}
          {!loading && error ? <p>{error}</p> : null}
          {!loading && !error && !featured.length ? <p>No active jobs are available right now.</p> : null}
          {featured.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              layout="home"
              buttonVariant="solid-navy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
