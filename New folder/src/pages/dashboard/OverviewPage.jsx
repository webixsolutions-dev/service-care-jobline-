import React from "react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import StatCardRow from "../../components/dashboard/StatCardRow";
import ProfileCompletenessBar from "../../components/dashboard/ProfileCompletenessBar";
import RecommendedJobsSection from "../../components/dashboard/RecommendedJobsSection";

export default function OverviewPage() {
  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Overview"
        subtitle="Your job search at a glance."
      />
      <StatCardRow />
      <ProfileCompletenessBar showCta={true} />
      <RecommendedJobsSection />
    </div>
  );
}
