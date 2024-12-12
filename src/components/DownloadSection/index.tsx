import React from 'react';
import { DownloadButton } from './DownloadButton';

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-[#27282B]/95">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-light">
          Prêt à Commencer?
        </h2>
        <p className="text-light/70 mb-12 max-w-2xl mx-auto font-inter">
          Téléchargez Compagnon d'études dès maintenant et transformez votre expérience d'apprentissage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DownloadButton store="App Store" />
          <DownloadButton store="Google Play" />
        </div>
      </div>
    </section>
  );
}