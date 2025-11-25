import { apiClient } from "@/api/client";

// 프로필 정보 조회
export const getUserProfile = async (accessToken: string) => {
  return await apiClient("/users/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 프로필 정보 수정
export const updateUserProfile = async (
  accessToken: string,
  payload: { bio: string }
) => {
  return await apiClient("/users/profile", {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
