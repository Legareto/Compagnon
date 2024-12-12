import React from 'react';
import { AppPage } from '../types';
import { DashboardView } from './views/DashboardView';
import { ToolkitView } from './views/ToolkitView';
import { CardView } from './views/CardView';
import { FolderView } from './views/FolderView';
import { MenuView } from './views/MenuView';

interface MainContentProps {
  currentPage: AppPage;
}

export function MainContent({ currentPage }: MainContentProps) {
  return (
    <div className="bg-background-light/5 h-[400px] overflow-y-auto app-scrollbar">
      <div className="p-4">
        {currentPage === 'dashboard' && <DashboardView />}
        {currentPage === 'toolkit' && <ToolkitView />}
        {currentPage === 'card' && <CardView />}
        {currentPage === 'folder' && <FolderView />}
        {currentPage === 'menu' && <MenuView />}
      </div>
    </div>
  );
}