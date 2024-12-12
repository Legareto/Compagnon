import React from 'react';
import { Smartphone, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-background fixed w-full z-50 border-b border-primary/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Smartphone className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-light">Compagnon d'études</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-light hover:text-primary transition-colors">Fonctionnalités</a>
          <a href="#interface" className="text-light hover:text-primary transition-colors">Interface</a>
          <a href="#beta" className="text-light hover:text-primary transition-colors">M'inscrire à la Beta</a>
        </div>
        <Menu className="md:hidden w-6 h-6 text-light" />
      </div>
    </nav>
  );
}