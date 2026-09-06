import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export default function ExperienceNotFound() {
  return (
    <main>
      <section className="min-h-[50vh] flex items-center justify-center py-16">
        <PageContainer className="text-center">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Experience Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The experience you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href={routes.public.experiences}
            className={buttonVariants({
              variant: "default",
              className: "gap-2",
            })}
          >
            <ArrowLeft className="size-4" />
            Back to Experiences
          </Link>
        </PageContainer>
      </section>
    </main>
  );
}
