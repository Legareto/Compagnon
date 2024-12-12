import React from 'react';
import { FEATURES_SECTION } from '../constants';

export function FeaturesHeader() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-center mb-4 text-light">
        {FEATURES_SECTION.TITLE}
      </h2>
      <p className="text-light/70 text-center mb-16 max-w-2xl mx-auto font-inter">
        {FEATURES_SECTION.SUBTITLE}
      </p>
    </>
  );
}