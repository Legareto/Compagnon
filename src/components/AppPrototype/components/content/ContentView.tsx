'use client';

import React from 'react';
import { useAppState } from '../../providers/AppStateProvider';
import { DashboardView } from '../views/DashboardView';
import { ToolkitView } from '../views/ToolkitView';
import { CardView } from '../views/CardView';
import { FolderView } from '../views/FolderView';
import { MenuView } from '../views/MenuView';

export function ContentView() {
  const { navigation } = useAppState();
  const { currentPage } = navigation;

  return (
    <div className="p-4">
      {currentPage === 'dashboard' && <DashboardView />}
      {currentPage === 'toolkit' && <ToolkitView />}
      {currentPage === 'card' && <CardView />}
      {currentPage === 'folder' && <FolderView />}
      {currentPage === 'menu' && <MenuView />}
    </div>
  );
}