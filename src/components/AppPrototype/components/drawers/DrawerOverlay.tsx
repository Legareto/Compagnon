'use client';

import React from 'react';

interface DrawerOverlayProps {
  onClose: () => void;
}

export function DrawerOverlay({ onClose }: DrawerOverlayProps) {
  return (
    <div 
      className="absolute inset-0 bg-black/50 rounded-[3rem]"
      onClick={onClose}
    />
  );
}