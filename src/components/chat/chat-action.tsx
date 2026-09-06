import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { OpenInMapsButton } from "@/components/common/open-in-maps-button";
import { cn } from "@/lib/utils";
import type { ChatAction } from "@/lib/chat/types";

type ChatActionProps = {
  action: ChatAction;
};

export function ChatAction({ action }: ChatActionProps) {
  // Handle Maps action
  if (action.type === "open-maps" && action.data && action.data.latitude && action.data.longitude) {
    return (
      <OpenInMapsButton
        latitude={action.data.latitude}
        longitude={action.data.longitude}
      />
    );
  }

  // Handle link-based actions
  if (action.href) {
    return (
      <Link
        href={action.href}
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
          })
        )}
      >
        {action.label}
      </Link>
    );
  }

  return null;
}
