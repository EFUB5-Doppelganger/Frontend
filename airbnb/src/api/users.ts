import { apiClient } from "./client";

export interface SignUpPayload {
  email: string;
  password: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
  nickname: string;
  loginType: string;
  bio: null;
  bornYear: null;
  job: null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken?: string; // 로그인 성공 시 토큰 반환
  tokenType: string;
}

export interface SocialLoginResponse {
  "redirect-url": string;
}

// 회원가입 
export async function signUp(data: SignUpPayload): Promise<SignUpResponse> {
  return apiClient<SignUpResponse>("/users/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// 로그인 
export async function login(data: LoginPayload): Promise<LoginResponse> {
  return apiClient<LoginResponse>("/users/login/general", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// 소셜 로그인
export async function socialLogin(): Promise<SocialLoginResponse> {
  return apiClient<SocialLoginResponse>("/oauth2/authorization/kakao", {
    method: "POST"
  });
}