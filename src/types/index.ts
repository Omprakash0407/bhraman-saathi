/**
 * Domain types for the tourism ecosystem.
 * Shapes are API-ready (string ids) so mock data and future REST responses can share them.
 */

export type Destination = {
  id: string;
  name: string;
  location: string;
  region: string;
  summary: string;
  imageUrl: string;
  tags: string[];
  isHiddenGem: boolean;
  crowdLevel: "low" | "moderate" | "high";
};

export type Hotel = {
  id: string;
  name: string;
  destinationId: string;
  summary: string;
  imageUrl: string;
  pricePerNight: number;
  currency: "INR";
  rating: number;
  reviewCount: number;
  amenities: string[];
};

export type Experience = {
  id: string;
  title: string;
  destinationId: string;
  hostName: string;
  summary: string;
  imageUrl: string;
  durationHours: number;
  price: number;
  currency: "INR";
  rating: number;
  isLocal: boolean;
};

export type TravelPackage = {
  id: string;
  title: string;
  destinationIds: string[];
  summary: string;
  durationDays: number;
  priceFrom: number;
  currency: "INR";
};

export type Itinerary = {
  id: string;
  title: string;
  destinationIds: string[];
  days: number;
  summary: string;
};

export type Review = {
  id: string;
  authorName: string;
  rating: number;
  comment: string;
  entityType: "destination" | "hotel" | "experience";
  entityId: string;
};
