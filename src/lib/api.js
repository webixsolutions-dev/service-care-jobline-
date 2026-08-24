const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000/api").replace(/\/$/, "");
export const SITE_SLUG = import.meta.env.VITE_SITE_SLUG || "service-care";

export class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

export async function api(path, init = {}, token) {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      ...(init.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      "X-Site-Slug": SITE_SLUG,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers || {}),
    },
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const body = isJson ? await response.json().catch(() => null) : await response.text().catch(() => null);

  if (!response.ok) {
    const rawMessage = body?.message ?? body?.error ?? body;
    const message = Array.isArray(rawMessage)
      ? rawMessage.join(", ")
      : typeof rawMessage === "string" && rawMessage
        ? rawMessage
        : `Request failed (${response.status})`;
    throw new ApiError(message, response.status, body);
  }

  return body;
}

export const apiUrl = API_URL;
