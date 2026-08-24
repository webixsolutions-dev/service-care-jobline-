import { useEffect, useState } from "react";
import ContentPage from "../../components/ContentPage/ContentPage";
import { paths } from "../../data/navLinks";
import { useAuth } from "../../lib/auth/AuthContext";
import { getMyApplications } from "../../lib/jobs";

export default function DashboardHome() {
  const { token, profile, loading: authLoading } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    if (authLoading) return undefined;
    if (!token || profile?.role !== "job_seeker") {
      setLoading(false);
      return undefined;
    }
    getMyApplications(token)
      .then((rows) => { if (!cancelled) setApplications(Array.isArray(rows) ? rows : []); })
      .catch((err) => { if (!cancelled) setError(err?.message || "Could not load applications."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [authLoading, token, profile?.role]);

  if (authLoading || loading) {
    return <ContentPage kicker="Job Seeker" title="Your dashboard" intro="Loading your applications..." />;
  }

  if (!token || profile?.role !== "job_seeker") {
    return (
      <ContentPage
        kicker="Job Seeker"
        title="Your dashboard"
        intro="Sign in with a Job Seeker account to view and manage your applications."
        ctas={[{ label: "Sign In", to: paths.signIn }, { label: "Create Account", to: paths.signUp }]}
      />
    );
  }

  const statusCounts = applications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <ContentPage
      kicker="Job Seeker"
      title="Your dashboard"
      intro={error || `You have ${applications.length} application${applications.length === 1 ? "" : "s"} in your account.`}
      sections={applications.length ? [{
        heading: "Application status",
        paragraphs: Object.entries(statusCounts).map(([status, count]) => `${String(status).replaceAll("_", " ")}: ${count}`),
      }] : []}
      links={[
        { label: "Browse Jobs", to: paths.browseJobs, note: "view current openings" },
        { label: "Applications", to: "/dashboard", note: `${applications.length} submitted application${applications.length === 1 ? "" : "s"}` },
        { label: "Career Resources", to: paths.careerResources, note: "tips for your next role" },
        { label: "Contact Us", to: paths.contactUs, note: "ask our team for help" },
      ]}
      ctas={[{ label: "Browse Jobs", to: paths.browseJobs }, { label: "Get Job Alerts", to: paths.jobAlerts }]}
    />
  );
}
