import { useState } from "react";
import { RefreshCw, Search, DollarSign } from "lucide-react";
import FilterGroup from "../../../components/FilterGroup/FilterGroup";
import RangeSlider from "../../../components/RangeSlider/RangeSlider";
import { getIcon } from "../../../components/icons";
import { browseJobsContent, filterGroups } from "../../../data/browseJobsContent";
import styles from "./JobFilters.module.css";

function Checkbox({ id, label, count, checked, onChange }) {
  return (
    <label className={styles.check} htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <span>
        {label}
        {count != null ? ` (${count.toLocaleString("en-CA")})` : ""}
      </span>
    </label>
  );
}

export default function JobFilters({
  filters,
  onChange,
  onReset,
  categoryOptions = [],
  locationOptions = [],
}) {
  const [showMore, setShowMore] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const visibleLocations = (showMore ? locationOptions : locationOptions.slice(0, 5)).filter((opt) =>
    opt.label.toLowerCase().includes(locationQuery.toLowerCase()),
  );

  function toggleGroup(key, allId, optionId) {
    const current = filters[key];
    if (optionId === allId) {
      onChange({ ...filters, [key]: [allId] });
      return;
    }
    const withoutAll = current.filter((id) => id !== allId);
    const next = withoutAll.includes(optionId)
      ? withoutAll.filter((id) => id !== optionId)
      : [...withoutAll, optionId];
    onChange({ ...filters, [key]: next.length ? next : [allId] });
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.head}>
        <h3>Filter Jobs</h3>
        <button type="button" className={styles.reset} onClick={onReset}>
          Reset All <RefreshCw size={14} />
        </button>
      </div>

      <FilterGroup title={filterGroups.category.title} icon={getIcon(filterGroups.category.icon)}>
        <Checkbox
          id="cat-all-categories"
          label="All Categories"
          count={null}
          checked={filters.category.includes("all-categories")}
          onChange={() => toggleGroup("category", "all-categories", "all-categories")}
        />
        {categoryOptions.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`cat-${opt.id}`}
            label={opt.label}
            count={opt.count}
            checked={filters.category.includes(String(opt.id))}
            onChange={() => toggleGroup("category", "all-categories", String(opt.id))}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={filterGroups.jobType.title} icon={getIcon(filterGroups.jobType.icon)}>
        {filterGroups.jobType.options.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`type-${opt.id}`}
            label={opt.label}
            count={null}
            checked={filters.jobType.includes(opt.id)}
            onChange={() => toggleGroup("jobType", filterGroups.jobType.allId, opt.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={filterGroups.location.title} icon={getIcon(filterGroups.location.icon)}>
        <div className={styles.locSearch}>
          <Search size={15} />
          <input
            type="search"
            placeholder="City, Province or Postal Code"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            aria-label="Filter locations"
          />
        </div>
        {visibleLocations.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`loc-${opt.id}`}
            label={opt.label}
            count={opt.count}
            checked={filters.location.includes(opt.id)}
            onChange={() => {
              const next = filters.location.includes(opt.id)
                ? filters.location.filter((id) => id !== opt.id)
                : [...filters.location, opt.id];
              onChange({ ...filters, location: next });
            }}
          />
        ))}
        {locationOptions.length > 5 ? (
          <button type="button" className={styles.more} onClick={() => setShowMore((v) => !v)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        ) : null}
      </FilterGroup>

      <FilterGroup title="Salary Range" icon={DollarSign}>
        <RangeSlider
          min={browseJobsContent.salary.min}
          max={browseJobsContent.salary.max}
          step={browseJobsContent.salary.step}
          minValue={filters.salary.min}
          maxValue={filters.salary.max}
          onChange={(salary) => onChange({ ...filters, salary })}
        />
        <Checkbox
          id="show-salary"
          label="Show Salary on Results"
          checked={filters.showSalary}
          onChange={() => onChange({ ...filters, showSalary: !filters.showSalary })}
        />
      </FilterGroup>
    </aside>
  );
}
