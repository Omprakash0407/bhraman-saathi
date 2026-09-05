import { Plane, Train, Calendar, Shield, Leaf, Navigation } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Destination } from "@/types";

type TravelSmartCardProps = {
  destination: Destination;
  className?: string;
};

export function TravelSmartCard({ destination, className }: TravelSmartCardProps) {
  if (!destination.travelEssentials) {
    return null;
  }

  const { howToReach, bestTime, safetyTips, responsibleTravel } = destination.travelEssentials;

  return (
    <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-card", className)}>
      <h3 className="mb-6 text-xl font-semibold text-foreground">Travel Smart</h3>

      <div className="space-y-6">
        {/* How to Reach */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Plane className="size-5 text-highlight" />
            <h4 className="text-base font-semibold text-foreground">How to Reach</h4>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Plane className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{howToReach.airport}</span>
            </div>
            <div className="flex items-start gap-2">
              <Train className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{howToReach.railway}</span>
            </div>
            <div className="flex items-start gap-2">
              <Navigation className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{howToReach.localTransport}</span>
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Calendar className="size-5 text-highlight" />
            <h4 className="text-base font-semibold text-foreground">Best Time to Visit</h4>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">{bestTime.season}</p>
            <p>{bestTime.description}</p>
          </div>
        </div>

        {/* Safety Tips */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Shield className="size-5 text-highlight" />
            <h4 className="text-base font-semibold text-foreground">Safety & Local Tips</h4>
          </div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {safetyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsible Travel */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Leaf className="size-5 text-highlight" />
            <h4 className="text-base font-semibold text-foreground">Responsible Travel</h4>
          </div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {responsibleTravel.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-highlight" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
