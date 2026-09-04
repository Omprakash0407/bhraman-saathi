"use client";

import { useState } from "react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

type InterestChipsProps = {
  onInterestChange: (interest: string | null) => void;
};

const interests = [
  { id: "beach", label: "Beach", icon: "🏖️" },
  { id: "heritage", label: "Heritage", icon: "🏛️" },
  { id: "culture", label: "Culture", icon: "🎭" },
  { id: "nature", label: "Nature", icon: "🌿" },
  { id: "wildlife", label: "Wildlife", icon: "🦁" },
  { id: "spiritual", label: "Spiritual", icon: "🕉️" },
  { id: "food", label: "Food", icon: "🍛" },
  { id: "adventure", label: "Adventure", icon: "🏔️" },
] as const;

export function InterestChips({ onInterestChange }: InterestChipsProps) {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const handleInterestClick = (interestId: string) => {
    const newSelection = selectedInterest === interestId ? null : interestId;
    setSelectedInterest(newSelection);
    onInterestChange(newSelection);
  };

  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Personalize"
          title="Travel Your Way"
          description="Discover destinations that match your interests and travel style."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => handleInterestClick(interest.id)}
              className={cn(
                "flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:shadow-card",
                selectedInterest === interest.id
                  ? "border-highlight bg-accent"
                  : "hover:border-border/50 hover:bg-muted"
              )}
            >
              <span className="text-2xl" aria-hidden="true">
                {interest.icon}
              </span>
              <span className="font-medium text-foreground">{interest.label}</span>
            </button>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
