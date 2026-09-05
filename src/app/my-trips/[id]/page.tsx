import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { ItineraryDayCard } from "@/components/planner/itinerary-day-card";
import { BudgetSummary } from "@/components/planner/budget-summary";
import { TravelSmartCard } from "@/components/planner/travel-smart-card";
import { buttonVariants } from "@/components/ui/button";
import { savedTrips, getSavedTripById } from "@/data/my-trips";
import { generateItinerary } from "@/data/planner";
import { routes } from "@/lib/routes";

export function generateStaticParams() {
  return savedTrips.map((trip) => ({
    id: trip.id,
  }));
}

export default async function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const savedTrip = getSavedTripById(id);

  if (!savedTrip) {
    notFound();
  }

  const itinerary = generateItinerary(savedTrip.preferences);

  return (
    <main>
      {/* Header */}
      <section className="bg-surface py-8">
        <PageContainer>
          <Link
            href={routes.tourist.myTrips}
            className={buttonVariants({
              variant: "ghost",
              className: "gap-2 mb-6",
            })}
          >
            <ArrowLeft className="size-4" />
            Back to My Trips
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {itinerary.destination.name}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Your personalized {itinerary.duration} journey
          </p>
        </PageContainer>
      </section>

      {/* Trip Details */}
      <section className="py-12 sm:py-16">
        <PageContainer>
          {/* Trip Summary */}
          <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Trip Summary</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">{itinerary.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Travellers</p>
                <p className="font-medium text-foreground">{itinerary.travellers}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-medium text-foreground">{itinerary.budget}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Travel Style</p>
                <p className="font-medium text-foreground">{itinerary.travelStyle}</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-muted-foreground">Interests</p>
                <p className="font-medium text-foreground">{itinerary.interests.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* Itinerary and Budget */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Day-by-Day Itinerary</h2>
              {itinerary.days.map((day) => (
                <ItineraryDayCard key={day.day} day={day} />
              ))}
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Budget Estimate</h2>
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
    </main>
  );
}
