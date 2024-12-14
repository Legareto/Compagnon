"use client";

import React from "react";
import { useAppState } from "../../providers/AppStateProvider";
import { NavigationTabs } from "./NavigationTabs";

export function NavigationBar() {
  const { navigation } = useAppState();
  const { currentPage, navigateTo } = navigation;

  return (
    <div className="border-t border-primary/20 bg-[#27282B]">
      <NavigationTabs currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}
