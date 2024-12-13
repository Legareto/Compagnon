import React from "react";
import { FeatureList } from "./components/FeatureList";
import { FeaturesHeader } from "./components/FeaturesHeader";

export function Features() {
  return (
    <section id="features" className="py-20 bg-[#3A3C3F]">
      <div className="container mx-auto px-6">
        <FeaturesHeader />
        <FeatureList />
      </div>
    </section>
  );
}
