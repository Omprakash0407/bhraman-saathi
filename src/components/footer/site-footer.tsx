import Link from "next/link";

import { BrandMark } from "@/components/common/brand-mark";
import { PageContainer } from "@/components/common/page-container";
import { brand } from "@/lib/brand";
import { routes } from "@/lib/routes";

const footerLinks = [
  { href: routes.public.explore, label: "Explore" },
  { href: routes.public.destinations, label: "Destinations" },
  { href: routes.public.experiences, label: "Experiences" },
  { href: routes.public.hotels, label: "Hotels" },
  { href: routes.tourist.planner, label: "Plan Trip" },
  { href: routes.public.about, label: "About" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <PageContainer className="grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <BrandMark showTagline />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{brand.shortDescription}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-foreground">Explore the ecosystem</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
      <div className="border-t border-border">
        <PageContainer className="flex flex-col gap-2 py-4 text-caption text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Smart India Hackathon 2026 · PS 26204.</p>
          <p>Frontend prototype · mock data only.</p>
        </PageContainer>
      </div>
    </footer>
  );
}
