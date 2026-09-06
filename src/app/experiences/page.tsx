"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ExperiencesHero } from "@/components/experience/experiences-hero";
import { ExperienceFilters } from "@/components/experience/experience-filters";
import { ExperienceCard } from "@/components/experience/experience-card";
import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { experiences, getDestinationById } from "@/data";
import { routes } from "@/lib/routes";

export default function ExperiencesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperiences = useMemo(() => {
    if (activeFilter === "all") {
      return experiences;
    }
    return experiences.filter((exp) => exp.category === activeFilter);
  }, [activeFilter]);

  return (
    <main>
      <ExperiencesHero />

      <section className="py-12 sm:py-16">
        <PageContainer>
          <SectionHeading
            eyebrow="Discover"
            title="Authentic Local Experiences"
            description="Connect with local communities, learn traditional crafts, and experience destinations through the eyes of those who call them home."
          />

          <div className="mt-8">
            <ExperienceFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredExperiences.map((experience) => {
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

          {filteredExperiences.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground">No experiences found in this category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className={buttonVariants({
                  variant: "outline",
                  className: "mt-4",
                })}
              >
                View All Experiences
              </button>
            </div>
          )}
        </PageContainer>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <PageContainer>
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Ready to Experience India Differently?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Plan a journey around these authentic local experiences and connect with the communities that make each destination special.
            </p>
            <Link
              href={routes.tourist.planner}
              className={buttonVariants({
                variant: "highlight",
                className: "mt-8 h-12 px-6 text-base",
              })}
            >
              Plan Your Trip
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
