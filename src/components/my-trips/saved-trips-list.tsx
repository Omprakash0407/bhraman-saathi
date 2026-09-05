import { SavedTripCard } from "./saved-trip-card";
import type { SavedTrip } from "@/data/my-trips";

type SavedTripsListProps = {
  trips: SavedTrip[];
};

export function SavedTripsList({ trips }: SavedTripsListProps) {
  if (trips.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {trips.map((trip) => (
        <SavedTripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
