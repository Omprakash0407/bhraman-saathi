import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-muted/50 mb-6">
        <Compass className="size-10 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-3">No Saved Trips Yet</h2>
      <p className="max-w-md text-base text-muted-foreground mb-8">
        Your personalized journeys will appear here. Start planning your first trip with Virām to discover India differently.
      </p>
      <Link
        href={routes.tourist.planner}
        className={buttonVariants({
          variant: "highlight",
          className: "gap-2",
        })}
      >
        Plan Your First Trip
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
