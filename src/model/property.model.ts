export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface Property {
  name: string;
  location: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
  reviewCount: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  propertyType: string;
  reviews: Review[];
}