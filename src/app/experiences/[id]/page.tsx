import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Star,
  MapPin,
  Users,
  Heart,
  CheckCircle2,
} from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { ExperienceCard } from "@/components/experience/experience-card";
import { OpenInMapsButton } from "@/components/common/open-in-maps-button";
import { buttonVariants } from "@/components/ui/button";
import {
  experiences,
  getExperienceById,
  getDestinationById,
} from "@/data";
import { routes } from "@/lib/routes";

export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  const destination = getDestinationById(experience.destinationId);

  const relatedExperiences = experiences
    .filter(
      (exp) =>
        exp.id !== experience.id &&
        exp.destinationId === experience.destinationId
    )
    .slice(0, 3);

  const formatPrice = (amount: number) =>
    `₹${amount.toLocaleString("en-IN")}`;

  const getHostTypeLabel = (hostType: string) => {
    const labels: Record<string, string> = {
      artisan: "Local Artisan",
      guide: "Local Guide",
      "family-workshop": "Family Workshop",
      "boat-collective": "Boat Collective",
      "heritage-guides": "Heritage Guides",
    };

    return labels[hostType] || "Local Experience Partner";
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-surface py-8">
        <PageContainer>
          <Link
            href={routes.public.experiences}
            className={buttonVariants({
              variant: "ghost",
              className: "mb-6 gap-2",
            })}
          >
            <ArrowLeft className="size-4" />
            Back to Experiences
          </Link>

          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {experience.title}
          </h1>

          <p className="mt-2 text-base text-muted-foreground">
            {destination?.name}, {destination?.location}
          </p>
        </PageContainer>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Experience Details */}
            <div className="space-y-8 lg:col-span-2">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={experience.imageUrl}
                  alt={experience.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  About This Experience
                </h2>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </div>

              {/* What You'll Experience */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  What You'll Experience
                </h2>

                <ul className="space-y-3">
                  {experience.whatYoullExperience.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-highlight" />

                        <span className="text-base text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Responsible Tourism */}
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Heart className="size-5 text-highlight" />

                  <h3 className="text-lg font-semibold text-foreground">
                    Responsible Tourism
                  </h3>
                </div>

                <p className="text-base text-muted-foreground">
                  {experience.responsibleTourism}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="size-5 fill-highlight text-highlight" />

                    <span className="text-lg font-semibold text-foreground">
                      {experience.rating.toFixed(1)}
                    </span>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    Excellent
                  </span>
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="size-4 text-muted-foreground" />

                    <span className="text-sm text-muted-foreground">
                      Duration
                    </span>

                    <span className="ml-auto text-sm font-medium text-foreground">
                      {experience.durationHours} hours
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="size-4 text-muted-foreground" />

                    <span className="text-sm text-muted-foreground">
                      Group Size
                    </span>

                    <span className="ml-auto text-sm font-medium text-foreground">
                      Small Group
                    </span>
                  </div>
                </div>

                <div className="mb-6 border-t border-border pt-4">
                  <p className="mb-1 text-sm text-muted-foreground">
                    Price per person
                  </p>

                  <p className="text-2xl font-semibold text-foreground">
                    {formatPrice(experience.price)}
                  </p>
                </div>

                <Link
                  href={routes.tourist.planner}
                  className={buttonVariants({
                    variant: "highlight",
                    className: "w-full gap-2",
                  })}
                >
                  Plan a Trip Around This Experience
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Host Information */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Your Host
                </h3>

                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent text-highlight">
                    <Users className="size-5" />
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      {experience.hostName}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {getHostTypeLabel(experience.hostType)}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {experience.isLocal
                    ? "A local experience partner committed to authentic cultural exchange and community benefits."
                    : "An experienced local provider dedicated to sharing authentic experiences."}
                </p>
              </div>

              {/* Location */}
              {destination && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Location
                  </h3>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />

                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {experience.locationName}
                      </p>

                      <p className="mb-4 text-sm text-muted-foreground">
                        {destination.location}
                      </p>

                      <OpenInMapsButton
                        latitude={experience.locationCoordinates.latitude}
                        longitude={experience.locationCoordinates.longitude}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Experiences */}
          {relatedExperiences.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                More Experiences in {destination?.name}
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedExperiences.map((relatedExp) => (
                  <ExperienceCard
                    key={relatedExp.id}
                    experience={relatedExp}
                    locationLabel={destination?.name ?? "Odisha"}
                  />
                ))}
              </div>
            </div>
          )}
        </PageContainer>
      </section>
    </main>
  );
}