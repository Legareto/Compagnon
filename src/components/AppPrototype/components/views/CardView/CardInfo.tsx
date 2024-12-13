'use client';

import React from 'react';

export function CardInfo() {
  return (
    <div className="bg-[#27282B]/30 p-4 rounded-lg">
      <h4 className="text-[#EDEFEF] font-medium mb-3">Informations</h4>
      <ul className="space-y-2 text-[#EDEFEF]/70 text-sm">
        <li>• Programme : Baccalauréat en sciences</li>
        <li>• Statut : Temps plein</li>
        <li>• Expiration : 31 août 2025</li>
      </ul>
    </div>
  );
}