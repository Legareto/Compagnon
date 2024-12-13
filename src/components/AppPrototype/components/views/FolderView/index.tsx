'use client';

import React from 'react';
import { FileEdit, UserPlus, CreditCard, MapPin, FileSearch } from 'lucide-react';
import { FolderButton } from './FolderButton';

export function FolderView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Mon dossier</h2>
      
      <div className="space-y-3">
        <FolderButton icon={FileEdit} label="Gérer mon admission" />
        <FolderButton icon={UserPlus} label="M'inscrire" />
        <FolderButton icon={CreditCard} label="Payer mes frais" />
        <FolderButton icon={MapPin} label="Changer mon adresse" />
        <FolderButton icon={FileSearch} label="Consulter mes examens" />
      </div>
    </div>
  );
}