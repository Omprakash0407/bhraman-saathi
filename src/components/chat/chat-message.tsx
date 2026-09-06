import { Bot, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { ChatAction } from "./chat-action";
import type { ChatMessage } from "@/lib/chat/types";

type ChatMessageProps = {
  message: ChatMessage;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-highlight text-highlight-foreground">
          <Bot className="size-4" aria-hidden="true" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-highlight text-highlight-foreground"
            : "bg-muted text-foreground"
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        {!isUser && message.actions && message.actions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.actions.map((action, index) => (
              <ChatAction key={index} action={action} />
            ))}
          </div>
        )}
      </div>

      {isUser && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <User className="size-4" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
