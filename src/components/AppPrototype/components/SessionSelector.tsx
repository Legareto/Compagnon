import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SessionSelectorProps {
  session: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function SessionSelector({ session, onPrevious, onNext }: SessionSelectorProps) {
  return (
    <div className="flex items-center justify-between bg-[#27282B]/50 p-2 rounded-lg mb-2">
      <button 
        onClick={onPrevious}
        className="p-1 hover:bg-primary/10 rounded-full transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-[#EDEFEF]" />
      </button>
      <div className="text-center">
        <div className="text-sm text-[#EDEFEF]/70">{session}</div>
      </div>
      <button 
        onClick={onNext}
        className="p-1 hover:bg-primary/10 rounded-full transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-[#EDEFEF]" />
      </button>
    </div>
  );
}