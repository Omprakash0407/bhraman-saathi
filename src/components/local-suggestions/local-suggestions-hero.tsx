import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getLocalSuggestionsByDestinationId, getDestinationById } from "@/data";
import { LOCAL_SUGGESTION_FORM_URL } from "@/lib/brand";
import { routes } from "@/lib/routes";

// Destinations to feature in the Local Suggestions hero section
const featuredDestinations = ["puri", "daringbadi", "raghurajpur", "chilika"];

export function LocalSuggestionsHero() {
  const destinationSuggestions = featuredDestinations.map((destId) => {
    const destination = getDestinationById(destId);
    const suggestions = getLocalSuggestionsByDestinationId(destId);
    const categories = [...new Set(suggestions.map((s) => s.category))];
    
    return {
      destination,
      categories,
      suggestionCount: suggestions.length,
    };
  }).filter((item) => item.destination && item.suggestionCount > 0);

  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          align="center"
          eyebrow="Local Knowledge"
          title="Discover What Locals Know"
          description="Go beyond the usual attractions. Discover the rituals, communities, fairs, traditions, crafts, and local stories that make every place unique."
        />
        
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinationSuggestions.map(({ destination, categories, suggestionCount }) => (
            <Link
              key={destination!.id}
              href={`${routes.public.destinations}/${destination!.id}#local-suggestions`}
              className="group block rounded-2xl border border-border bg-card p-5 shadow-card outline-none ring-offset-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <article>
                <h3 className="text-lg font-semibold">{destination!.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{destination!.location}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {categories.slice(0, 3).map((category) => (
                    <span
                      key={category}
                      className="inline-block rounded-full bg-accent px-2 py-0.5 text-caption font-medium text-highlight"
                    >
                      {category.replace(/-/g, " ")}
                    </span>
                  ))}
                  {categories.length > 3 && (
                    <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-caption font-medium text-muted-foreground">
                      +{categories.length - 3}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center text-sm text-highlight">
                  <span>{suggestionCount} local insights</span>
                  <ArrowRight className="ml-auto size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={routes.public.explore}
            className={buttonVariants({
              variant: "outline",
              className: "h-11 px-6 text-base",
            })}
          >
            Explore All Destinations
            <ArrowRight className="size-5" />
          </Link>
          <Link
            href={LOCAL_SUGGESTION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "highlight",
              className: "h-11 px-6 text-base",
            })}
          >
            Suggest a New Place
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}