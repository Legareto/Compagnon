import React from "react";
import { Barcode } from "lucide-react";

export function CardView() {
  return (
    <div className="space-y-4 font-inter">
      <h2 className="text-xl font-bold text-[#128DB9]">Ma carte numérique</h2>
      <div className="bg-[#27282B] p-6 rounded-lg space-y-6">
        <div className="space-y-2 text-center">
          <h3 className="text-[#EDEFEF] text-lg font-semibold">
            Tommy Pelletier
          </h3>
          <p className="text-[#EDEFEF]/70 text-sm">Carte étudiante</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Barcode className="w-48 h-12 text-[#EDEFEF]" />
          <p className="text-[#EDEFEF]/70 font-mono text-sm">T024562</p>
          <p>Expiration : 31 août 2025</p>
        </div>
      </div>
    </div>
  );
}
