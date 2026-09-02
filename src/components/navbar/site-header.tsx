"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/common/brand-mark";
import { PageContainer } from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: routes.public.explore, label: "Explore" },
  { href: routes.tourist.planner, label: "Plan Trip" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <PageContainer className="flex h-16 items-center justify-between gap-4">
        <Link href={routes.public.home} aria-label="Bhraman Saathi home">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={routes.tourist.planner}
            className={buttonVariants({
              variant: "highlight",
              className: "h-10 px-4",
            })}
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </PageContainer>

      <div
        id="mobile-navigation"
        className={cn("border-t border-border bg-background md:hidden", !isOpen && "hidden")}
      >
        <PageContainer className="flex flex-col gap-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-1 text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={routes.tourist.planner}
            className={buttonVariants({
              variant: "highlight",
              className: "h-10 justify-center px-4",
            })}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </PageContainer>
      </div>
    </header>
  );
}
