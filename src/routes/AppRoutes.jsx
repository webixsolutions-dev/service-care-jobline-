import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import BrowseJobs from "../pages/BrowseJobs/BrowseJobs";
import Employers from "../pages/Employers";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs";
import PostAJob from "../pages/PostAJob";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import DashboardHome from "../pages/dashboard/DashboardHome";
import RecruiterHome from "../pages/recruiter/RecruiterHome";
import Signup from "../pages/SignUp";
import JobDetails from "../pages/JobDetails/JobDetails";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import { paths } from "../data/navLinks";

export default function AppRoutes() {
  return (
    <Routes>
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
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/recruiter" element={<RecruiterHome />} />
        <Route path={paths.browseResumes} element={<ComingSoon title="Browse Resumes" />} />
        <Route path={paths.employerPricing} element={<ComingSoon title="Employer Pricing" />} />
        <Route path={paths.resources} element={<ComingSoon title="Resources" />} />
        <Route path={paths.createResume} element={<ComingSoon title="Create Resume" />} />
        <Route path={paths.careerAdvice} element={<ComingSoon title="Career Advice" />} />
        <Route path="/job-alerts" element={<Navigate to={`${paths.browseJobs}#job-alerts`} replace />} />
        <Route path={paths.helpCenter} element={<ComingSoon title="Help Center" />} />
        <Route path={paths.privacy} element={<ComingSoon title="Privacy Policy" />} />
        <Route path={paths.terms} element={<ComingSoon title="Terms of Use" />} />
        <Route path={paths.accessibility} element={<ComingSoon title="Accessibility" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
