import React from "react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import CompanyProfileForm from "../../components/employerDashboard/CompanyProfileForm";

export default function CompanyProfilePage() {
  return (
    <div>
      <DashboardTopBanner
        eyebrow="Service Care Jobline Dashboard"
        title="Company Profile"
        subtitle="Review the company securely linked to your recruiter account. Company identity is controlled by the shared backend."
      />
      <CompanyProfileForm />
    </div>
  );
}
