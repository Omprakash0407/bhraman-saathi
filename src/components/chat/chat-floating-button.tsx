"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatFloatingButtonProps = {
  onClick: () => void;
  isOpen?: boolean;
  className?: string;
};

export function ChatFloatingButton({
  onClick,
  isOpen = false,
  className,
}: ChatFloatingButtonProps) {
  return (
    <Button
      type="button"
      variant="highlight"
      size="icon-lg"
      onClick={onClick}
      className={cn(
        "fixed bottom-4 right-4 z-40 size-14 shadow-lg transition-transform hover:scale-105 md:bottom-4 md:right-4",
        className
      )}
      aria-label={isOpen ? "Close Saathi" : "Open Saathi"}
    >
      <MessageCircle className="size-6" />
    </Button>
  );
}
