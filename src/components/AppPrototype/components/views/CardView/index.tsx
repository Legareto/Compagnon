'use client';

import React from 'react';
import { StudentCard } from './StudentCard';
import { CardInfo } from './CardInfo';

export function CardView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Ma carte</h2>
      <StudentCard />
      <CardInfo />
    </div>
  );
}