import React, { useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import JobPostingForm from "../PostAJob/sections/JobPostingForm";
import { useEmployerData } from "../../context/EmployerDataContext";

export default function PostJobDashboardPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editId = searchParams.get("edit");

  const { getPostingById, createJobPosting, updateJobPosting } = useEmployerData();

  const editingPosting = useMemo(() => {
    if (!editId) return null;
    return getPostingById(editId);
  }, [editId, getPostingById]);

  function handleSubmit(formData, isDraft) {
    if (editingPosting) {
      updateJobPosting(editingPosting.id, formData, isDraft);
    } else {
      createJobPosting(formData, isDraft);
    }
    navigate("/employer-dashboard/job-postings");
  }

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title={editingPosting ? "Edit Job Posting" : "Post a New Job"}
        subtitle={
          editingPosting
            ? `Update details for "${editingPosting.title}"`
            : "Fill out the job details to publish your posting to Canadian job seekers."
        }
      />

      <JobPostingForm
        initialData={editingPosting}
        onSubmitAction={handleSubmit}
        customHeading={editingPosting ? "Edit Position Details" : "Job Details"}
        customSubtext={
          editingPosting
            ? "Make changes below and click publish to update your active listing."
            : "Enter key details about your open role, requirements, location, and compensation."
        }
        customSubmitLabel={editingPosting ? "Update & Publish Job" : "Publish Job Opening"}
        showSaveDraft={true}
      />
    </div>
  );
}
