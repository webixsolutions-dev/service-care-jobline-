import { useMemo, useState } from "react";
import JobCard from "../../../components/JobCard/JobCard";
import Pill from "../../../components/Pill/Pill";
import Pagination from "../../../components/Pagination/Pagination";
import { getIcon } from "../../../components/icons";
import { browseJobsContent } from "../../../data/browseJobsContent";
import useServiceCareJobs from "../../../hooks/useServiceCareJobs";
import styles from "./QuickFilterJobs.module.css";

const PAGE_SIZE = 4;

export default function QuickFilterJobs() {
  const [active, setActive] = useState(null);
  const [page, setPage] = useState(1);
  const { jobs: allJobs, loading, error } = useServiceCareJobs({ limit: 100 });

  const jobs = useMemo(() => {
    if (!active) return allJobs;
    const map = {
      "full-time": (j) => j.jobType === "Full-time",
      "part-time": (j) => j.jobType === "Part-time",
      "on-site": (j) => j.workMode === "On-site",
      contract: (j) => j.jobType === "Contract",
      "food-beverage": (j) => Number(j.categoryId) === 306,
      hospitality: (j) => Number(j.categoryId) === 305,
    };
    return allJobs.filter(map[active] || (() => true));
  }, [active, allJobs]);

  const totalPages = Math.max(1, Math.ceil(jobs.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageJobs = jobs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleQuick(id) {
    const next = active === id ? null : id;
    setActive(next);
    setPage(1);
  }

  return (
    <section className={styles.section} aria-labelledby="quick-filters-heading">
      <div className="container">
        <div className={styles.filters}>
          <h2 id="quick-filters-heading">Quick Filters:</h2>
          <div className={styles.pills}>
            {browseJobsContent.quickFilters.map((item) => (
              <Pill
                key={item.id}
                tone="outlineLight"
                icon={getIcon(item.icon)}
                active={active === item.id}
                onClick={() => handleQuick(item.id)}
              >
                {item.label}
              </Pill>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {loading ? <p>Loading jobs...</p> : null}
          {!loading && error ? <p>{error}</p> : null}
          {!loading && !error && !pageJobs.length ? <p>No active jobs match this filter.</p> : null}
          {pageJobs.map((job) => (
            <JobCard key={job.id} job={job} variant="featured" layout="grid" />
          ))}
        </div>

        {!loading && !error && jobs.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
            maxVisible={4}
            showNextLabel
            theme="dark"
          />
        ) : null}
      </div>
    </section>
  );
}
