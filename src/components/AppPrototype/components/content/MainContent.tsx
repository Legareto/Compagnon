"use client";

import React from "react";
import { ContentView } from "./ContentView";

export function MainContent() {
  return (
    <div className="bg-[#EDEFEF] h-[400px] overflow-y-auto app-scrollbar">
      <ContentView />
    </div>
  );
}
