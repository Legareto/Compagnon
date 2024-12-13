import React from "react";
import { Smartphone, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <header className="pt-40 pb-28 px-6 bg-[#1A1B1D]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="20"
            viewBox="0 0 60 20"
            className="mb-12 size-1/6"
          >
            <polygon
              fill="#e84c23"
              points="46.16,0.55 46.16,3.7 51.5,3.7 51.5,15.97 54.64,15.97 54.64,3.7 60,3.7 60,0.55 "
            />
            <polygon
              fill="#e84c23"
              points="37.69,0.55 30.96,15.97 34.18,15.97 39.59,3.63 45.01,15.97 48.24,15.97 41.5,0.55 "
            />
            <path
              fill="#ffffff"
              d="M23.11,0.01c0,0-6.64-0.45-6.64,6.5c0,0.03,0,3.36,0,3.56c0,5.04,3.48,6.19,5.39,6.44l1.25-2.83l2.83,6.4h3.23l-1.98-4.56c1.38-0.88,2.58-2.5,2.58-5.46c0-0.2,0-2.99,0-3.51c0-0.02,0-0.03,0-0.05C29.74-0.44,23.11,0.01,23.11,0.01zM26.57,10.05c0,0.4,0,1.65-0.63,2.64l-0.91-2.1h-3.81l-0.91,2.1c-0.63-1.01-0.63-2.26-0.63-2.66c0-0.78,0-3.61,0-3.61c0-0.85,0-3.94,3.44-3.94c3.46,0,3.46,3.09,3.46,3.94V10.05z"
            />
            <path
              fill="#ffffff"
              d="M10.1,10.07c0,0.68,0,4.04-3.46,4.04c-3.44,0-3.44-3.36-3.44-4.04c0-0.62,0-8.82,0-9.45H0c0,0.63,0,9.3,0,9.48c0,6.95,6.64,6.5,6.64,6.5s6.64,0.45,6.64-6.5c0-0.18,0-8.77,0-9.48H10.1C10.1,1.25,10.1,9.52,10.1,10.07z"
            />
          </svg>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Smartphone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              Bientôt disponible sur iOS et Android
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-primary">
            <span className="text-light">Compagnon d'études</span> Symbiose
          </h1>
          <p className="text-xl text-light/70 mb-8 font-inter">
            Une application intuitive qui intègre ton expérience étudiante
            universitaire et qui t'accompagne vers ta réussite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group flex items-center justify-center gap-2 bg-primary hover:bg-black/60 text-light px-8 py-3 rounded-lg font-semibold transition-colors">
              <a href="#beta">Participer à la bêta</a>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              <a href="#features">En savoir plus</a>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl blur-3xl -z-10" />
          <img
            src="https://images.unsplash.com/photo-1514996550219-62672472d03b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Étudiant debout consultant son téléphone"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-background"
          />
        </div>
      </div>
    </header>
  );
}
