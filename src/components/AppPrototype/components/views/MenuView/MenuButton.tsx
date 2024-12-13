'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function MenuButton({ icon: Icon, label, onClick }: MenuButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 bg-[#27282B]/30 p-4 rounded-lg text-[#EDEFEF] hover:bg-[#27282B]/50 transition-colors"
    >
      <Icon className="w-5 h-5 text-primary" />
      <span className="font-medium">{label}</span>
    </button>
  );
}