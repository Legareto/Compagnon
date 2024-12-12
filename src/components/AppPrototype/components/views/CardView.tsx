import React from 'react';
import { Barcode } from 'lucide-react';

export function CardView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Ma carte</h2>
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
      
      <div className="bg-[#27282B]/30 p-4 rounded-lg">
        <h4 className="text-[#EDEFEF] font-medium mb-3">Informations</h4>
        <ul className="space-y-2 text-[#EDEFEF]/70 text-sm">
          <li>• Programme : Baccalauréat en sciences</li>
          <li>• Statut : Temps plein</li>
          <li>• Expiration : 31 août 2025</li>
        </ul>
      </div>
    </div>
  );
}