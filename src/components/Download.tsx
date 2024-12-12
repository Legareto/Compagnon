import React from 'react';
import { Download } from 'lucide-react';

export function Download() {
  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-light">Prêt à Commencer?</h2>
        <p className="text-light/70 mb-12 max-w-2xl mx-auto">
          Téléchargez Compagnon d'études dès maintenant et transformez votre expérience d'apprentissage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-light px-8 py-3 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            App Store
          </button>
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-light px-8 py-3 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}