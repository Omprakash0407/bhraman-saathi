"use client";

import { cn } from "@/lib/utils";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "culture", label: "Culture" },
  { value: "heritage", label: "Heritage" },
  { value: "food", label: "Food" },
  { value: "crafts", label: "Crafts" },
  { value: "nature", label: "Nature" },
  { value: "local-experiences", label: "Local Experiences" },
] as const;

type ExperienceFiltersProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export function ExperienceFilters({ activeFilter, onFilterChange }: ExperienceFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            activeFilter === option.value
              ? "border-highlight bg-highlight text-highlight-foreground"
              : "border-border bg-background hover:bg-muted"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
