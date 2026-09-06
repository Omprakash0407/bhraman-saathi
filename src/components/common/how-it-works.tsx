import { ArrowRight, CheckCircle2, Map, Sparkles, Compass } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";

const steps = [
  {
    icon: Sparkles,
    title: "Tell Us Your Preferences",
    description: "Share your destination, budget, travel dates, and interests — adventure, culture, relaxation, or food.",
  },
  {
    icon: Map,
    title: "Get Personalized Recommendations",
    description: "Our AI suggests destinations, stays, and experiences tailored to your style and pace.",
  },
  {
    icon: Compass,
    title: "Build Your Itinerary",
    description: "Customize day-by-day plans with hidden gems, local businesses, and crowd-aware timing.",
  },
  {
    icon: CheckCircle2,
    title: "Explore and Experience",
    description: "Book directly with local providers and embark on a journey designed just for you.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Process"
          title="How Virām Works"
          description="From preferences to personalized itineraries in four simple steps."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-highlight mb-4">
                  <Icon className="size-6" strokeWidth={2} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute right-[-12px] top-1/2 -translate-y-1/2 text-muted-foreground/30">
                    <ArrowRight className="size-5" strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
