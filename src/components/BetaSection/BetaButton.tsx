import React from 'react';
import { Send } from 'lucide-react';

interface BetaButtonProps {
  onClick: () => void;
}

export function BetaButton({ onClick }: BetaButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-light px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
    >
      Rejoindre la Beta
      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}