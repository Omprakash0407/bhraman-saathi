import { Compass } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";

export function ExperiencesHero() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <PageContainer>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-highlight">
            <Compass className="size-5" />
          </div>
          <p className="text-caption font-medium uppercase tracking-[0.18em] text-highlight">
            Local Experiences
          </p>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Experience India, Locally
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Meet local makers, discover authentic traditions, and experience destinations beyond the usual tourist trail.
        </p>
      </PageContainer>
    </section>
  );
}
