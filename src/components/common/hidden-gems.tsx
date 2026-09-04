import { Gem } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { DestinationCard } from "@/components/destination/destination-card";
import { getHiddenGems } from "@/data";

export function HiddenGems() {
  const hiddenGems = getHiddenGems().slice(0, 4);

  return (
    <section className="bg-background py-16 sm:py-20">
      <PageContainer>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-highlight">
            <Gem className="size-5" strokeWidth={2} />
          </div>
          <p className="text-caption font-medium uppercase tracking-[0.18em] text-highlight">
            Discovery
          </p>
        </div>
        <SectionHeading
          eyebrow="Hidden Gems"
          title="Explore Beyond the Usual"
          description="Quiet hill stations, mangrove forests, craft villages, and sanctuaries where India's authentic beauty still thrives."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hiddenGems.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
