import { type FormEvent, useRef, useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
  className?: string;
};

export function ChatInput({ onSend, disabled = false, className }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = message.trim();
    if (trimmed && !disabled) {
      onSend(trimmed);
      setMessage("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex items-end gap-2", className)}
    >
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything about travel..."
        disabled={disabled}
        rows={1}
        className="flex min-h-[44px] flex-1 resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        style={{ maxHeight: "120px" }}
      />
      <Button
        type="submit"
        variant="highlight"
        size="icon"
        disabled={disabled || !message.trim()}
        aria-label="Send message"
      >
        <Send className="size-4" />
      </Button>
    </form>
  );
}
