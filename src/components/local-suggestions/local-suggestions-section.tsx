import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { LocalSuggestionCard } from "@/components/local-suggestions/local-suggestion-card";
import { buttonVariants } from "@/components/ui/button";
import { LOCAL_SUGGESTION_FORM_URL } from "@/lib/brand";
import type { LocalSuggestion } from "@/types";

type LocalSuggestionsSectionProps = {
  suggestions: LocalSuggestion[];
  destinationName: string;
};

export function LocalSuggestionsSection({ suggestions, destinationName }: LocalSuggestionsSectionProps) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <section id="local-suggestions" className="py-16 sm:py-20 bg-muted/30">
      <PageContainer>
        <SectionHeading
          eyebrow="Local Knowledge"
          title="What Locals Know"
          description={`Discover the traditions, communities, and local stories that make ${destinationName} unique.`}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((suggestion) => (
            <LocalSuggestionCard key={suggestion.id} suggestion={suggestion} />
          ))}
        </div>

        {/* Share Local Knowledge CTA */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Know something local?</h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Help travellers discover the traditions, communities, and local knowledge that make this place unique.
            </p>
            <Link
              href={LOCAL_SUGGESTION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                className: "mt-6 h-11 px-5 text-base",
              })}
            >
              Share Local Knowledge
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}