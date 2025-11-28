import { apiClient } from "@/api/client";
import {
  GetMyAccommodationsResponse,
  GetAccommodationReviewsResponse
} from '../types/host'
// 내가 등록한 숙소 조회
export const getMyAccommodations = async (
  accessToken: string
): Promise<GetMyAccommodationsResponse> => {
  return await apiClient("/accommodations/mine", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 숙소 리뷰 조회
export const getAccommodationReviews = async (
  accommodationId: number
): Promise<GetAccommodationReviewsResponse> => {
  return await apiClient(`/accommodations/${accommodationId}/reviews`, {
    method: "GET",
  });
};
