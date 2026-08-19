import { Link } from "react-router-dom";
import { homePageContent } from "../../../data/homePageContent";
import { featuredJobsHome } from "../../../data/featuredJobsHome";
import JobCard from "../../../components/JobCard/JobCard";
import styles from "./FeaturedJobs.module.css";

export default function FeaturedJobs() {
  const { heading, viewAllLabel, viewAllTo } = homePageContent.featuredJobs;

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
          {featuredJobsHome.map((job) => (
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
