import { useEffect, useState } from "react";
import { getServiceCareCategories } from "../lib/jobs";

export default function useServiceCareCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    getServiceCareCategories()
      .then((rows) => {
        if (!cancelled) setCategories(Array.isArray(rows) ? rows : []);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Could not load categories.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return { categories, loading, error };
}
