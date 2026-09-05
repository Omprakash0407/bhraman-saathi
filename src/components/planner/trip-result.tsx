import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users, Wallet, Heart, Compass, RefreshCw } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { PageContainer } from "@/components/common/page-container";
import { ItineraryDayCard } from "@/components/planner/itinerary-day-card";
import { BudgetSummary } from "@/components/planner/budget-summary";
import { TravelSmartCard } from "@/components/planner/travel-smart-card";
import { routes } from "@/lib/routes";
import type { TripItinerary } from "@/data/planner";

type TripResultProps = {
  itinerary: TripItinerary;
  onReset: () => void;
};

export function TripResult({ itinerary, onReset }: TripResultProps) {
  return (
    <section className="bg-background py-12 sm:py-16">
      <PageContainer>
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your Personalized Journey
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={onReset}
              className="gap-2"
            >
              <RefreshCw className="size-4" />
              Plan Another Trip
            </Button>
          </div>
          <p className="text-muted-foreground">
            Your Bhraman Saathi plan, crafted around your preferences
          </p>
        </div>

        {/* Trip Summary */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Trip Summary</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Destination</p>
                <p className="font-medium text-foreground">{itinerary.destination.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">{itinerary.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Travellers</p>
                <p className="font-medium text-foreground">{itinerary.travellers}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Wallet className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-medium text-foreground">{itinerary.budget}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Compass className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Travel Style</p>
                <p className="font-medium text-foreground">{itinerary.travelStyle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Heart className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Interests</p>
                <p className="font-medium text-foreground">{itinerary.interests.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary and Budget */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Day-by-Day Itinerary</h3>
            {itinerary.days.map((day) => (
              <ItineraryDayCard key={day.day} day={day} />
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Budget Estimate</h3>
            <BudgetSummary budget={itinerary.estimatedBudget} />
          </div>
        </div>

        {/* Travel Smart */}
        <div className="mb-8">
          <TravelSmartCard destination={itinerary.destination} />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={`${routes.public.destinations}/${itinerary.destination.id}`}
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "gap-2",
            })}
          >
            Explore Destination
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={routes.public.experiences}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "gap-2",
            })}
          >
            View More Experiences
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
