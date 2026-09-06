export { destinations, getDestinationById, getHiddenGems } from "@/data/destinations";
export { experiences, getExperiencesByDestinationId, getExperienceById } from "@/data/experiences";
export { valuePropositions } from "@/data/value-propositions";
export {
  generateItinerary,
  durationOptions,
  budgetOptions,
  interestOptions,
  travelStyleOptions,
  type TripPreferences,
  type TripItinerary,
  type ItineraryDay,
} from "@/data/planner";
export { savedTrips, getSavedTripById, type SavedTrip } from "@/data/my-trips";
export { localSuggestions, getLocalSuggestionsByDestinationId, getLocalSuggestionById } from "@/data/local-suggestions";
