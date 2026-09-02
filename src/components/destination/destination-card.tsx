import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";
import type { Destination } from "@/types";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`${routes.public.destinations}/${destination.id}`}
      className="group block overflow-hidden rounded-2xl bg-card shadow-card outline-none ring-offset-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <article className="relative aspect-[3/4]">
        <Image
          src={destination.imageUrl}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
          {destination.isHiddenGem ? (
            <span className="mb-2 inline-block rounded-full bg-highlight px-2.5 py-0.5 text-caption font-medium text-highlight-foreground">
              Hidden gem
            </span>
          ) : null}
          <h3 className="text-lg font-semibold text-primary-foreground">{destination.name}</h3>
          <p className="mt-1 text-sm text-primary-foreground/85">{destination.location}</p>
        </div>
      </article>
    </Link>
  );
}
