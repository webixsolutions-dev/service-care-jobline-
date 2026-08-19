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

export default function JobFilters({ filters, onChange, onReset }) {
  const [showMore, setShowMore] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const extra = browseJobsContent.extraLocations;
  const locationOptions = [
    ...filterGroups.location.options,
    ...(showMore ? extra : []),
  ].filter((opt) => opt.label.toLowerCase().includes(locationQuery.toLowerCase()));

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
        {filterGroups.category.options.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`cat-${opt.id}`}
            label={opt.label}
            count={opt.count}
            checked={filters.category.includes(opt.id)}
            onChange={() => toggleGroup("category", filterGroups.category.allId, opt.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={filterGroups.jobType.title} icon={getIcon(filterGroups.jobType.icon)}>
        {filterGroups.jobType.options.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`type-${opt.id}`}
            label={opt.label}
            count={opt.count}
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
        {locationOptions.map((opt) => (
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
        <button type="button" className={styles.more} onClick={() => setShowMore((v) => !v)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
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

      <FilterGroup title={filterGroups.shift.title} icon={getIcon(filterGroups.shift.icon)}>
        {filterGroups.shift.options.map((opt) => (
          <Checkbox
            key={opt.id}
            id={`shift-${opt.id}`}
            label={opt.label}
            count={opt.count}
            checked={filters.shift.includes(opt.id)}
            onChange={() => toggleGroup("shift", filterGroups.shift.allId, opt.id)}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}
