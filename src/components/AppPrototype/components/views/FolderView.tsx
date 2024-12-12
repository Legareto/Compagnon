import React from 'react';
import { FileEdit, UserPlus, CreditCard, MapPin, FileSearch } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ElementType;
  label: string;
}

function ActionButton({ icon: Icon, label }: ActionButtonProps) {
  return (
    <button className="w-full flex items-center gap-3 bg-[#27282B]/30 p-4 rounded-lg text-[#EDEFEF] hover:bg-[#27282B]/50 transition-colors">
      <Icon className="w-5 h-5 text-primary" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function FolderView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Mon dossier</h2>
      
      <div className="space-y-3">
        <ActionButton 
          icon={FileEdit} 
          label="Gérer mon admission" 
        />
        <ActionButton 
          icon={UserPlus} 
          label="M'inscrire" 
        />
        <ActionButton 
          icon={CreditCard} 
          label="Payer mes frais" 
        />
        <ActionButton 
          icon={MapPin} 
          label="Changer mon adresse" 
        />
        <ActionButton 
          icon={FileSearch} 
          label="Consulter mes examens" 
        />
      </div>
    </div>
  );
}