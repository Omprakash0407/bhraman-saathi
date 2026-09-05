import { MyTripsHero } from "@/components/my-trips/my-trips-hero";
import { SavedTripsList } from "@/components/my-trips/saved-trips-list";
import { EmptyState } from "@/components/my-trips/empty-state";
import { PageContainer } from "@/components/common/page-container";
import { savedTrips } from "@/data/my-trips";

export default function MyTripsPage() {
  const hasTrips = savedTrips.length > 0;

  return (
    <main>
      <MyTripsHero />

      <section className="py-12 sm:py-16">
        <PageContainer>
          {hasTrips ? (
            <SavedTripsList trips={savedTrips} />
          ) : (
            <EmptyState />
          )}
        </PageContainer>
      </section>
    </main>
  );
}
