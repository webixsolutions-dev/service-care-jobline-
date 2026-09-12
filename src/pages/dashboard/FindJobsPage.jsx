import React, { useState } from "react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import JobSearchBar from "../BrowseJobs/sections/JobSearchBar";
import JobListings from "../BrowseJobs/sections/JobListings";

export default function FindJobsPage() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  function handleSearch(nextFilters) {
    setFilters(nextFilters);
  }

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Find Jobs"
        subtitle="Search and apply to verified healthcare, hospitality, and service roles across Canada."
      />
      <div style={{ marginBottom: "24px" }}>
        <JobSearchBar values={filters} onChange={setFilters} onSearch={handleSearch} isDashboard />
      </div>
      <JobListings search={filters} isDashboard />
    </div>
  );
}
