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
import DashboardHome from "../pages/dashboard/DashboardHome";
import RecruiterHome from "../pages/recruiter/RecruiterHome";
import Signup from "../pages/SignUp";
import JobDetails from "../pages/JobDetails/JobDetails";
import InfoPage from "../pages/InfoPage";
import { infoPages } from "../data/infoPages";
import { paths } from "../data/navLinks";
import PageTransition from "../components/PageTransition/PageTransition";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
    <PageTransition key={location.pathname}>
    <Routes location={location}>
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
        <Route path="/dashboard" element={<ProtectedRoute role="job_seeker"><DashboardHome /></ProtectedRoute>} />
        <Route path="/recruiter" element={<ProtectedRoute role="recruiter"><RecruiterHome /></ProtectedRoute>} />
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
    </Routes>
    </PageTransition>
    </AnimatePresence>
  );
}
