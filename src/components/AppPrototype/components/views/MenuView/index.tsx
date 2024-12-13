'use client';

import React from 'react';
import { Library, Mail, BookOpen, LayoutGrid } from 'lucide-react';
import { MenuButton } from './MenuButton';

export function MenuView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Menu</h2>
      
      <div className="space-y-3">
        <MenuButton icon={Library} label="Bibliothèque" />
        <MenuButton icon={Mail} label="Outlook" />
        <MenuButton icon={BookOpen} label="Moodle" />
        <MenuButton icon={LayoutGrid} label="Microsoft 365" />
      </div>
    </div>
  );
}