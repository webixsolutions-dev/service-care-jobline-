const configuredBase = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/+$/, "");

function withApiPrefix(value) {
  if (value.endsWith("/api/v1")) return value;
  if (value.endsWith("/api")) return `${value}/v1`;
  return `${value}/api/v1`;
}

export const apiUrl = withApiPrefix(configuredBase);
export const SITE_SLUG = import.meta.env.VITE_SITE_SLUG || "service-care";

export class ApiError extends Error {
  constructor(message, { status, code, requestId } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.requestId = requestId;
  }
}

export async function api(path, init = {}, token) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  const isFormData = init.body instanceof FormData;
  try {
    const response = await fetch(`${apiUrl}${path.startsWith("/") ? "" : "/"}${path}`, {
      ...init,
      signal: init.signal || controller.signal,
      headers: {
        Accept: "application/json",
        ...(!isFormData && init.body ? { "Content-Type": "application/json" } : {}),
        "X-Site-Slug": SITE_SLUG,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(init.headers || {}),
      },
    });
    const isJson = response.headers.get("content-type")?.includes("application/json");
    const payload = isJson ? await response.json().catch(() => null) : await response.text().catch(() => "");
    if (!response.ok) {
      const details = payload?.error || payload || {};
      throw new ApiError(details.message || (typeof payload === "string" && payload) || "The request could not be completed.", {
        status: response.status,
        code: details.code,
        requestId: details.requestId || response.headers.get("x-request-id"),
      });
    }
    return response.status === 204 ? null : payload;
  } catch (error) {
    if (error?.name === "AbortError") throw new ApiError("The server took too long to respond. Please try again.", { code: "REQUEST_TIMEOUT" });
    if (error instanceof ApiError) throw error;
    throw new ApiError("Unable to reach the server. Check your connection and try again.", { code: "NETWORK_ERROR" });
  } finally {
    window.clearTimeout(timeout);
  }
}
