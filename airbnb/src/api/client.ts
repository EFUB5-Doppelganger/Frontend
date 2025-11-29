const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// accessToken 가져오기 
const getAccessToken = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken') || '';
  }
  return '';
};

// 인증이 필요없는 엔드포인트 목록
const PUBLIC_ENDPOINTS = [
  '/users/signup',
  '/users/login/general',
  '/users/login/kakao',
  // 필요한 다른 public 엔드포인트 추가
];

// 해당 엔드포인트가 public인지 확인
const isPublicEndpoint = (endpoint: string): boolean => {
  return PUBLIC_ENDPOINTS.some(publicEndpoint => 
    endpoint.startsWith(publicEndpoint)
  );
};

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const accessToken = getAccessToken();

  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  // public 엔드포인트가 아니고 토큰이 있으면 Authorization 헤더 추가
  if (!isPublicEndpoint(endpoint) && accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API Error");
  }

  return res.json();
}