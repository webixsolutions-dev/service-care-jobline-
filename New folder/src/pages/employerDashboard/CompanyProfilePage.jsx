import React from "react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import CompanyProfileForm from "../../components/employerDashboard/CompanyProfileForm";

export default function CompanyProfilePage() {
  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Company Profile"
        subtitle="Manage your organization details, branding logo, and employer presentation."
      />
      <CompanyProfileForm />
    </div>
  );
}
