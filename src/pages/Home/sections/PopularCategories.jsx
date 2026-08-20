import { Link } from "react-router-dom";
import { paths } from "../../../data/navLinks";
import { homePageContent } from "../../../data/homePageContent";
import { jobCategories } from "../../../data/jobCategories";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import styles from "./PopularCategories.module.css";

export default function PopularCategories() {
  const { heading, subtext, subtextAccent, subtextEnd } = homePageContent.categories;

  return (
    <section className={styles.section} aria-labelledby="popular-categories-heading">
      <div className="container">
        <h2 id="popular-categories-heading" className={styles.heading}>
          {heading}
          <span className={styles.bar} />
        </h2>
        <p className={styles.sub}>
          {subtext}{" "}
          <Link to={`${paths.browseJobs}?category=healthcare`} className={styles.accent}>
            {subtextAccent}
          </Link>
          {subtextEnd}
        </p>
        <div className={styles.grid}>
          {jobCategories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
