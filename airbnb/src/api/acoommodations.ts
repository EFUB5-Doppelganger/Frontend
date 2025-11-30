import { apiClient } from "@/api/client";

// 숙소 카드
export interface AccommodationCard {
  id: string;
  name: string;
  rating: number;
  image: string;
  location: string;
  price: number;
}

// 숙소 이미지
export interface AccommodationPhoto {
  url: string;
  displayOrder: number;
}

// 숙소 상세 조회 response
export interface GetAccommodationDetail {
  id: number;
  name: string;
  description: string;
  dailyPrice: number;
  rating: number;
  maxGuests: number;
  address: string;
  amenities: string[];
  photos: AccommodationPhoto[];
}

// 숙소 카드 response
export interface GetAccommodationCardResponse {
  accommodations: AccommodationCard[];
}

// 숙소 예약 가능 날짜 선택 payload
export interface GetAccommodationCheckPayload {
  checkIn: string;
  checkOut: string;
  guests: number;
}

// 숙소 예약 가능 날짜 선택 response 
export interface GetAccommodationCheckResponse {
  totalPrice: number;
  detail: string;
  reason: string | null;
  available: boolean;
}

// 숙소 카드 조회 (최신 순)
export async function getAccommodationCardRecent(): Promise<GetAccommodationCardResponse> {
  return apiClient<GetAccommodationCardResponse>(
    '/accommodations/card?sortBy=createdAt&page=0', {
      method: "GET"
    }
  );
}

// 숙소 카드 조회 (평점 순) 
export async function getAccommodationCardRating(): Promise<GetAccommodationCardResponse> {
  return apiClient<GetAccommodationCardResponse>(
    '/accommodations/card?sortBy=rating&page=0', { 
      method: "GET"
     }
  );
}

// 숙소 상세 조회
export async function getAccommodationDetail(
  accommodationId : number
): Promise<GetAccommodationDetail> {
  return apiClient<GetAccommodationDetail>(
    `/accommodations/${accommodationId}`, { 
      method: "GET"
   }
  );
}

// 숙소 예약 가능 날짜 조회
export async function getAccommodationCheck(
  data: GetAccommodationCheckPayload,
  accommodationId: number
): Promise<GetAccommodationCheckResponse> {
  return apiClient<GetAccommodationCheckResponse>(
    `/accommodations/${accommodationId}/check`, 
    { 
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}