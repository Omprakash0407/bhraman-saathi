import type { TripPreferences } from "./planner";

export type SavedTrip = {
  id: string;
  preferences: TripPreferences;
  savedAt: string;
};

export const savedTrips: SavedTrip[] = [
  {
    id: "trip-1",
    preferences: {
      destination: "puri",
      duration: "3-4",
      travellers: 2,
      budget: "moderate",
      interests: ["heritage", "beach"],
      travelStyle: "balanced",
    },
    savedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "trip-2",
    preferences: {
      destination: "daringbadi",
      duration: "3-4",
      travellers: 2,
      budget: "moderate",
      interests: ["nature", "wildlife"],
      travelStyle: "adventure",
    },
    savedAt: "2024-01-20T14:45:00Z",
  },
  {
    id: "trip-3",
    preferences: {
      destination: "chilika",
      duration: "3-4",
      travellers: 2,
      budget: "moderate",
      interests: ["nature", "wildlife"],
      travelStyle: "balanced",
    },
    savedAt: "2024-01-25T09:15:00Z",
  },
];

export function getSavedTripById(id: string): SavedTrip | undefined {
  return savedTrips.find((trip) => trip.id === id);
}
