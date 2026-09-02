"use client";

import { type FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  className?: string;
};

export function SearchBar({ className }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    const href = trimmed
      ? `${routes.public.explore}?q=${encodeURIComponent(trimmed)}`
      : routes.public.explore;
    router.push(href);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full items-center gap-2 rounded-2xl border border-border bg-background p-2 shadow-card",
        className,
      )}
    >
      <label htmlFor="destination-search" className="sr-only">
        Where do you want to go?
      </label>
      <Search className="ml-2 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
      <input
        id="destination-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Where do you want to go?"
        className="h-11 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
      />
      <Button type="submit" variant="highlight" className="h-11 px-4">
        Search
      </Button>
    </form>
  );
}
