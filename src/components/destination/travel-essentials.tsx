import { Plane, Train, Car, Calendar, Shield, Leaf } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import type { Destination } from "@/types";

type TravelEssentialsProps = {
  destination: Destination;
};

export function TravelEssentials({ destination }: TravelEssentialsProps) {
  const essentials = destination.travelEssentials;
  
  if (!essentials) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <PageContainer>
        <SectionHeading
          eyebrow="Travel Essentials"
          title="Plan Your Visit"
          description="Practical information to help you prepare for your journey."
        />
        
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* How to Reach */}
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Plane className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">How to Reach</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Plane className="size-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{essentials.howToReach.airport}</p>
              </div>
              <div className="flex items-start gap-3">
                <Train className="size-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{essentials.howToReach.railway}</p>
              </div>
              <div className="flex items-start gap-3">
                <Car className="size-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{essentials.howToReach.localTransport}</p>
              </div>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Best Time to Visit</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">{essentials.bestTime.season}</p>
              <p className="text-sm text-muted-foreground">{essentials.bestTime.description}</p>
            </div>
          </div>

          {/* Safety & Local Tips */}
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Safety & Local Tips</h3>
            </div>
            <ul className="space-y-2">
              {essentials.safetyTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Travel */}
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Leaf className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Responsible Travel</h3>
            </div>
            <ul className="space-y-2">
              {essentials.responsibleTravel.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
