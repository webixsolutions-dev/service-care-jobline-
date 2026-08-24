import { useMemo, useState, useEffect } from "react";
import { List, LayoutGrid, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { jobMatchesSearch, annualSalaryMin, postedHoursAgo } from "../../../data/jobsData";
import { browseJobsContent, filterGroups } from "../../../data/browseJobsContent";
import useServiceCareJobs from "../../../hooks/useServiceCareJobs";
import JobFilters from "./JobFilters";
import JobList from "./JobList";
import Pagination from "../../../components/Pagination/Pagination";
import styles from "./JobListings.module.css";

const PAGE_SIZE = 4;

const defaultFilters = {
  category: ["all-categories"],
  jobType: [filterGroups.jobType.allId],
  location: [],
  salary: { min: browseJobsContent.salary.min, max: browseJobsContent.salary.max },
  showSalary: true,
};

export default function JobListings({ search = {} }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("recent");
  const [layout, setLayout] = useState("list");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { jobs, categories, loading, error } = useServiceCareJobs({ limit: 100 });

  const categoryOptions = useMemo(() => {
    return categories.map((category) => ({
      id: String(category.id),
      label: category.name,
      count: jobs.filter((job) => Number(job.categoryId) === Number(category.id)).length,
    }));
  }, [categories, jobs]);

  const locationOptions = useMemo(() => {
    const counts = new Map();
    for (const job of jobs) {
      if (!job.location) continue;
      counts.set(job.location, (counts.get(job.location) || 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ id: label, label, count }));
  }, [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const catOk =
        filters.category.includes("all-categories") || filters.category.includes(String(job.categoryId));
      const typeOk =
        filters.jobType.includes("all-types") || filters.jobType.includes(job.jobType);
      const locOk = !filters.location.length || filters.location.includes(job.location);
      const salary = annualSalaryMin(job);
      const salaryOk = !salary || (salary >= filters.salary.min && salary <= filters.salary.max);
      return catOk && typeOk && locOk && salaryOk && jobMatchesSearch(job, search);
    });
  }, [filters, jobs, search]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    if (sort === "salary") {
      list.sort((a, b) => annualSalaryMin(b) - annualSalaryMin(a));
    } else {
      list.sort((a, b) => postedHoursAgo(a) - postedHoursAgo(b));
    }
    return list;
  }, [filtered, sort]);

  useEffect(() => {
    setPage(1);
  }, [search.keyword, search.location, search.category, sort, filters]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageJobs = sorted.slice(start, start + PAGE_SIZE);

  function handleFilters(next) {
    setFilters(next);
    setPage(1);
  }

  return (
    <section className={styles.section} id="job-listings" aria-labelledby="listings-heading">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.header}>
            <div>
              <h2 id="listings-heading">{browseJobsContent.listings.heading}</h2>
              <p className={styles.sub}>
                {browseJobsContent.listings.subtext}
                <span>
                  {" "}
                  · Showing {sorted.length ? start + 1 : 0}–{start + pageJobs.length} of {sorted.length} active jobs
                </span>
              </p>
            </div>
            <div className={styles.controls}>
              <button type="button" className={styles.mobileFilters} onClick={() => setDrawerOpen(true)}>
                <SlidersHorizontal size={16} /> Filters
              </button>
              <label className={styles.sort}>
                <span className={styles.sortLabel}>Sort by</span>
                <span className={styles.selectWrap}>
                  <select value={sort} aria-label="Sort jobs" onChange={(e) => setSort(e.target.value)}>
                    {browseJobsContent.listings.sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} aria-hidden />
                </span>
              </label>
              <div className={styles.toggles} role="group" aria-label="Listing layout">
                <button
                  type="button"
                  className={layout === "list" ? styles.toggleActive : styles.toggle}
                  aria-pressed={layout === "list"}
                  onClick={() => setLayout("list")}
                >
                  <List size={16} /> List View
                </button>
                <button
                  type="button"
                  className={layout === "grid" ? styles.toggleActive : styles.toggle}
                  aria-pressed={layout === "grid"}
                  onClick={() => setLayout("grid")}
                >
                  <LayoutGrid size={16} /> Grid View
                </button>
              </div>
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.desktopFilters}>
              <JobFilters
                filters={filters}
                onChange={handleFilters}
                onReset={() => handleFilters(defaultFilters)}
                categoryOptions={categoryOptions}
                locationOptions={locationOptions}
              />
            </div>
            <div className={styles.main}>
              {loading ? <p>Loading jobs...</p> : null}
              {!loading && error ? <p>{error}</p> : null}
              {!loading && !error ? <JobList jobs={pageJobs} layout={layout} showSalary={filters.showSalary} /> : null}
              {!loading && !error ? (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} maxVisible={5} />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {drawerOpen ? (
        <div className={styles.drawer} role="dialog" aria-label="Filters">
          <div className={styles.drawerScrim} onClick={() => setDrawerOpen(false)} />
          <div className={styles.drawerPanel}>
            <button type="button" className={styles.drawerClose} aria-label="Close filters" onClick={() => setDrawerOpen(false)}>
              <X size={20} />
            </button>
            <JobFilters
              filters={filters}
              onChange={handleFilters}
              onReset={() => handleFilters(defaultFilters)}
              categoryOptions={categoryOptions}
              locationOptions={locationOptions}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
