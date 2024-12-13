'use client';

import React from 'react';
import { LayoutGrid, Briefcase, CreditCard, Menu } from 'lucide-react';
import { useAppState } from '../providers/AppStateProvider';

export function NavigationBar() {
  const { navigation } = useAppState();
  const { currentPage, navigateTo } = navigation;

  const tabs = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Tableau' },
    { id: 'toolkit', icon: Briefcase, label: 'Trousse' },
    { id: 'card', icon: CreditCard, label: 'Carte' },
    { id: 'folder', icon: Menu, label: 'Dossier' },
    { id: 'menu', icon: Menu, label: 'Menu' }
  ];

  return (
    <div className="flex justify-between items-center px-4 py-2 border-t border-primary/20 bg-[#27282B]">
      {tabs.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => navigateTo(id as any)}
          className={`flex flex-col items-center p-2 ${
            currentPage === id ? 'text-primary' : 'text-[#EDEFEF]/70'
          }`}
        >
          <Icon className="w-5 h-5 mb-1" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}