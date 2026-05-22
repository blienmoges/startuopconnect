const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function request(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const { silent = false, silentStatuses = [], ...fetchOptions } = options;

  const headers = new Headers();
  const isFormData = typeof FormData !== "undefined" && fetchOptions.body instanceof FormData;
  
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  // If body is FormData, do not set Content-Type header. The browser will set it with the correct boundary.
  if (fetchOptions.body && !isFormData) {
    headers.set("Content-Type", "application/json");
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  // Allow custom headers to override
  if (fetchOptions.headers) {
    Object.keys(fetchOptions.headers).forEach((key) => {
      headers.set(key, fetchOptions.headers[key]);
    });
  }

  const config = {
    ...fetchOptions,
    headers,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const details = Array.isArray(data?.details)
        ? data.details
            .map((detail) => detail?.message || detail?.path?.join(".") || String(detail))
            .join(", ")
        : "";
      const errorMsg = details || data?.message || data?.error || response.statusText || "Something went wrong";
      const shouldLog = !silent && !silentStatuses.includes(response.status);
      if (shouldLog) {
        console.error(`API Error [${fetchOptions.method || "GET"} ${endpoint}]:`, data || response);
      }
      const error = new Error(errorMsg);
      error.status = response.status;
      error.data = data;
      error.logged = shouldLog;
      error.silent = !shouldLog;
      throw error;
    }

    return data;
  } catch (error) {
    if (!error.logged && !error.silent && !silent) {
      console.error(`Fetch Error [${fetchOptions.method || "GET"} ${endpoint}]:`, error.message);
    }
    throw error;
  }
}
