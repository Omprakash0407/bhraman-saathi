import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SearchBar } from "@/components/common/search-bar";
import { SectionHeading } from "@/components/common/section-heading";
import { DestinationCard } from "@/components/destination/destination-card";
import { ExperienceCard } from "@/components/experience/experience-card";
import { buttonVariants } from "@/components/ui/button";
import { destinations, experiences, getDestinationById, valuePropositions } from "@/data";
import { brand } from "@/lib/brand";
import { routes } from "@/lib/routes";

const featuredDestinations = destinations.slice(0, 4);
const featuredExperiences = experiences.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-[34rem] overflow-hidden sm:min-h-[40rem]">
        <Image
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/72" />
        <PageContainer className="relative flex min-h-[34rem] flex-col justify-center py-20 sm:min-h-[40rem]">
          <p className="text-caption font-medium uppercase tracking-[0.18em] text-highlight">
            {brand.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
            Discover India.
            <br />
            Experience Local.
            <br />
            Travel Smarter.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            An AI-powered travel companion that helps you plan personalised trips, uncover hidden
            gems, and support local tourism businesses.
          </p>
          <SearchBar className="mt-8 max-w-2xl" />
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Destinations"
            title="Popular Destinations"
            description="Start with Odisha’s coast and temple circuit — from Puri’s seafront to Chilika’s quiet lagoon."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Why us"
            title="Why Bhraman Saathi?"
            description="A complete tourism ecosystem — not another hotel listing page."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valuePropositions.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-highlight">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Local"
            title="Explore Local Experiences"
            description="Book time with people who live the place — studios, lagoons, and old-town walks."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredExperiences.map((experience) => {
              const destination = getDestinationById(experience.destinationId);
              return (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  locationLabel={destination?.name ?? "Odisha"}
                />
              );
            })}
          </div>
        </PageContainer>
      </section>

      <section className="pb-16 sm:pb-20">
        <PageContainer>
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-primary-foreground">Plan your next journey</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Tell us how you like to travel. We will sketch a smarter route across destinations,
              stays, and local experiences.
            </p>
            <Link
              href={routes.tourist.planner}
              className={buttonVariants({
                variant: "highlight",
                className: "mt-8 h-11 px-5",
              })}
            >
              Start Planning
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
