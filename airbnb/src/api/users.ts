import { apiClient } from "./client";

export interface SignUpPayload {
  userId: string;
  password: string;
  provider: "general";
}

export interface SignUpResponse {
  userId: string;
  password: string;
  provider: "general";
}

export interface LoginPayload {
  userId: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken?: string; // 로그인 성공 시 토큰 반환
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
  return apiClient<SocialLoginResponse>("/users/login/kakao", {
    method: "POST"
  });
}