import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Message } from '../types';

interface MessageItemProps {
  message: Message;
  onToggle: (id: string) => void;
}

export function MessageItem({ message, onToggle }: MessageItemProps) {
  return (
    <div className="border border-primary/20 rounded-lg mb-2 overflow-hidden">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer bg-primary/10 hover:bg-primary/20 transition-colors"
        onClick={() => onToggle(message.id)}
      >
        <span className="font-medium text-[#EDEFEF]">{message.title}</span>
        {message.isExpanded ? (
          <ChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary" />
        )}
      </div>
      {message.isExpanded && (
        <div className="p-3 bg-[#27282B]/50 text-[#EDEFEF]/70">
          {message.content}
        </div>
      )}
    </div>
  );
}