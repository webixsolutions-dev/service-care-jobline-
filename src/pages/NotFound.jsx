import ContentPage from "../components/ContentPage/ContentPage";
import { paths } from "../data/navLinks";

export default function NotFound() {
  return (
    <ContentPage
      kicker="404"
      title="Page not found"
      intro="That link does not match a page on ServiceCare Jobline. Use the menu, footer, or one of the buttons below to keep going."
      links={[
        { label: "Home", to: paths.home, note: "return to the homepage" },
        { label: "Browse Jobs", to: paths.browseJobs, note: "search current openings" },
        { label: "Contact Us", to: paths.contactUs, note: "ask our team for help" },
      ]}
      ctas={[
        { label: "Back to Home", to: paths.home },
        { label: "Browse Jobs", to: paths.browseJobs },
      ]}
    />
  );
}
