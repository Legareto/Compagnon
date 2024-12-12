import React from 'react';
import { StatusBar } from './StatusBar';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { NavigationBar } from './NavigationBar';
import { useNavigation } from '../hooks/useNavigation';

export function AppPreview() {
  const { currentPage, navigateTo } = useNavigation();

  return (
    <div className="max-w-sm mx-auto relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3.5rem] blur-xl opacity-50" />
      
      <div className="bg-[#27282B] rounded-[3rem] overflow-hidden border-8 border-[#27282B] shadow-xl relative">
        <StatusBar />
        <Header />
        <MainContent currentPage={currentPage} />
        <NavigationBar currentPage={currentPage} onNavigate={navigateTo} />
      </div>
    </div>
  );
}