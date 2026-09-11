import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ConciergeBell,
  HandHeart,
  Hotel,
  Utensils,
  Users,
} from "lucide-react";

import { paths } from "../../../data/navLinks";
import { homePageContent } from "../../../data/homePageContent";
import useServiceCareCategories from "../../../hooks/useServiceCareCategories";

import styles from "./PopularCategories.module.css";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const CATEGORY_ICONS = [Hotel, HandHeart, Utensils, ConciergeBell, Building2, Users];

export default function PopularCategories() {
  const {
    heading,
    subtext,
    subtextAccent,
    subtextEnd,
  } = homePageContent.categories;

  const {
    categories,
    loading,
    error,
  } = useServiceCareCategories();

  const visibleCategories = categories.slice(0, 6);

  function buildCategoryUrl(category) {
    const params = new URLSearchParams();
    params.set("category", String(category.id));
    return `${paths.browseJobs}?${params.toString()}`;
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="popular-categories-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <h2
            id="popular-categories-heading"
            className={styles.heading}
          >
            {heading}
          </h2>

          <span
            className={styles.bar}
            aria-hidden
          />

          <p className={styles.sub}>
            {subtext}{" "}

            <Link
              to={paths.browseJobs}
              className={styles.accent}
            >
              {subtextAccent}
            </Link>

            {subtextEnd}
          </p>
        </div>

        {loading ? (
          <div className={styles.state}><LoadingSpinner label="Loading categories" /></div>
        ) : null}

        {!loading && error ? (
          <div className={styles.state}>
            {error}
          </div>
        ) : null}

        {!loading && !error ? (
          <div className={styles.grid}>
            {visibleCategories.map((category, index) => {
              const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];

              return (
                <article
                  key={category.id}
                  className={styles.card}
                >
                  <div className={styles.iconCircle}>
                    <Icon
                      size={34}
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </div>

                  <h3 className={styles.cardTitle}>
                    {category.name}
                  </h3>

                  <p className={styles.description}>
                    Explore active {category.name.toLowerCase()} opportunities from verified employers.
                  </p>

                  <Link
                    to={buildCategoryUrl(category)}
                    className={styles.explore}
                  >
                    <span>Explore Jobs</span>

                    <ArrowRight
                      size={15}
                      strokeWidth={2.2}
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
