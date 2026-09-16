import { api } from "./api";
import { jobDetailsPath } from "../data/navLinks";

export const EMPLOYMENT_LABELS = { full_time: "Full-time", part_time: "Part-time", contract: "Contract", temporary: "Temporary", internship: "Internship", seasonal: "Seasonal" };
export const EMPLOYMENT_VALUES = Object.entries(EMPLOYMENT_LABELS).map(([value, label]) => ({ value, label }));

function categoryIconKey(category) {
  const value = `${category?.slug || ""} ${category?.name || ""}`.toLowerCase();
  if (value.includes("food") || value.includes("restaurant")) return "server";
  if (value.includes("house") || value.includes("facilit")) return "housekeeping";
  if (value.includes("care") || value.includes("health")) return "caregiver";
  return "bell";
}

export function salaryLabel(job) {
  if (job.salary_min == null && job.salary_max == null) return "Salary not listed";
  const currency = job.salary_currency || "CAD";
  const period = job.salary_period ? ` / ${job.salary_period.replace("ly", "")}` : "";
  const fmt = (value) => Number(value).toLocaleString("en-CA", { maximumFractionDigits: 0 });
  if (job.salary_min != null && job.salary_max != null) return `${currency} $${fmt(job.salary_min)} – $${fmt(job.salary_max)}${period}`;
  return `${currency} $${fmt(job.salary_min ?? job.salary_max)}${period}`;
}

export function relativePosted(dateValue) {
  if (!dateValue) return "Recently posted";
  const diffMs = Date.now() - new Date(dateValue).getTime();
  if (!Number.isFinite(diffMs) || diffMs < 0) return "Recently posted";
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 60) return `Posted ${Math.max(minutes, 1)} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Posted ${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  return `Posted ${days} day${days === 1 ? "" : "s"} ago`;
}

export function normalizeJob(job, categories = []) {
  const category = job.categories || categories.find((item) => Number(item.id) === Number(job.category_id));
  const company = job.companies || job.company || null;
  const location = job.is_remote ? "Remote, Canada" : [job.city, job.province].filter(Boolean).join(", ") || "Canada";
  return { ...job, id: job.id, title: job.title || "Untitled job", company: company?.name || "Employer", companyId: job.company_id, verified: company?.verification_status === "verified", location, jobType: EMPLOYMENT_LABELS[job.employment_type] || job.employment_type || "Job", category: category?.name || "Service & Care", categoryId: Number(job.category_id), category_slug: category?.slug || "", shift: null, workMode: job.workplace_type === "hybrid" ? "Hybrid" : job.is_remote ? "Remote" : "On-site", salary: salaryLabel(job), posted: relativePosted(job.published_at || job.created_at), ctaLabel: "View Job", iconKey: categoryIconKey(category), featured: true, description: job.description || "", href: jobDetailsPath(job.id) };
}

export async function getPublicDataset() { return api("/public/dataset"); }
export async function getServiceCareCategories() { const data = await api("/public/categories"); return data?.items || []; }
export async function getPublicJobs(query = {}) {
  const params = new URLSearchParams({ limit: String(query.limit || 60) });
  if (query.q) params.set("q", query.q);
  if (query.location) params.set("location", query.location);
  if (query.type) params.set("type", query.type);
  return api(`/public/jobs?${params}`);
}
export async function getPublicJob(id) { const data = await api(`/public/jobs/${encodeURIComponent(id)}`); return data?.job || null; }
export async function applyToJob(id, token, coverLetter = "") { return api(`/job-seeker/jobs/${encodeURIComponent(id)}/apply`, { method: "POST", body: JSON.stringify({ cover_letter: coverLetter || undefined }) }, token); }
export async function getSeekerDashboard(token) { return api("/job-seeker/dashboard", {}, token); }
export async function saveJob(id, token) { return api(`/job-seeker/jobs/${encodeURIComponent(id)}/save`, { method: "POST", body: JSON.stringify({}) }, token); }
export async function unsaveJob(id, token) { return api(`/job-seeker/jobs/${encodeURIComponent(id)}/save`, { method: "DELETE" }, token); }
export async function getRecruiterDashboard(token) { return api("/recruiter/dashboard", {}, token); }
export async function getMyCompanies(token) { const data = await api("/recruiter/companies", {}, token); return data?.items || data?.companies || (Array.isArray(data) ? data : []); }
export async function createEmployerJob(payload, token) { const data = await api("/recruiter/jobs", { method: "POST", body: JSON.stringify(payload) }, token); return data?.job || data; }
