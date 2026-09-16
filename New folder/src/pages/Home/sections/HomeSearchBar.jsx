import {
  Search,
  MapPin,
  Briefcase,
  ChevronDown,
} from "lucide-react";

import { homePageContent } from "../../../data/homePageContent";
import useServiceCareCategories from "../../../hooks/useServiceCareCategories";
import styles from "./HomeSearchBar.module.css";

export default function HomeSearchBar({
  values,
  onChange,
  onSearch,
}) {
  const {
    keywordLabel,
    keywordPlaceholder,
    locationLabel,
    locationPlaceholder,
    categoryLabel,
    submitLabel,
  } = homePageContent.search;

  const { categories } = useServiceCareCategories();

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(values);
  }

  return (
    <form
      className={styles.homeJobSearch}
      onSubmit={handleSubmit}
      aria-label="Job search"
    >
      {/* KEYWORD */}
      <div className={styles.searchSegment}>
        <Search
          size={21}
          strokeWidth={2}
          className={styles.segmentIcon}
        />

        <div className={styles.segmentContent}>
          <label htmlFor="home-keyword">
            {keywordLabel || "Keyword"}
          </label>

          <input
            id="home-keyword"
            type="search"
            placeholder={
              keywordPlaceholder || "Job title, skills, or company"
            }
            value={values.keyword}
            onChange={(e) =>
              onChange({
                ...values,
                keyword: e.target.value,
              })
            }
          />
        </div>
      </div>

      <span className={styles.searchDivider} />

      {/* LOCATION */}
      <div className={styles.searchSegment}>
        <MapPin
          size={21}
          strokeWidth={2}
          className={styles.segmentIcon}
        />

        <div className={styles.segmentContent}>
          <label htmlFor="home-location">
            {locationLabel || "Location"}
          </label>

          <input
            id="home-location"
            type="text"
            placeholder={
              locationPlaceholder ||
              "City, province, or postal code"
            }
            value={values.location}
            onChange={(e) =>
              onChange({
                ...values,
                location: e.target.value,
              })
            }
          />
        </div>
      </div>

      <span className={styles.searchDivider} />

      {/* CATEGORY */}
      <div className={styles.searchSegment}>
        <Briefcase
          size={21}
          strokeWidth={2}
          className={styles.segmentIcon}
        />

        <div
          className={`${styles.segmentContent} ${styles.categorySegment}`}
        >
          <label htmlFor="home-category">
            {categoryLabel || "Category"}
          </label>

          <select
            id="home-category"
            value={values.category}
            onChange={(e) =>
              onChange({
                ...values,
                category: e.target.value,
              })
            }
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={String(category.id)}
              >
                {category.name}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            strokeWidth={2}
            className={styles.categoryArrow}
          />
        </div>
      </div>

      <span className={styles.searchDivider} />

      {/* BUTTON */}
      <div className={styles.searchAction}>
        <button
          type="submit"
          className={styles.jobSearchButton}
        >
          <Search size={18} strokeWidth={2.2} />
          <span>{submitLabel || "Search Jobs"}</span>
        </button>
      </div>
    </form>
  );
}