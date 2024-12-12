import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="pt-24 pb-16 px-6 bg-[#1A1B1D]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Smartphone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Bientôt disponible sur iOS et Android</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-light">
            Votre <span className="text-primary">compagnon d'études</span> Symbiose
          </h1>
          <p className="text-xl text-light/70 mb-8 font-inter">
            Une application intuitive qui accompagne votre expérience universitaire vers la réussite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-light px-8 py-3 rounded-lg font-semibold transition-colors">
              M'inscrire à la BETA
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl blur-3xl -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
            alt="Étudiant debout consultant son téléphone" 
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-8 border-background"
          />
        </div>
      </div>
    </header>
  );
}