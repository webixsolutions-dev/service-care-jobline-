import { useEffect, useMemo, useState } from "react";
import { getPublicJobs, getServiceCareCategories, normalizeJob } from "../lib/jobs";

export default function useServiceCareJobs(query = {}) {
  const [rawJobs, setRawJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const queryKey = JSON.stringify(query || {});

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");

    Promise.all([getPublicJobs(query), getServiceCareCategories()])
      .then(([jobs, cats]) => {
        if (cancelled) return;
        setRawJobs(Array.isArray(jobs) ? jobs : []);
        setCategories(Array.isArray(cats) ? cats : []);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || "Could not load jobs.");
        setRawJobs([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [queryKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const jobs = useMemo(() => rawJobs.map((job) => normalizeJob(job, categories)), [rawJobs, categories]);

  return { jobs, rawJobs, categories, loading, error };
}
