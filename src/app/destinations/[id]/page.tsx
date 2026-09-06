import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { DestinationHero } from "@/components/destination/destination-hero";
import { DestinationInfo } from "@/components/destination/destination-info";
import { TravelEssentials } from "@/components/destination/travel-essentials";
import { RelatedDestinations } from "@/components/destination/related-destinations";
import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { ExperienceCard } from "@/components/experience/experience-card";
import { LocalSuggestionsSection } from "@/components/local-suggestions/local-suggestions-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { getDestinationById, getExperiencesByDestinationId, getLocalSuggestionsByDestinationId, destinations } from "@/data";
import { routes } from "@/lib/routes";

interface DestinationPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    notFound();
  }

  const destinationExperiences = getExperiencesByDestinationId(destination.id);
  const localSuggestions = getLocalSuggestionsByDestinationId(destination.id);
  const relatedDestinations = destinations.filter((dest) => dest.id !== destination.id);

  return (
    <div className="flex min-h-full flex-col">
      <DestinationHero destination={destination} />

      <DestinationInfo destination={destination} />

      <TravelEssentials destination={destination} />

      {/* Local Experiences */}
      {destinationExperiences.length > 0 && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <PageContainer>
            <SectionHeading
              eyebrow="Experiences"
              title="Things To Experience"
              description="Discover local activities and authentic experiences at this destination."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {destinationExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  locationLabel={destination.name}
                />
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      {/* Local Suggestions */}
      <LocalSuggestionsSection
        suggestions={localSuggestions}
        destinationName={destination.name}
      />

      {/* Plan Your Visit CTA */}
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Plan a Trip to {destination.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Turn {destination.name} into a personalized journey with Virām. Let us help you plan the perfect itinerary.
            </p>
            <Link
              href={routes.tourist.planner}
              className={buttonVariants({
                variant: "highlight",
                className: "mt-8 h-12 px-6 text-base",
              })}
            >
              Start Planning
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* Related Destinations */}
      <RelatedDestinations 
        currentDestination={destination}
        allDestinations={relatedDestinations}
      />

      <SiteFooter />
    </div>
  );
}
