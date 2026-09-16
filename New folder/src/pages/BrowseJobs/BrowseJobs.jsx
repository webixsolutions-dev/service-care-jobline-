import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import { browseJobsContent } from "../../data/browseJobsContent";

import JobSearchBar from "./sections/JobSearchBar";
import PopularSearches from "./sections/PopularSearches";
import JobListings from "./sections/JobListings";
import TrustedEmployers from "./sections/TrustedEmployers";
import JobAlertsBanner from "./sections/JobAlertsBanner";
import TrustBadges from "./sections/TrustBadges";

import styles from "./BrowseJobs.module.css";

export default function BrowseJobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    keyword: searchParams.get("keyword") || "",
    location: searchParams.get("location") || "",
    category: searchParams.get("category") || "",
  });

  const { hero } = browseJobsContent;

  /* =========================================
     SYNC URL FILTERS
  ========================================= */

  useEffect(() => {
    setFilters({
      keyword: searchParams.get("keyword") || "",
      location: searchParams.get("location") || "",
      category: searchParams.get("category") || "",
    });
  }, [searchParams]);

  /* =========================================
     HASH SCROLL
  ========================================= */

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener(
        "hashchange",
        scrollToHash
      );
    };
  }, [searchParams]);

  /* =========================================
     SEARCH
  ========================================= */

  function applySearch(next) {
    setFilters(next);

    const params = {};

    if (next.keyword) {
      params.keyword = next.keyword;
    }

    if (next.location) {
      params.location = next.location;
    }

    if (next.category) {
      params.category = next.category;
    }

    setSearchParams(params);

    document
      .getElementById("job-listings")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  /* =========================================
     POPULAR SEARCH
  ========================================= */

  function selectPopular(term) {
    applySearch({
      ...filters,
      keyword: term,
    });
  }

  return (
    <main className={styles.page}>
      {/* HERO */}
      <Hero
        headingParts={[
          {
            text: hero.line1,
            color: "white",
            block: true,
          },
          {
            text: hero.line2,
            color: "teal",
            block: true,
          },
          {
            text: hero.line3,
            color: "white",
            block: true,
            leaf: true,
          },
        ]}
        accentLine="gold"
        subtext={hero.description}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="contain"
      />

      {/* SEARCH BAR */}
      <JobSearchBar
        values={filters}
        onChange={setFilters}
        onSearch={applySearch}
      />

      {/* POPULAR SEARCHES */}
      <PopularSearches
        onSelect={selectPopular}
        activeKeyword={filters.keyword}
      />

      {/* JOB LISTINGS */}
      <JobListings search={filters} />

      {/* =====================================
          TRUSTED EMPLOYERS
          White logo strip reference
      ====================================== */}
      <TrustedEmployers />

      {/* JOB ALERT */}
      <JobAlertsBanner />

      {/* TRUST BADGES */}
      <TrustBadges />
    </main>
  );
}