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
  accessToken: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

// 회원가입 
export async function signUp(data: SignUpPayload): Promise<SignUpResponse> {
  return apiClient<SignUpResponse>("/members", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function Login(data: LoginPayload): Promise<LoginResponse> {
  return apiClient<LoginResponse>("/users/login/general", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

