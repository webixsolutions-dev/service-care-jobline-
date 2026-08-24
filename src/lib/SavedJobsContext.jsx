import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "./api";
import { useAuth } from "./auth/AuthContext";

const SavedJobsContext = createContext(null);

export function SavedJobsProvider({ children }) {
  const { token, profile } = useAuth();
  const [savedIds, setSavedIds] = useState(() => new Set());

  useEffect(() => {
    let cancelled = false;
    if (!token || profile?.role !== "job_seeker") {
      setSavedIds(new Set());
      return undefined;
    }
    api("/v1/me/saved-jobs", {}, token)
      .then((rows) => {
        if (!cancelled) setSavedIds(new Set((rows || []).map((row) => String(row.job_id))));
      })
      .catch(() => {
        if (!cancelled) setSavedIds(new Set());
      });
    return () => { cancelled = true; };
  }, [token, profile?.role]);

  const toggleSaved = useCallback(async (jobId) => {
    if (!token || profile?.role !== "job_seeker") return false;
    const id = String(jobId);
    const wasSaved = savedIds.has(id);
    setSavedIds((current) => {
      const next = new Set(current);
      if (wasSaved) next.delete(id);
      else next.add(id);
      return next;
    });
    try {
      await api(`/v1/me/saved-jobs/${encodeURIComponent(id)}`, {
        method: wasSaved ? "DELETE" : "POST",
        ...(wasSaved ? {} : { body: JSON.stringify({}) }),
      }, token);
      return !wasSaved;
    } catch (error) {
      setSavedIds((current) => {
        const next = new Set(current);
        if (wasSaved) next.add(id);
        else next.delete(id);
        return next;
      });
      throw error;
    }
  }, [token, profile?.role, savedIds]);

  const value = useMemo(() => ({ savedIds, toggleSaved }), [savedIds, toggleSaved]);
  return <SavedJobsContext.Provider value={value}>{children}</SavedJobsContext.Provider>;
}

export function useSavedJobs() {
  const value = useContext(SavedJobsContext);
  if (!value) throw new Error("useSavedJobs must be used inside SavedJobsProvider");
  return value;
}
