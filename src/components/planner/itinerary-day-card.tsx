import { Clock, Star, Sunrise, Sunset } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ItineraryDay } from "@/data/planner";

type ItineraryDayCardProps = {
  day: ItineraryDay;
  className?: string;
};

export function ItineraryDayCard({ day, className }: ItineraryDayCardProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-card", className)}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">Day {day.day}</h3>
      </div>

      <div className="space-y-4">
        {/* Morning */}
        <div className="flex gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sunrise className="size-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Morning</p>
            <p className="mt-1 text-base text-foreground">{day.morning}</p>
          </div>
        </div>

        {/* Afternoon */}
        <div className="flex gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Clock className="size-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Afternoon</p>
            <p className="mt-1 text-base text-foreground">{day.afternoon}</p>
          </div>
        </div>

        {/* Evening */}
        <div className="flex gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sunset className="size-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">Evening</p>
            <p className="mt-1 text-base text-foreground">{day.evening}</p>
          </div>
        </div>

        {/* Local Experience */}
        {day.localExperience && (
          <div className="mt-4 rounded-xl bg-accent p-4">
            <div className="flex items-start gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-highlight/10 text-highlight">
                <Star className="size-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-highlight">Experience Local</p>
                <p className="mt-1 text-base font-medium text-foreground">
                  {day.localExperience.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {day.localExperience.summary}
                </p>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {day.localExperience.durationHours} hrs
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="size-3 fill-highlight text-highlight" />
                    {day.localExperience.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
