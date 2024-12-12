import React from 'react';
import { AppPreview } from './components/AppPreview';

export function AppPrototype() {
  return (
    <section id="interface" className="py-20 bg-[#EDEFEF]/90">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 text-[#27282B]">
          Découvrez l'interface du compagnon d'études
        </h2>
        <p className="text-[#27282B]/70 text-center mb-16 max-w-2xl mx-auto font-inter">
          Explorez l'interface intuitive et découvrez comment le compagnon d'études simplifie votre vie étudiante
        </p>
        <AppPreview />
      </div>
    </section>
  );
}