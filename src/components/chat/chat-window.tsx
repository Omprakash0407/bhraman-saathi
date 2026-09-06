"use client";

import { useEffect, useRef, useState } from "react";
import { X, Bot } from "lucide-react";

import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { SuggestedQuestions } from "./suggested-questions";
import { mockChatService } from "@/lib/chat/mock-chat-service";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";
import { cn } from "@/lib/utils";

type ChatWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const defaultSuggestions = [
  "Plan a 3-day trip to Puri",
  "Show me hidden gems",
  "What can I experience in Raghurajpur?",
  "How can I travel responsibly?",
];

export function ChatWindow({ isOpen, onClose, className }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(defaultSuggestions);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Add welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessageType = {
        id: generateId(),
        role: "assistant",
        content: "Namaste! I'm Saathi 👋\n\nAsk me about destinations, hidden gems, local experiences, or trip planning.",
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  async function handleSendMessage(content: string) {
    // Add user message
    const userMessage: ChatMessageType = {
      id: generateId(),
      role: "user",
      content,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setSuggestions([]);

    try {
      const response = await mockChatService.sendMessage(content);

      // Add assistant message
      const assistantMessage: ChatMessageType = {
        id: generateId(),
        role: "assistant",
        content: response.message,
        actions: response.actions,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Update suggestions if provided
      if (response.suggestions && response.suggestions.length > 0) {
        setSuggestions(response.suggestions);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessageType = {
        id: generateId(),
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try again.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSuggestionSelect(question: string) {
    handleSendMessage(question);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-20 right-4 z-50 flex w-[calc(100%-2rem)] flex-col rounded-2xl border border-border bg-card shadow-card md:bottom-4 md:right-4 md:w-[400px] md:h-[600px] h-[calc(100vh-4rem)]",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-highlight text-highlight-foreground">
            <Bot className="size-4" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Saathi</h3>
            <p className="text-xs text-muted-foreground">
              Your Virām travel companion
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close chat"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-highlight text-highlight-foreground">
              <Bot className="size-4" aria-hidden="true" />
            </div>
            <span>Saathi is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {!isLoading && suggestions.length > 0 && messages.length > 1 && (
        <div className="border-t border-border px-4 py-3">
          <SuggestedQuestions
            questions={suggestions}
            onSelect={handleSuggestionSelect}
          />
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border px-4 py-3">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}
