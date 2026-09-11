import { useEffect, useMemo, useState } from "react";
import ContentPage from "../../components/ContentPage/ContentPage";
import { paths } from "../../data/navLinks";
import { useAuth } from "../../lib/auth/AuthContext";
import { getRecruiterDashboard } from "../../lib/jobs";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function RecruiterHome() {
  const { token, profile, loading: authLoading } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState({ applications: 0, views: 0, byJob: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    if (authLoading) return undefined;
    if (!token || profile?.role !== "recruiter") {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    getRecruiterDashboard(token)
      .then((data) => {
        if (cancelled) return;
        const list = Array.isArray(data?.jobs) ? data.jobs : [];
        setJobs(list);
        setStats({
          applications: Number(data?.metrics?.applications || 0),
          views: Number(data?.metrics?.views || 0),
          byJob: Object.fromEntries(list.map((job) => [job.id, { applications: Number(job.applications_count || 0), views: Number(job.views_count || 0) }])),
        });
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Could not load employer dashboard.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [authLoading, token, profile?.role]);

  const active = useMemo(() => jobs.filter((job) => job.status === "active").length, [jobs]);
  const pending = useMemo(() => jobs.filter((job) => job.status === "pending_review").length, [jobs]);
  const recentJobLines = jobs.slice(0, 8).map((job) => {
    const row = stats.byJob[job.id] || { applications: 0, views: 0 };
    return `${job.title} — ${String(job.status || "").replaceAll("_", " ")} — ${row.applications} application${row.applications === 1 ? "" : "s"} — ${row.views} view${row.views === 1 ? "" : "s"}`;
  });

  if (authLoading || loading) {
    return <LoadingSpinner label="Loading recruiter dashboard" size="lg" full />;
  }

  if (!token || profile?.role !== "recruiter") {
    return (
      <ContentPage
        kicker="Employer"
        title="Recruiter dashboard"
        intro="Sign in with an Employer account to manage jobs and applications."
        ctas={[{ label: "Employer Sign In", to: paths.signIn }, { label: "Create Account", to: paths.signUp }]}
      />
    );
  }

  return (
    <ContentPage
      kicker="Employer"
      title="Recruiter dashboard"
      intro={error || `You have ${jobs.length} job${jobs.length === 1 ? "" : "s"}, ${stats.applications} application${stats.applications === 1 ? "" : "s"}, and ${stats.views} recorded job view${stats.views === 1 ? "" : "s"}.`}
      sections={recentJobLines.length ? [{ heading: "Recent jobs", paragraphs: recentJobLines }] : []}
      links={[
        { label: "My Jobs", to: "/recruiter", note: `${jobs.length} total · ${active} active · ${pending} pending review` },
        { label: "Applications", to: "/recruiter", note: `${stats.applications} total responses across your jobs` },
        { label: "Job Views", to: "/recruiter", note: `${stats.views} recorded views across your jobs` },
        { label: "Post a Job", to: paths.postAJob, note: "create a new listing" },
      ]}
      ctas={[{ label: "Post a Job", to: paths.postAJob }, { label: "Browse Jobs", to: paths.browseJobs }]}
    />
  );
}
