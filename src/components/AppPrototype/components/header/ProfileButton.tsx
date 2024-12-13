'use client';

import React from 'react';
import { User } from 'lucide-react';

interface ProfileButtonProps {
  onClick: () => void;
}

export function ProfileButton({ onClick }: ProfileButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="hover:bg-primary/10 p-1 rounded-full transition-colors"
    >
      <User className="w-6 h-6 text-[#EDEFEF]" />
    </button>
  );
}