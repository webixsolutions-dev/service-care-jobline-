import { jobDetailsPath } from "./navLinks";

export function jobHref(job) {
  return jobDetailsPath(job.id);
}

export function annualSalaryMin(jobOrSalary = "") {
  if (jobOrSalary && typeof jobOrSalary === "object") {
    const value = Number(jobOrSalary.salary_min ?? jobOrSalary.salary_max ?? 0);
    if (!value) return 0;
    switch (jobOrSalary.salary_period) {
      case "hourly": return Math.round(value * 2080);
      case "weekly": return Math.round(value * 52);
      case "monthly": return Math.round(value * 12);
      case "yearly": return Math.round(value);
      default: return Math.round(value);
    }
  }

  const salary = String(jobOrSalary || "");
  const numbers = [...salary.matchAll(/[\d,.]+/g)]
    .map((m) => Number(m[0].replace(/,/g, "")))
    .filter(Number.isFinite);
  if (!numbers.length) return 0;
  const min = numbers[0];
  if (/hr|hour/i.test(salary)) return Math.round(min * 2080);
  if (/week/i.test(salary)) return Math.round(min * 52);
  if (/month/i.test(salary)) return Math.round(min * 12);
  return min;
}

export function postedHoursAgo(jobOrPosted = "") {
  if (jobOrPosted && typeof jobOrPosted === "object") {
    const value = jobOrPosted.published_at || jobOrPosted.created_at;
    if (!value) return Number.MAX_SAFE_INTEGER;
    return Math.max(0, (Date.now() - new Date(value).getTime()) / 3600000);
  }

  const posted = String(jobOrPosted || "");
  const hours = posted.match(/(\d+)\s+hours?/i);
  if (hours) return Number(hours[1]);
  const days = posted.match(/(\d+)\s+days?/i);
  if (days) return Number(days[1]) * 24;
  const minutes = posted.match(/(\d+)\s+minutes?/i);
  if (minutes) return Number(minutes[1]) / 60;
  return Number.MAX_SAFE_INTEGER;
}

export function jobMatchesSearch(job, search = {}) {
  const keyword = (search.keyword || "").trim().toLowerCase();
  const location = (search.location || "").trim().toLowerCase();
  const category = (search.category || "").trim().toLowerCase();

  if (keyword) {
    const haystack = `${job.title || ""} ${job.company || ""} ${job.description || ""} ${job.category || ""}`.toLowerCase();
    if (!haystack.includes(keyword)) return false;
  }
  if (location && !(job.location || "").toLowerCase().includes(location)) return false;
  if (category) {
    const categoryHaystack = `${job.category || ""} ${job.categoryId || ""} ${job.category_slug || ""}`.toLowerCase();
    if (!categoryHaystack.includes(category.replace(/-/g, " ")) && !categoryHaystack.includes(category)) return false;
  }
  return true;
}
