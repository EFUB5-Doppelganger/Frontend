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

export interface GetPossibleDatePayload {
  checkIn: string; 
  checkOut: string;  
  guests: number;
}

export interface GetPossibleDateResponse {
  isAvailable: boolean;
  totalPrice: number;
  detail?: string;
  reason?: string;
}

export interface MyReservationItem {
  reservationId: number;
  accommodationId: number;
  accommodationName: string;
  imageUrl: null;
  location: string;
  price: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPayment: number;
}

export interface GetMyReservationsResponse {
  totalReservation: number;
  reservation: MyReservationItem[];
}

// 예약 요청 
export async function postReservation(
  data: PostReservationPayload
): Promise<PostReservationResponse> {
  return apiClient<PostReservationResponse>("/reservations", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// 예약 가능 날짜 선택
export async function getPossibleDate(
  accommodationId: number,
  params: GetPossibleDatePayload
): Promise<GetPossibleDateResponse> {
  const queryString = new URLSearchParams({
    checkIn: params.checkIn,
    checkOut: params.checkOut,
    guests: params.guests.toString(),
  }).toString();

  return apiClient<GetPossibleDateResponse>(
    `/accommodations/${accommodationId}/check?${queryString}`,
    {
      method: "GET"
    }
  );
}

// 내 예약 조회 
export async function getMyReservations(
): Promise<GetMyReservationsResponse> {
  return apiClient<GetMyReservationsResponse>("/reservations/me", {
    method: "GET",
  });
}

export async function cancelReservation(
  reservationId: number
): Promise<void> {
  return apiClient<void>(`/reservations/${reservationId}`, {
    method: "DELETE"
  });
}