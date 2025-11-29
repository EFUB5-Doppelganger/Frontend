const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const isFormData = options.body instanceof FormData;

  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const headers = isFormData
    ? {
        ...(options.headers || {}),
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      }
    : {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      };

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: "include",
  });

  let data;
  const contentType = res.headers.get("Content-Type");

  try {
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      data = await res.text(); 
    }
  } catch (e) {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.message || data || "API Error");
  }

  return data;
}
