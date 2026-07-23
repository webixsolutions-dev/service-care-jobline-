import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import BrowseJobs from "../pages/BrowseJobs";
import Employers from "../pages/Employers";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PostAJob from "../pages/PostAJob";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import DashboardHome from "../pages/dashboard/DashboardHome";
import RecruiterHome from "../pages/recruiter/RecruiterHome";
import { paths } from "./paths";
import Signup from "../pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.browseJobs} element={<BrowseJobs />} />
        <Route path={paths.employers} element={<Employers />} />
        <Route path={paths.aboutUs} element={<AboutUs />} />
        <Route path={paths.contactUs} element={<ContactUs />} />
        <Route path={paths.postAJob} element={<PostAJob />} />
        <Route path={paths.signIn} element={<SignIn />} />
        <Route path={paths.signUp} element={<Signup />} />

        <Route path={paths.dashboard} element={<DashboardHome />} />
        <Route path={paths.recruiter} element={<RecruiterHome />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
