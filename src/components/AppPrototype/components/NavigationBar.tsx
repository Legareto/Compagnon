import React from 'react';
import { LayoutGrid, Briefcase, FolderOpen, CreditCard, Menu } from 'lucide-react';
import { AppPage } from '../types';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface NavigationBarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

function NavItem({ icon: Icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center p-2 ${isActive ? 'text-primary' : 'text-[#EDEFEF]/70'}`}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-xs">{label}</span>
    </button>
  );
}

export function NavigationBar({ currentPage, onNavigate }: NavigationBarProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-t border-primary/20 bg-[#27282B]">
      <NavItem 
        icon={LayoutGrid} 
        label="Tableau" 
        isActive={currentPage === 'dashboard'}
        onClick={() => onNavigate('dashboard')}
      />
      <NavItem 
        icon={Briefcase} 
        label="Trousse" 
        isActive={currentPage === 'toolkit'}
        onClick={() => onNavigate('toolkit')}
      />
      <NavItem 
        icon={FolderOpen} 
        label="Dossier" 
        isActive={currentPage === 'folder'}
        onClick={() => onNavigate('folder')}
      />
      <NavItem 
        icon={CreditCard} 
        label="Carte" 
        isActive={currentPage === 'card'}
        onClick={() => onNavigate('card')}
      />
      <NavItem 
        icon={Menu} 
        label="Menu" 
        isActive={currentPage === 'menu'}
        onClick={() => onNavigate('menu')}
      />
    </div>
  );
}