import { Search, MapPin, LayoutGrid, ChevronDown, ArrowRight } from "lucide-react";
import { browseJobsContent } from "../../../data/browseJobsContent";
import Button from "../../../components/Button/Button";
import styles from "./JobSearchBar.module.css";

export default function JobSearchBar({ values, onChange, onSearch, isDashboard = false }) {
  const { keywordLabel, keywordPlaceholder, locationLabel, locationPlaceholder, categoryLabel, categories, submitLabel } =
    browseJobsContent.search;

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(values);
  }

  return (
    <section className={isDashboard ? styles.wrapDashboard : styles.wrap} aria-label="Job search">
      <div className={isDashboard ? "w-full" : "container"}>
        <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="job-keyword">{keywordLabel}</label>
          <div className={styles.inputWrap}>
            <Search size={18} className={styles.icon} />
            <input
              id="job-keyword"
              type="search"
              placeholder={keywordPlaceholder}
              value={values.keyword}
              onChange={(e) => onChange({ ...values, keyword: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="job-location">{locationLabel}</label>
          <div className={styles.inputWrap}>
            <MapPin size={18} className={styles.icon} />
            <input
              id="job-location"
              type="text"
              list="job-location-options"
              placeholder={locationPlaceholder}
              value={values.location}
              onChange={(e) => onChange({ ...values, location: e.target.value })}
            />
            <ChevronDown size={16} className={styles.chevron} aria-hidden />
            <datalist id="job-location-options">
              <option value="Toronto, ON" />
              <option value="Vancouver, BC" />
              <option value="Calgary, AB" />
              <option value="Montreal, QC" />
              <option value="Ottawa, ON" />
              <option value="Edmonton, AB" />
              <option value="Winnipeg, MB" />
            </datalist>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="job-category">{categoryLabel}</label>
          <div className={styles.inputWrap}>
            <LayoutGrid size={18} className={styles.icon} />
            <select
              id="job-category"
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
          <Button type="submit" variant="solid-teal" icon={ArrowRight} iconPosition="right">
            {submitLabel}
          </Button>
        </div>
      </form>
      </div>
    </section>
  );
}
