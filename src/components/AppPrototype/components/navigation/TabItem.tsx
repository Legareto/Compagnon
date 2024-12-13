'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabItemProps {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabItem({ id, icon: Icon, label, isActive, onClick }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-2 ${
        isActive ? 'text-primary' : 'text-[#EDEFEF]/70'
      }`}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-xs">{label}</span>
    </button>
  );
}