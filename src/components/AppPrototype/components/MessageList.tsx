import React from "react";
import { MessageItem } from "./MessageItem";
import { useMessages } from "../hooks/useMessages";

export function MessageList() {
  const { messages, toggleMessage } = useMessages();

  return (
    <div className="mb-6">
      <h4 className="text-[#128DB9] font-bold mb-2">Messages importants</h4>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          onToggle={toggleMessage}
        />
      ))}
    </div>
  );
}
