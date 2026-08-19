/** Central route paths used by Navbar, Footer, and page CTAs. */
export const paths = {
  home: "/",
  browseJobs: "/browse-jobs",
  employers: "/employers",
  aboutUs: "/about",
  contactUs: "/contact",
  postAJob: "/post-a-job",
  signIn: "/sign-in",
  signUp: "/signup",
  createAccount: "/signup",
  browseResumes: "/browse-resumes",
  employerPricing: "/employer-pricing",
  resources: "/resources",
  createResume: "/create-resume",
  careerAdvice: "/career-advice",
  careerResources: "/career-advice",
  jobAlerts: "/browse-jobs#job-alerts",
  helpCenter: "/help-center",
  privacy: "/privacy-policy",
  terms: "/terms-of-use",
  accessibility: "/accessibility",
  whyHireWithUs: "/employers",
  employerResources: "/resources",
  contactSales: "/contact",
  jobs: "/jobs",
};

/** Job detail URL for a listing id. */
export const jobDetailsPath = (id) => `/jobs/${id}`;

export const navLinks = [
  { label: "Home", to: paths.home, end: true },
  { label: "Browse Jobs", to: paths.browseJobs },
  { label: "Employers", to: paths.employers },
  { label: "About Us", to: paths.aboutUs },
  { label: "Contact Us", to: paths.contactUs },
  { label: "Post a Job", to: paths.postAJob },
];
