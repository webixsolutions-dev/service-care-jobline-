import { useMemo, useState } from "react";
import JobCard from "../../../components/JobCard/JobCard";
import Pill from "../../../components/Pill/Pill";
import Pagination from "../../../components/Pagination/Pagination";
import { getIcon } from "../../../components/icons";
import { featuredJobs } from "../../../data/jobsData";
import { browseJobsContent } from "../../../data/browseJobsContent";
import styles from "./QuickFilterJobs.module.css";

const PAGE_SIZE = 4;

export default function QuickFilterJobs() {
  const [active, setActive] = useState(null);
  const [page, setPage] = useState(1);

  const jobs = useMemo(() => {
    if (!active) return featuredJobs;
    const map = {
      "full-time": (j) => j.jobType === "Full-time",
      "part-time": (j) => j.jobType === "Part-time",
      "on-site": (j) => j.workMode === "On-site",
      contract: (j) => j.jobType === "Contract",
      healthcare: (j) => j.category === "Healthcare",
      hospitality: (j) => j.category === "Hospitality",
    };
    return featuredJobs.filter(map[active] || (() => true));
  }, [active]);

  const count = Math.max(1, Math.ceil(jobs.length / PAGE_SIZE));
  const totalPages = Math.max(4, count);
  const safePage = ((page - 1) % count) + 1;
  const pageJobs = jobs.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

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
          {pageJobs.map((job) => (
            <JobCard key={job.id} job={job} variant="featured" layout="grid" />
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          maxVisible={4}
          showNextLabel
          theme="dark"
        />
      </div>
    </section>
  );
}
