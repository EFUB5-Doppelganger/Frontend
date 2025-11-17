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

// 회원가입 
export async function signUp(data: SignUpPayload): Promise<SignUpResponse> {
  return apiClient<SignUpResponse>("/members", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

