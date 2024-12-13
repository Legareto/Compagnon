import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Message } from "../types";

interface MessageItemProps {
  message: Message;
  onToggle: (id: string) => void;
}

export function MessageItem({ message, onToggle }: MessageItemProps) {
  return (
    <div className="rounded-lg mb-4 overflow-hidden font-inter">
      <div
        className="flex items-center justify-between p-3 cursor-pointer bg-[#128DB9]"
        onClick={() => onToggle(message.id)}
      >
        <span className="font-medium text-[#EDEFEF]">{message.title}</span>
        {message.isExpanded ? (
          <ChevronUp className="w-5 h-5 text-white" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white" />
        )}
      </div>
      {message.isExpanded && (
        <div className="p-3 bg-[#CDCDCD]/50 text-black">{message.content}</div>
      )}
    </div>
  );
}
