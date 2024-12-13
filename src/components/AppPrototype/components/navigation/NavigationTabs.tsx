"use client";

import React from "react";
import { Gauge, Briefcase, Contact, FolderOpen, Menu } from "lucide-react";
import { TabItem } from "./TabItem";
import { AppPage } from "../../types";

interface NavigationTabsProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const tabs = [
  { id: "dashboard", icon: Gauge, label: "Tableau" },
  { id: "toolkit", icon: Briefcase, label: "Trousse" },
  { id: "folder", icon: FolderOpen, label: "Dossier" },
  { id: "card", icon: Contact, label: "Carte" },
  { id: "menu", icon: Menu, label: "Menu" },
] as const;

export function NavigationTabs({
  currentPage,
  onNavigate,
}: NavigationTabsProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      {tabs.map(({ id, icon, label }) => (
        <TabItem
          key={id}
          id={id}
          icon={icon}
          label={label}
          isActive={currentPage === id}
          onClick={() => onNavigate(id as AppPage)}
        />
      ))}
    </div>
  );
}
