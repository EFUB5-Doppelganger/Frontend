import { apiClient } from "./client";

export interface PostReservationPayload {
  accommodationId: number;
  memberId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPayment: number;
}

export interface PostReservationResponse {
  reservationid: number;
  createdAt: string;
}

// 예약 요청 
export async function postReservation(data: PostReservationPayload): Promise<PostReservationResponse> {
  return apiClient<PostReservationResponse>("/reservations", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

