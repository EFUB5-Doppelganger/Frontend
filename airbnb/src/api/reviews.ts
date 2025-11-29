import { apiClient } from './client';

export interface PostReviewPayload {
  title: string;
  content: string;
  score: number;
}

export interface PostReviewResponse {
  reviewId: number;
  reviewerName: string;
  score: number;
  content: string;
  createdAt: string;
}

export interface ReviewItem {
  reviewId: number;
  reviewerName: string;
  score: number;
  content: string;
  createdAt: string;
}

export interface GetReviewResponse {
  averageRating: number;
  totalReviews: number;
  reviews: ReviewItem[];
}

// 리뷰 등록 
export async function postReview(
  data: PostReviewPayload,
  accommodationId: string,
  reservationId: string,
  accessToken: string
): Promise<PostReviewResponse> {
  return apiClient<PostReviewResponse>(`/accommodations/${accommodationId}/reservations/${reservationId}/reviews`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
}

// 리뷰 조회
export async function getReview(
  accommodationId: number,
  accessToken: string
): Promise<GetReviewResponse> {
  return apiClient<GetReviewResponse>(`/accommodations/${accommodationId}/reviews`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}