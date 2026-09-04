import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export function QuickPlannerCTA() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/90 px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-highlight/20 text-highlight mb-6">
            <Sparkles className="size-8" strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Plan Your Perfect Trip in Minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Tell us your destination, budget, and interests. Our AI-powered planner will create a personalized itinerary with hidden gems and local experiences.
          </p>
          <Link
            href={routes.tourist.planner}
            className={buttonVariants({
              variant: "highlight",
              className: "mt-8 h-12 px-6 text-base",
            })}
          >
            Start Planning Your Trip
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
