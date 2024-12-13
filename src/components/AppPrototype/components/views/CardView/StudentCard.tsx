'use client';

import React from 'react';
import { Barcode } from 'lucide-react';

export function StudentCard() {
  return (
    <div className="bg-[#27282B]/30 p-6 rounded-lg space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-[#EDEFEF] text-lg font-semibold">Tommy Pelletier</h3>
        <p className="text-[#EDEFEF]/70 text-sm">Carte étudiante</p>
      </div>
      
      <div className="flex flex-col items-center space-y-2">
        <Barcode className="w-48 h-12 text-[#EDEFEF]" />
        <p className="text-[#EDEFEF]/70 font-mono text-sm">1234 5678 9012 3456</p>
      </div>
    </div>
  );
}