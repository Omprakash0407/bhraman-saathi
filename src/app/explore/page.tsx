"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

import { ExploreHero } from "@/components/explore/explore-hero";
import { InterestChips } from "@/components/explore/interest-chips";
import { RegionSection } from "@/components/explore/region-section";
import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { DestinationCard } from "@/components/destination/destination-card";
import { buttonVariants } from "@/components/ui/button";
import { destinations, getHiddenGems } from "@/data";
import { routes } from "@/lib/routes";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredDestinations = useMemo(() => {
    let filtered = [...destinations];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(query) ||
          dest.location.toLowerCase().includes(query) ||
          dest.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter from hero
    if (activeFilter === "hidden-gems") {
      filtered = filtered.filter((dest) => dest.isHiddenGem);
    } else if (activeFilter !== "all") {
      filtered = filtered.filter((dest) =>
        dest.tags.some((tag) => tag.toLowerCase() === activeFilter)
      );
    }

    // Apply interest filter
    if (selectedInterest) {
      filtered = filtered.filter((dest) =>
        dest.tags.some((tag) => tag.toLowerCase() === selectedInterest.toLowerCase())
      );
    }

    // Apply region filter
    if (selectedRegion === "odisha") {
      filtered = filtered.filter((dest) => dest.location === "Odisha");
    } else if (selectedRegion === "east-india") {
      filtered = filtered.filter((dest) => dest.region === "East India");
    }

    return filtered;
  }, [searchQuery, activeFilter, selectedInterest, selectedRegion]);

  const featuredDestinations = useMemo(() => {
    return destinations.filter((dest) => !dest.isHiddenGem).slice(0, 4);
  }, []);

  const hiddenGems = useMemo(() => {
    return getHiddenGems();
  }, []);

  const hasActiveFilters = searchQuery || activeFilter !== "all" || selectedInterest || selectedRegion;

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilter("all");
    setSelectedInterest(null);
    setSelectedRegion(null);
  };

  return (
    <main>
      <ExploreHero
        onSearchChange={setSearchQuery}
        onFilterChange={setActiveFilter}
        activeFilter={activeFilter}
      />

      {/* Featured Destinations */}
      <section className="py-16 sm:py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Featured"
            title="Start Your Discovery"
            description="Explore destinations chosen for their culture, character, and local experiences."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Hidden Gems */}
      <section className="bg-background py-16 sm:py-20">
        <PageContainer>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-highlight">
              <span className="text-lg">💎</span>
            </div>
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-highlight">
              Discover Differently
            </p>
          </div>
          <SectionHeading
            eyebrow="Hidden Gems"
            title="Hidden Gems Worth Finding"
            description="Go beyond the usual tourist trails and discover quieter places with authentic local character."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hiddenGems.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Interest Chips */}
      <InterestChips onInterestChange={setSelectedInterest} />

      {/* Region Section */}
      <RegionSection onRegionChange={setSelectedRegion} />

      {/* Filtered Results */}
      {hasActiveFilters && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <PageContainer>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {filteredDestinations.length} Destinations Found
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-2 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
                  >
                    <X className="size-4" />
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {filteredDestinations.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No destinations found</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try another search or explore a different interest.
                </p>
                <button
                  onClick={clearFilters}
                  className={buttonVariants({
                    variant: "outline",
                    className: "mt-6",
                  })}
                >
                  Clear filters
                </button>
              </div>
            )}
          </PageContainer>
        </section>
      )}

      {/* Final CTA */}
      <section className="pb-16 sm:pb-20">
        <PageContainer>
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Found Somewhere You&apos;d Love to Explore?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Turn your destination into a personalized journey with Viram.
            </p>
            <Link
              href={routes.tourist.planner}
              className={buttonVariants({
                variant: "highlight",
                className: "mt-8 h-12 px-6 text-base",
              })}
            >
              Plan My Trip
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
