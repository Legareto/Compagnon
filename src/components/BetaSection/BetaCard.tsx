import React from 'react';
import { BetaCardProps } from './types';

export function BetaCard({ icon, title, description }: BetaCardProps) {
  return (
    <div className="bg-background/50 p-6 rounded-xl border border-primary/20">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-light">{title}</h3>
      <p className="text-light/70 text-sm">{description}</p>
    </div>
  );
}