import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Wallet, Heart, ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/routes";
import type { SavedTrip } from "@/data/my-trips";
import { getDestinationById } from "@/data";
import { durationOptions, budgetOptions, travelStyleOptions, interestOptions } from "@/data/planner";

type SavedTripCardProps = {
  trip: SavedTrip;
  className?: string;
};

export function SavedTripCard({ trip, className }: SavedTripCardProps) {
  const destination = getDestinationById(trip.preferences.destination);
  if (!destination) return null;

  const durationLabel = durationOptions.find((opt) => opt.value === trip.preferences.duration)?.label;
  const budgetLabel = budgetOptions.find((opt) => opt.value === trip.preferences.budget)?.label;
  const travelStyleLabel = travelStyleOptions.find((opt) => opt.value === trip.preferences.travelStyle)?.label;
  const interestLabels = trip.preferences.interests.map((interest) =>
    interestOptions.find((opt) => opt.value === interest)?.label || interest
  );

  const savedDate = new Date(trip.savedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className={cn("rounded-2xl border border-border bg-card shadow-card overflow-hidden", className)}>
      {/* Destination Image */}
      <div className="relative h-48 w-full">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
          <p className="text-sm text-white/90">{destination.location}</p>
        </div>
      </div>

      {/* Trip Details */}
      <div className="p-5 space-y-4">
        {/* Trip Info Grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Duration</span>
            <span className="text-sm font-medium text-foreground ml-auto">{durationLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Travellers</span>
            <span className="text-sm font-medium text-foreground ml-auto">{trip.preferences.travellers}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Budget</span>
            <span className="text-sm font-medium text-foreground ml-auto">{budgetLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Style</span>
            <span className="text-sm font-medium text-foreground ml-auto">{travelStyleLabel}</span>
          </div>
        </div>

        {/* Interests */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Interests</p>
          <div className="flex flex-wrap gap-2">
            {interestLabels.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Saved Date */}
        <p className="text-xs text-muted-foreground">Saved on {savedDate}</p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Link
            href={`${routes.tourist.myTrips}/${trip.id}`}
            className={buttonVariants({
              variant: "default",
              className: "flex-1 gap-2",
            })}
          >
            View Trip
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={routes.tourist.planner}
            className={buttonVariants({
              variant: "outline",
              className: "flex-1",
            })}
          >
            Plan Again
          </Link>
        </div>
      </div>
    </article>
  );
}
