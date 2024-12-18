"use client";

import React from "react";
import { BetaButton } from "./BetaButton";

export function BetaSection() {
  const handleBetaSignup = React.useCallback(() => {
    window.location.href =
      "mailto:projetsymbiose@uqat.ca?subject=Inscription%20Beta&body=Je%20souhaite%20participer%20à%20la%20beta%20du%20Compagnon%20d'études.";
  }, []);

  return (
    <section id="beta" className="py-20 bg-[#27282B]/95">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-light">
            Rejoignez la bêta
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-12 font-inter">
            Participe au développement du compagnon d&apos;études en
            t&apos;inscrivant à la bêta fermée et obtient ainsi un accès
            anticipé à l&apos;application mobile du Compagnon d&apos;études
            Symbiose.
          </p>
          <BetaButton onClick={handleBetaSignup} />
        </div>
      </div>
    </section>
  );
}
