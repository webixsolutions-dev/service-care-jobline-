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

/*
  UI cards intentionally contain 6 presentation items.

  Real backend category mapping:

  305 = Hospitality & Guest Services
  306 = Food & Beverage
  307 = Housekeeping & Facilities
  308 = Recreation & Wellness

  Some cards share a backend category but apply an additional keyword.
*/

const CARD_CONFIG = [
  {
    key: "hotel-jobs",
    title: "Hotel Jobs",
    description:
      "Explore front desk, housekeeping, and other hotel careers.",
    categoryId: 305,
    keyword: "hotel",
    Icon: Hotel,
  },

  {
    key: "guest-services",
    title: "Guest Service Jobs",
    description:
      "Discover hospitality and guest service opportunities across Canada.",
    categoryId: 305,
    keyword: "guest service",
    Icon: HandHeart,
  },

  {
    key: "restaurant-jobs",
    title: "Restaurant Jobs",
    description:
      "Find kitchen, server, and management roles in restaurants.",
    categoryId: 306,
    keyword: "restaurant",
    Icon: Utensils,
  },

  {
    key: "food-beverage",
    title: "Food & Beverage Jobs",
    description:
      "Explore food service, kitchen, server, and beverage opportunities.",
    categoryId: 306,
    keyword: "",
    Icon: ConciergeBell,
  },

  {
    key: "housekeeping",
    title: "Housekeeping Jobs",
    description:
      "Discover cleaning, facilities, and property support roles.",
    categoryId: 307,
    keyword: "",
    Icon: Building2,
  },

  {
    key: "recreation-wellness",
    title: "Recreation & Wellness",
    description:
      "Explore recreation, wellness, community, and support opportunities.",
    categoryId: 308,
    keyword: "",
    Icon: Users,
  },
];

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

  /*
    Backend categories ko verify karte hain.
    Agar category active/backend mein available ho tabhi card show hoga.
  */
  const availableIds = new Set(
    categories.map((category) => Number(category.id))
  );

  const visibleCards = CARD_CONFIG.filter((card) =>
    availableIds.has(card.categoryId)
  );

  function buildCategoryUrl(card) {
    const params = new URLSearchParams();

    params.set("category", String(card.categoryId));

    if (card.keyword) {
      params.set("keyword", card.keyword);
    }

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
          <div className={styles.state}>
            Loading categories...
          </div>
        ) : null}

        {!loading && error ? (
          <div className={styles.state}>
            {error}
          </div>
        ) : null}

        {!loading && !error ? (
          <div className={styles.grid}>
            {visibleCards.map((card) => {
              const Icon = card.Icon;

              return (
                <article
                  key={card.key}
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
                    {card.title}
                  </h3>

                  <p className={styles.description}>
                    {card.description}
                  </p>

                  <Link
                    to={buildCategoryUrl(card)}
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