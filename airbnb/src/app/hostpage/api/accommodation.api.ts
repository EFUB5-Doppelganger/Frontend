import { apiClient } from "@/api/client"; 

export type AccommodationPayload = {
  name: string;
  description: string;
  location: string;
  address: string;
  price: number;
  maxGuests: number;
  bedroom: number;
  bed: number;
  bathroom: number;
  images: string[];
};

export async function createAccommodation(
  accessToken: string,
  payload: AccommodationPayload
) {
  return await apiClient("/accommodations", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
