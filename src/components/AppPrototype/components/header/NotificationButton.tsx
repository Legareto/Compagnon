'use client';

import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationButtonProps {
  onClick: () => void;
  count: number;
}

export function NotificationButton({ onClick, count }: NotificationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-primary/10 p-1 rounded-full transition-colors relative"
    >
      <Bell className="w-6 h-6 text-[#EDEFEF]" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-[10px] text-[#EDEFEF] font-bold">
        {count}
      </span>
    </button>
  );
}