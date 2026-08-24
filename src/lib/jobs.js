import { api } from "./api";
import { jobDetailsPath } from "../data/navLinks";

export const SERVICE_CARE_CATEGORY_IDS = [305, 306, 307, 308];

export const EMPLOYMENT_LABELS = {
  full_time: "Full-time",
  part_time: "Part-time",
  contract: "Contract",
  temporary: "Temporary",
  internship: "Internship",
  seasonal: "Seasonal",
};

export const EMPLOYMENT_VALUES = Object.entries(EMPLOYMENT_LABELS).map(([value, label]) => ({ value, label }));

const CATEGORY_ICON_KEYS = {
  305: "bell",
  306: "server",
  307: "housekeeping",
  308: "caregiver",
};

export function salaryLabel(job) {
  if (job.salary_min == null && job.salary_max == null) return "Salary not listed";
  const currency = job.salary_currency || "CAD";
  const period = job.salary_period ? ` / ${job.salary_period.replace("ly", "")}` : "";
  const fmt = (value) => Number(value).toLocaleString("en-CA", { maximumFractionDigits: 0 });
  if (job.salary_min != null && job.salary_max != null) {
    return `${currency} $${fmt(job.salary_min)} – $${fmt(job.salary_max)}${period}`;
  }
  const value = job.salary_min ?? job.salary_max;
  return `${currency} $${fmt(value)}${period}`;
}

export function relativePosted(dateValue) {
  if (!dateValue) return "Recently posted";
  const date = new Date(dateValue);
  const diffMs = Date.now() - date.getTime();
  if (!Number.isFinite(diffMs) || diffMs < 0) return "Recently posted";
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 60) return `Posted ${Math.max(minutes, 1)} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Posted ${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  return `Posted ${days} day${days === 1 ? "" : "s"} ago`;
}

export function formatCategoryName(category) {
  return category?.name || "Service & Hospitality";
}

export function normalizeJob(job, categories = []) {
  const category = categories.find((item) => Number(item.id) === Number(job.category_id));
  const location = job.is_remote
    ? [job.city, job.province].filter(Boolean).join(", ") || "Remote"
    : [job.city, job.province].filter(Boolean).join(", ") || "Canada";

  return {
    ...job,
    id: job.id,
    title: job.title,
    company: job.company?.name || "Employer",
    companyId: job.company_id,
    verified: job.company?.verification_status === "verified",
    location,
    jobType: EMPLOYMENT_LABELS[job.employment_type] || job.employment_type || "Job",
    category: formatCategoryName(category),
    categoryId: Number(job.category_id),
    shift: null,
    workMode: job.is_remote ? "Remote" : "On-site",
    salary: salaryLabel(job),
    posted: relativePosted(job.published_at || job.created_at),
    ctaLabel: "View Job",
    iconKey: CATEGORY_ICON_KEYS[Number(job.category_id)] || "bell",
    featured: true,
    description: job.description || "",
    href: jobDetailsPath(job.id),
  };
}

export async function getServiceCareCategories() {
  const rows = await api("/v1/taxonomy/categories?sector_id=3");
  return (rows || []).filter((row) => SERVICE_CARE_CATEGORY_IDS.includes(Number(row.id)));
}

export async function getPublicJobs(query = {}) {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.category_id) params.set("category_id", String(query.category_id));
  if (query.city) params.set("city", query.city);
  if (query.province) params.set("province", query.province);
  if (query.employment_type) params.set("employment_type", query.employment_type);
  if (typeof query.is_remote === "boolean") params.set("is_remote", String(query.is_remote));
  params.set("limit", String(query.limit || 100));
  return api(`/v1/jobs?${params.toString()}`);
}

export async function getPublicJob(id) {
  return api(`/v1/jobs/${encodeURIComponent(id)}`);
}

export async function recordJobView(id) {
  return api(`/v1/jobs/${encodeURIComponent(id)}/view`, { method: "POST", body: JSON.stringify({}) });
}

export async function applyToJob(id, token, coverLetter = "") {
  return api(`/v1/jobs/${encodeURIComponent(id)}/applications`, {
    method: "POST",
    body: JSON.stringify({ cover_letter: coverLetter || undefined }),
  }, token);
}


export async function getMyApplications(token) {
  return api("/v1/me/applications", {}, token);
}

export async function getMyCompanies(token) {
  return api("/v1/companies", {}, token);
}

export async function getEmployerJobs(token) {
  return api("/v1/employer/jobs", {}, token);
}

export async function getJobApplications(jobId, token) {
  return api(`/v1/employer/jobs/${encodeURIComponent(jobId)}/applications`, {}, token);
}

export async function getJobViews(jobId, token) {
  return api(`/v1/employer/jobs/${encodeURIComponent(jobId)}/views`, {}, token);
}

export async function createEmployerJob(payload, token) {
  return api("/v1/employer/jobs", {
    method: "POST",
    body: JSON.stringify(payload),
  }, token);
}
