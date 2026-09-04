import { MapPin } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

type RegionSectionProps = {
  onRegionChange: (region: string | null) => void;
};

const regions = [
  { id: "odisha", name: "Odisha", description: "Temples, beaches, and hidden gems", featured: true },
  { id: "east-india", name: "East India", description: "Cultural heritage and natural beauty", featured: false },
];

export function RegionSection({ onRegionChange }: RegionSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Geography"
          title="Explore by Region"
          description="Start with Odisha's diverse landscapes — from ancient temples to quiet coastal villages."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => onRegionChange(region.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-card",
                region.featured && "border-highlight/50"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex size-12 items-center justify-center rounded-xl",
                  region.featured ? "bg-accent text-highlight" : "bg-muted text-muted-foreground"
                )}>
                  <MapPin className="size-6" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{region.name}</h3>
                    {region.featured && (
                      <span className="text-caption font-medium uppercase tracking-[0.12em] text-highlight">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{region.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          More regions coming soon as we expand across India.
        </p>
      </PageContainer>
    </section>
  );
}
