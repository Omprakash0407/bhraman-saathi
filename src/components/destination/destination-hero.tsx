import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import type { Destination } from "@/types";

type DestinationHeroProps = {
  destination: Destination;
};

function getCrowdLevelLabel(level: Destination["crowdLevel"]): string {
  switch (level) {
    case "low":
      return "Quiet";
    case "moderate":
      return "Moderate";
    case "high":
      return "Busy";
    default:
      return "Unknown";
  }
}

function getCrowdLevelColor(level: Destination["crowdLevel"]): string {
  switch (level) {
    case "low":
      return "bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-400";
    case "moderate":
      return "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-400";
    case "high":
      return "bg-orange-500/20 text-orange-700 dark:bg-orange-500/30 dark:text-orange-400";
    default:
      return "bg-gray-500/20 text-gray-700 dark:bg-gray-500/30 dark:text-gray-400";
  }
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative isolate min-h-[40rem] overflow-hidden sm:min-h-[50rem]">
      <Image
        src={destination.imageUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />
      
      <PageContainer className="relative flex min-h-[40rem] flex-col justify-center py-20 sm:min-h-[50rem]">
        <Link
          href={routes.public.explore}
          className={buttonVariants({
            variant: "ghost",
            className: "w-fit gap-2 text-primary-foreground hover:bg-primary-foreground/10 mb-6",
          })}
        >
          <ArrowLeft className="size-4" />
          Back to Explore
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          {destination.isHiddenGem && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-highlight px-3 py-1 text-sm font-medium text-highlight-foreground">
              <span className="text-lg">💎</span>
              Hidden Gem
            </span>
          )}
          <span className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
            getCrowdLevelColor(destination.crowdLevel)
          )}>
            <Users className="size-4" />
            {getCrowdLevelLabel(destination.crowdLevel)}
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl text-primary-foreground sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          {destination.name}
        </h1>
        
        <p className="mt-3 text-xl text-primary-foreground/90">
          {destination.location}, {destination.region}
        </p>
        
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
          {destination.summary}
        </p>
      </PageContainer>
    </section>
  );
}
