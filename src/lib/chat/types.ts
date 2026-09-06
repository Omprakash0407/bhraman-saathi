/**
 * Chat types for Virām AI tourism assistant
 */

export type MessageRole = "user" | "assistant";

export type ChatAction = {
  type:
    | "view-destination"
    | "view-experience"
    | "open-maps"
    | "plan-trip";
  label: string;
  href?: string;
  data?: {
    latitude?: number;
    longitude?: number;
  };
};

export type ChatMessage = {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
  actions?: ChatAction[];
};

export type ChatResponse = {
  message: string;
  suggestions?: string[];
  actions?: ChatAction[];
};

export interface ChatService {
  sendMessage(message: string): Promise<ChatResponse>;
}
