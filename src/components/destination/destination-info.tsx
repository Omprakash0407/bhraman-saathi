import { MapPin, Clock, DollarSign } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { OpenInMapsButton } from "@/components/common/open-in-maps-button";
import type { Destination } from "@/types";

type DestinationInfoProps = {
  destination: Destination;
};

export function DestinationInfo({ destination }: DestinationInfoProps) {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="About"
          title={`Why Visit ${destination.name}`}
          description="Discover what makes this destination special."
        />
        
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {destination.summary}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Experience the authentic culture, natural beauty, and local character that make {destination.name} a memorable destination. From its unique landscapes to the warmth of its people, every moment here offers something genuine and unforgettable.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Facts</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">{destination.location}, {destination.region}</p>
                  <OpenInMapsButton
                    latitude={destination.locationCoordinates.latitude}
                    longitude={destination.locationCoordinates.longitude}
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Suggested Duration</p>
                  <p className="text-sm text-muted-foreground">2-3 days</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <DollarSign className="size-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Budget Range</p>
                  <p className="text-sm text-muted-foreground">₹2,000 - ₹5,000 per day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-highlight"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
