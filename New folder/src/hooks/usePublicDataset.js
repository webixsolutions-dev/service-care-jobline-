import { useEffect, useState } from "react";
import { getPublicDataset } from "../lib/jobs";

let cache = null;
let request = null;

export default function usePublicDataset() {
  const [dataset, setDataset] = useState(cache);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    if (!request) request = getPublicDataset().then((data) => { cache = data; return data; }).finally(() => { request = null; });
    request.then((data) => { if (active) setDataset(data); }).catch((err) => { if (active) setError(err?.message || "Could not load portal data."); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  return { dataset, loading, error };
}
