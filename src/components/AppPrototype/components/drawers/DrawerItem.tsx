'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DrawerItemProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function DrawerItem({ icon: Icon, label, onClick }: DrawerItemProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 p-4 text-[#EDEFEF] hover:bg-primary/10 transition-colors rounded-lg"
    >
      <Icon className="w-5 h-5 text-primary" />
      <span className="font-medium">{label}</span>
    </button>
  );
}