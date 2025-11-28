
export interface Accommodation {
  id: number;
  name: string;
  description: string;
  dailyPrice: number;
  rating: number;
  maxGuests: number;
  address: string;
  amenities: string[];
  photos: { url: string; displayOrder: number }[];
}

export interface GetMyAccommodationsResponse {
  totalAccommodations: number;
  reviews: Accommodation[];
}

export interface Review {
  reviewId: number;
  reviewerName: string;
  score: number;
  content: string;
  createdAt: string;
}

export interface GetAccommodationReviewsResponse {
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
}
