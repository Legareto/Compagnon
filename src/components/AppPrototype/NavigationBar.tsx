import React from 'react';
import { LayoutGrid, BookOpen, Map, Bell, Menu } from 'lucide-react';

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const tabs = [
    { id: 'tableau', icon: LayoutGrid, label: 'Tableau' },
    { id: 'trousse', icon: BookOpen, label: 'Trousse' },
    { id: 'carte', icon: Map, label: 'Carte' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'menu', icon: Menu, label: 'Menu' }
  ];

  return (
    <div className="flex justify-between items-center px-4 py-2 border-t border-primary/20 bg-background">
      {tabs.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex flex-col items-center p-2 ${
            activeTab === id ? 'text-accent' : 'text-light/70'
          }`}
        >
          <Icon className="w-5 h-5 mb-1" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}