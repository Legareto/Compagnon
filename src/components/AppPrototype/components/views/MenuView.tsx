import React from 'react';
import { Library, Mail, BookOpen, LayoutGrid } from 'lucide-react';

interface MenuLinkProps {
  icon: React.ElementType;
  label: string;
}

function MenuLink({ icon: Icon, label }: MenuLinkProps) {
  return (
    <button className="w-full flex items-center gap-3 bg-[#27282B]/30 p-4 rounded-lg text-[#EDEFEF] hover:bg-[#27282B]/50 transition-colors">
      <Icon className="w-5 h-5 text-primary" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function MenuView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Menu</h2>
      
      <div className="space-y-3">
        <MenuLink 
          icon={Library} 
          label="Bibliothèque" 
        />
        <MenuLink 
          icon={Mail} 
          label="Outlook" 
        />
        <MenuLink 
          icon={BookOpen} 
          label="Moodle" 
        />
        <MenuLink 
          icon={LayoutGrid} 
          label="Microsoft 365" 
        />
      </div>
    </div>
  );
}