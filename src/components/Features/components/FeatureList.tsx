import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from '../data/featureData';

export function FeatureList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}