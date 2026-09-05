import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export default function CatchAllDestinationNotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <PageContainer className="flex min-h-[50vh] flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          Destination Not Found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md text-center">
          The destination you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href={routes.public.explore}
          className={buttonVariants({
            variant: "highlight",
            className: "mt-8 h-12 px-6 text-base",
          })}
        >
          Explore Destinations
        </Link>
      </PageContainer>
    </div>
  );
}
