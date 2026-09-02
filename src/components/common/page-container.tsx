import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer";
  id?: string;
};

export function PageContainer({
  children,
  className,
  as: Component = "div",
  id,
}: PageContainerProps) {
  return (
    <Component
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
    >
      {children}
    </Component>
  );
}
