// Canonical route map (Audit R1).
// All 7 Jooblie sites must use these exact paths so the shared
// @jooblie/ui and @jooblie/core route guards work everywhere.
// Do not invent per-site variants -- edit this file, not the routes below.
export const paths = {
  home: "/",
  browseJobs: "/browse-jobs",
  employers: "/employers",
  aboutUs: "/about-us",
  contactUs: "/contact-us",
  postAJob: "/post-a-job",
  signIn: "/sign-in",
  dashboard: "/dashboard", // job seeker (shared contract, not /seeker/dashboard)
  recruiter: "/recruiter",
  signUp:"/signup" // recruiter (shared contract, not /recruiter/dashboard)
};
