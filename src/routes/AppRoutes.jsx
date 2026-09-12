import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import BrowseJobs from "../pages/BrowseJobs/BrowseJobs";
import Employers from "../pages/Employers";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs";
import PostAJob from "../pages/PostAJob";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import Signup from "../pages/SignUp";
import JobDetails from "../pages/JobDetails/JobDetails";
import InfoPage from "../pages/InfoPage";

// Shared Dashboard Shell & Guard
import RequireAuth from "./RequireAuth";
import DashboardLayout from "../components/dashboard/DashboardLayout";

// Job Seeker Dashboard Pages
import OverviewPage from "../pages/dashboard/OverviewPage";
import FindJobsPage from "../pages/dashboard/FindJobsPage";
import MyApplicationsPage from "../pages/dashboard/MyApplicationsPage";
import SavedJobsPage from "../pages/dashboard/SavedJobsPage";
import MyProfilePage from "../pages/dashboard/MyProfilePage";
import SettingsPage from "../pages/dashboard/SettingsPage";

// Employer / Recruiter Dashboard Pages
import EmployerOverviewPage from "../pages/employerDashboard/EmployerOverviewPage";
import JobPostingsPage from "../pages/employerDashboard/JobPostingsPage";
import PostJobDashboardPage from "../pages/employerDashboard/PostJobDashboardPage";
import JobApplicantsPage from "../pages/employerDashboard/JobApplicantsPage";
import AllApplicantsPage from "../pages/employerDashboard/AllApplicantsPage";
import CompanyProfilePage from "../pages/employerDashboard/CompanyProfilePage";
import EmployerSettingsPage from "../pages/employerDashboard/EmployerSettingsPage";

import { infoPages } from "../data/infoPages";
import { paths } from "../data/navLinks";
import PageTransition from "../components/PageTransition/PageTransition";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <Routes>
      {/* Public Marketing Site Routes (with public Navbar & Footer) */}
      <Route element={<Layout />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.browseJobs} element={<BrowseJobs />} />
        <Route path={`${paths.jobs}/:jobId`} element={<JobDetails />} />
        <Route path={paths.employers} element={<Employers />} />
        <Route path={paths.aboutUs} element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path={paths.contactUs} element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path={paths.postAJob} element={<PostAJob />} />
        <Route path={paths.signIn} element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recruiter" element={<Navigate to="/employer-dashboard/overview" replace />} />
        <Route path={paths.browseResumes} element={<InfoPage content={infoPages.browseResumes} />} />
        <Route path="/employer-pricing" element={<Navigate to={paths.employerPricing} replace />} />
        <Route path={paths.resources} element={<InfoPage content={infoPages.employerResources} />} />
        <Route path={paths.createResume} element={<InfoPage content={infoPages.createResume} />} />
        <Route path={paths.careerAdvice} element={<InfoPage content={infoPages.careerResources} />} />
        <Route path="/job-alerts" element={<Navigate to={paths.jobAlerts} replace />} />
        <Route path={paths.helpCenter} element={<InfoPage content={infoPages.helpCenter} />} />
        <Route path={paths.privacy} element={<InfoPage content={infoPages.privacy} />} />
        <Route path={paths.terms} element={<InfoPage content={infoPages.terms} />} />
        <Route path={paths.accessibility} element={<InfoPage content={infoPages.accessibility} />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Authenticated Job Seeker Dashboard Routes */}
      <Route element={<RequireAuth allowedRole="seeker" />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Navigate to="/dashboard/overview" replace />} />
          <Route path="/dashboard/overview" element={<OverviewPage />} />
          <Route path="/dashboard/find-jobs" element={<FindJobsPage />} />
          <Route path="/dashboard/applications" element={<MyApplicationsPage />} />
          <Route path="/dashboard/saved-jobs" element={<SavedJobsPage />} />
          <Route path="/dashboard/profile" element={<MyProfilePage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Authenticated Employer / Recruiter Dashboard Routes */}
      <Route element={<RequireAuth allowedRole="employer" />}>
        <Route element={<DashboardLayout />}>
          <Route path="/employer-dashboard" element={<Navigate to="/employer-dashboard/overview" replace />} />
          <Route path="/employer-dashboard/overview" element={<EmployerOverviewPage />} />
          <Route path="/employer-dashboard/job-postings" element={<JobPostingsPage />} />
          <Route path="/employer-dashboard/post-a-job" element={<PostJobDashboardPage />} />
          <Route path="/employer-dashboard/job-postings/:jobId/applicants" element={<JobApplicantsPage />} />
          <Route path="/employer-dashboard/applicants" element={<AllApplicantsPage />} />
          <Route path="/employer-dashboard/company-profile" element={<CompanyProfilePage />} />
          <Route path="/employer-dashboard/settings" element={<EmployerSettingsPage />} />
        </Route>
      </Route>
    </Routes>
    </PageTransition>
    </AnimatePresence>
  );
}
