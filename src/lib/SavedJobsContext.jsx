import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getSeekerDashboard, saveJob, unsaveJob } from "./jobs";
import { useAuth } from "./auth/AuthContext";

const SavedJobsContext = createContext(null);

export function SavedJobsProvider({ children }) {
  const { token, profile } = useAuth();
  const [savedIds, setSavedIds] = useState(new Set());
  useEffect(() => {
    let cancelled = false;
    if (!token || profile?.role !== "job_seeker") {
      queueMicrotask(() => { if (!cancelled) setSavedIds(new Set()); });
      return () => { cancelled = true; };
    }
    getSeekerDashboard(token)
      .then((data) => { if (!cancelled) setSavedIds(new Set((data?.savedJobIds || data?.savedJobs?.map((row) => row.job_id) || []).map(String))); })
      .catch(() => { if (!cancelled) setSavedIds(new Set()); });
    return () => { cancelled = true; };
  }, [token, profile?.role]);

  const toggleSaved = useCallback(async (jobId) => {
    if (!token || profile?.role !== "job_seeker") return false;
    const id = String(jobId);
    const wasSaved = savedIds.has(id);
    setSavedIds((current) => { const next = new Set(current); wasSaved ? next.delete(id) : next.add(id); return next; });
    try { await (wasSaved ? unsaveJob(id, token) : saveJob(id, token)); return !wasSaved; }
    catch (error) { setSavedIds((current) => { const next = new Set(current); wasSaved ? next.add(id) : next.delete(id); return next; }); throw error; }
  }, [token, profile?.role, savedIds]);

  const value = useMemo(() => ({ savedIds, toggleSaved }), [savedIds, toggleSaved]);
  return <SavedJobsContext.Provider value={value}>{children}</SavedJobsContext.Provider>;
}

export function useSavedJobs() {
  const value = useContext(SavedJobsContext);
  if (!value) throw new Error("useSavedJobs must be used inside SavedJobsProvider");
  return value;
}
