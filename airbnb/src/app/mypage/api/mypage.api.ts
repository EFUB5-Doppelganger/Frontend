import { apiClient } from "@/api/client";
type Profile = {
  nickname: string;
  id: string;
  bio: string;
  bornYear: string;
  job: string;
};
// 프로필 정보 조회
export const getUserProfile = async (): Promise<Profile> => {
  return await apiClient<Profile>("/users/profile", {
    method: "GET",
  });
};


// 프로필 정보 수정
export const updateUserProfile = async (payload: { bio: string }) => {
  return await apiClient("/users/profile", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
};
