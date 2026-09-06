"use client";

import { useState } from "react";

import { ChatFloatingButton } from "./chat-floating-button";
import { ChatWindow } from "./chat-window";

export function ChatProvider() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <ChatFloatingButton onClick={handleToggle} isOpen={isOpen} />
      <ChatWindow isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
