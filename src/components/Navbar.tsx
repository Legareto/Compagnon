import React from "react";
import { Smartphone, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white font-inter fixed w-full z-[999] border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Smartphone className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-black underline decoration-primary decoration-2">
            <a href="/">Compagnon d&apos;études</a>
          </span>
        </div>
        <div className="hidden md:flex space-x-12">
          <a
            href="#features"
            className="text-black font-bold hover:text-primary underline underline-offset-4 decoration-2 transition-colors"
          >
            Les fonctionnalités
          </a>
          <a
            href="#interface"
            className="text-black font-bold hover:text-primary underline underline-offset-4 decoration-2 transition-colors"
          >
            L&apos;interface
          </a>
          <a
            href="#beta"
            className="text-black font-bold hover:text-primary underline underline-offset-4 decoration-2 transition-colors"
          >
            Participer à la bêta
          </a>
        </div>
        <Menu className="md:hidden w-6 h-6 text-light" />
      </div>
    </nav>
  );
}
