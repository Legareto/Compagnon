import React from 'react';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#27282B] text-light">
      {children}
    </div>
  );
}