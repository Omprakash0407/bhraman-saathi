import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { DestinationCard } from "@/components/destination/destination-card";
import type { Destination } from "@/types";

type RelatedDestinationsProps = {
  currentDestination: Destination;
  allDestinations: Destination[];
};

export function RelatedDestinations({ currentDestination, allDestinations }: RelatedDestinationsProps) {
  const relatedDestinations = allDestinations
    .filter((dest) => dest.id !== currentDestination.id)
    .filter((dest) => 
      dest.tags.some((tag) => currentDestination.tags.includes(tag)) ||
      dest.region === currentDestination.region
    )
    .slice(0, 4);

  if (relatedDestinations.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="More to Explore"
          title="Related Destinations"
          description="Discover similar places you might also enjoy."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
