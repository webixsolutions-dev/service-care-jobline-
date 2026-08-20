import ContentPage from "../../components/ContentPage/ContentPage";
import { paths } from "../../data/navLinks";

export default function RecruiterHome() {
  return (
    <ContentPage
      kicker="Employer"
      title="Recruiter dashboard"
      intro="You are signed in as an employer. Post a role, review pricing, or contact our hiring team."
      links={[
        { label: "Post a Job", to: paths.postAJob, note: "create a new listing" },
        { label: "Pricing", to: paths.employerPricing, note: "compare posting plans" },
        { label: "Browse Resumes", to: paths.browseResumes, note: "reach qualified candidates" },
        { label: "Contact Sales", to: paths.contactSales, note: "get posting support" },
      ]}
      ctas={[
        { label: "Post a Job", to: paths.postAJob },
        { label: "View Pricing", to: paths.employerPricing },
      ]}
    />
  );
}
