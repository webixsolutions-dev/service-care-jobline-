import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";
import { homePageContent } from "../../../data/homePageContent";
import Button from "../../../components/Button/Button";
import styles from "./HomeSearchBar.module.css";

export default function HomeSearchBar({ values, onChange, onSearch }) {
  const {
    keywordLabel,
    keywordPlaceholder,
    locationLabel,
    locationPlaceholder,
    categoryLabel,
    categories,
    submitLabel,
  } = homePageContent.search;

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(values);
  }

  return (
    <form
      className={styles.bar}
      onSubmit={handleSubmit}
      aria-label="Job search"
    >
      <div className={styles.field}>
        <label htmlFor="home-keyword">{keywordLabel}</label>
        <div className={styles.inputWrap}>
          <Search size={18} className={styles.icon} />
          <input
            id="home-keyword"
            type="search"
            placeholder={keywordPlaceholder}
            value={values.keyword}
            onChange={(e) => onChange({ ...values, keyword: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="home-location">{locationLabel}</label>
        <div className={styles.inputWrap}>
          <MapPin size={18} className={styles.icon} />
          <input
            id="home-location"
            type="text"
            placeholder={locationPlaceholder}
            value={values.location}
            onChange={(e) => onChange({ ...values, location: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="home-category">{categoryLabel}</label>
        <div className={styles.inputWrap}>
          <Briefcase size={18} className={styles.icon} />
          <select
            id="home-category"
            value={values.category}
            onChange={(e) => onChange({ ...values, category: e.target.value })}
          >
            {categories.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className={styles.chevron} aria-hidden />
        </div>
      </div>

      <div className={styles.action}>
        <Button type="submit" variant="solid-teal" icon={Search}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
