import type { ComponentType } from "react";
import { BookOpen, Users, Calendar, Utensils, Hammer, Home, Music, Heart, Scroll } from "lucide-react";

import type { LocalSuggestion } from "@/types";

type LocalSuggestionCardProps = {
  suggestion: LocalSuggestion;
};

const categoryIcons: Record<LocalSuggestion["category"], ComponentType<{ className?: string }>> = {
  "rituals-traditions": BookOpen,
  "tribes-communities": Users,
  "festivals-fairs": Calendar,
  "traditional-food": Utensils,
  "crafts-artisans": Hammer,
  "village-customs": Home,
  "local-music-dance": Music,
  "cultural-etiquette": Heart,
  "local-stories": Scroll,
};

const categoryLabels: Record<LocalSuggestion["category"], string> = {
  "rituals-traditions": "Rituals & Traditions",
  "tribes-communities": "Tribes & Communities",
  "festivals-fairs": "Festivals & Fairs",
  "traditional-food": "Traditional Food",
  "crafts-artisans": "Crafts & Artisans",
  "village-customs": "Village Customs",
  "local-music-dance": "Local Music & Dance",
  "cultural-etiquette": "Cultural Etiquette",
  "local-stories": "Local Stories",
};

export function LocalSuggestionCard({ suggestion }: LocalSuggestionCardProps) {
  const Icon = categoryIcons[suggestion.category];
  const categoryLabel = categoryLabels[suggestion.category];

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-highlight">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <p className="text-caption font-medium uppercase tracking-[0.12em] text-highlight">
            {categoryLabel}
          </p>
          <h3 className="mt-1 text-lg">{suggestion.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{suggestion.description}</p>
          {suggestion.culturalContext && (
            <p className="mt-3 text-xs italic text-muted-foreground/80">
              {suggestion.culturalContext}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}