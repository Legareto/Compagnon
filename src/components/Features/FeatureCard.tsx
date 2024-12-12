import React from 'react';
import { Feature } from './types';

export function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="bg-background/50 p-6 rounded-xl border border-primary/20 transition-all duration-200 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/10">
      <div className="mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-light">{title}</h3>
      <p className="text-light/70">{description}</p>
    </div>
  );
}