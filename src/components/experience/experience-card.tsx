import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";
import type { Experience } from "@/types";

type ExperienceCardProps = {
  experience: Experience;
  locationLabel: string;
};

function formatPrice(amount: number, currency: Experience["currency"]) {
  if (currency === "INR") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
  return `${currency} ${amount}`;
}

export function ExperienceCard({ experience, locationLabel }: ExperienceCardProps) {
  return (
    <Link
      href={`${routes.public.experiences}/${experience.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card outline-none ring-offset-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={experience.imageUrl}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-caption font-medium uppercase tracking-[0.12em] text-highlight">
          {locationLabel}
        </p>
        <h3 className="mt-1 text-lg">{experience.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{experience.summary}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden="true" />
            {experience.durationHours} hrs
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-highlight">
            <Star className="size-4 fill-highlight" aria-hidden="true" />
            {experience.rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground">
          From {formatPrice(experience.price, experience.currency)}
        </p>
      </div>
    </Link>
  );
}
