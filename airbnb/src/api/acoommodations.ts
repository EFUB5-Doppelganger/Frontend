import { apiClient } from "@/api/client";

export interface AccommodationCard {
  id: string;
  name: string;
  rating: number;
  image: string;
  location: string;
  price: number;
}

export interface AccommodationPhoto {
  url: string;
  displayOrder: number;
}

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

export interface GetAccommodationCardResponse {
  accommodations: AccommodationCard[];
}

export async function getAccommodationCardRecent(): Promise<GetAccommodationCardResponse> {
  return apiClient<GetAccommodationCardResponse>(
    '/accommodations/card?sortBy=createdAt', { method: "GET" }
  );
}

export async function getAccommodationCardRating(): Promise<GetAccommodationCardResponse> {
  return apiClient<GetAccommodationCardResponse>(
    '/accommodations/card?sortBy=rating', { method: "GET" }
  );
}

export async function getAccommodationDetail(accommodationId : number): Promise<GetAccommodationDetail> {
  return apiClient<GetAccommodationDetail>(
    `{/accommodations/${accommodationId}}`, { method: "GET" }
  );
}