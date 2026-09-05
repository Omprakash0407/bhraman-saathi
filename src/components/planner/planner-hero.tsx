import { PageContainer } from "@/components/common/page-container";

export function PlannerHero() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <PageContainer>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Plan a Trip That Feels Like Yours
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us how you like to travel, and Bhraman Saathi will shape a personalized journey around your interests, time, and budget.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
