import { Compass } from "lucide-react";

import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  showTagline?: boolean;
};

export function BrandMark({ className, showTagline = false }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"
      >
        <Compass className="size-5" strokeWidth={2} />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="font-heading text-base font-semibold tracking-tight text-foreground">
          {brand.name}
        </span>
        {showTagline ? (
          <span className="text-caption text-muted-foreground">Travel companion</span>
        ) : null}
      </div>
    </div>
  );
}
