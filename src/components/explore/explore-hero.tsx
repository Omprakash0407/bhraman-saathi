"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { cn } from "@/lib/utils";

type ExploreHeroProps = {
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: "all" | "hidden-gems" | "beach" | "heritage" | "nature" | "wildlife") => void;
  activeFilter: string;
};

const filters = [
  { id: "all", label: "All" },
  { id: "hidden-gems", label: "Hidden Gems" },
  { id: "beach", label: "Beach" },
  { id: "heritage", label: "Heritage" },
  { id: "nature", label: "Nature" },
  { id: "wildlife", label: "Wildlife" },
] as const;

export function ExploreHero({ onSearchChange, onFilterChange, activeFilter }: ExploreHeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <PageContainer>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Explore Places That Feel Like Yours
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover destinations, hidden gems, and authentic places across India — starting with Odisha.
          </p>
        </div>

        <div className="mt-8 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-xl border border-input bg-background px-12 py-3 text-base outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
