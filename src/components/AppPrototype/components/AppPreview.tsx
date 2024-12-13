'use client';

import React from 'react';
import { Header } from './header/Header';
import { MainContent } from './content/MainContent';
import { NavigationBar } from './navigation/NavigationBar';
import { AppStateProvider } from '../providers/AppStateProvider';

function AppPreview() {
  return (
    <div className="max-w-sm mx-auto relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3.5rem] blur-xl opacity-50" />
      
      <div className="bg-[#27282B] rounded-[3.5rem] overflow-hidden border-8 border-[#27282B] shadow-xl relative">
        <AppStateProvider>
          <Header />
          <MainContent />
          <NavigationBar />
        </AppStateProvider>
      </div>
    </div>
  );
}

export default AppPreview;