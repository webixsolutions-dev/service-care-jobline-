import ContentPage from "../../components/ContentPage/ContentPage";
import { paths } from "../../data/navLinks";

export default function DashboardHome() {
  return (
    <ContentPage
      kicker="Job Seeker"
      title="Your dashboard"
      intro="You are signed in as a job seeker. Continue your search, set up alerts, or update your account from here."
      links={[
        { label: "Browse Jobs", to: paths.browseJobs, note: "view current openings" },
        { label: "Job Alerts", to: paths.jobAlerts, note: "get emailed matches" },
        { label: "Career Resources", to: paths.careerResources, note: "tips for your next role" },
        { label: "Contact Us", to: paths.contactUs, note: "ask our team for help" },
      ]}
      ctas={[
        { label: "Browse Jobs", to: paths.browseJobs },
        { label: "Get Job Alerts", to: paths.jobAlerts },
      ]}
    />
  );
}
