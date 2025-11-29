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
  images?: File[]; 
};

export async function createAccommodation(payload: AccommodationPayload) {
  const formData = new FormData();

  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("location", payload.location);
  formData.append("address", payload.address);
  formData.append("price", String(payload.price));
  formData.append("maxGuests", String(payload.maxGuests));
  formData.append("bedroom", String(payload.bedroom));
  formData.append("bed", String(payload.bed));
  formData.append("bathroom", String(payload.bathroom));

  const images = payload.images ?? []; 

  images.forEach((file) => {
    formData.append("images", file);
  });

  
  for (const [key, value] of formData.entries()) {
    console.log("FormData:", key, value);
  }

  return await apiClient("/accommodations/register", {
    method: "POST",
    body: formData,
  });
}
