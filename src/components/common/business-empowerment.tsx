import { ArrowRight, Building2, Users, Utensils, Car, Hammer, Store } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

const businessTypes = [
  {
    icon: Building2,
    title: "Hotels & Homestays",
    description: "Reach travelers seeking authentic stays and gain visibility beyond listing sites.",
  },
  {
    icon: Users,
    title: "Local Guides",
    description: "Connect with tourists who value local knowledge and authentic storytelling.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description: "Showcase regional cuisine to food travelers exploring local flavors.",
  },
  {
    icon: Car,
    title: "Travel Services",
    description: "Offer transportation, tours, and logistics to visitors planning complete trips.",
  },
  {
    icon: Hammer,
    title: "Artisans & Crafts",
    description: "Display traditional crafts to cultural tourists interested in heritage arts.",
  },
  {
    icon: Store,
    title: "Experience Providers",
    description: "List unique local experiences — from cooking classes to temple walks.",
  },
] as const;

export function BusinessEmpowerment() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="For Businesses"
          title="Empower Local Tourism"
          description="Join a platform designed to increase your visibility, connect you with the right travelers, and grow your tourism business sustainably."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-highlight mb-4">
                  <Icon className="size-6" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={routes.business.home}
            className={buttonVariants({
              variant: "highlight",
              className: "h-12 px-6 text-base",
            })}
          >
            List Your Business
            <ArrowRight className="size-5" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Free to join. No hidden fees. Start reaching travelers today.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
