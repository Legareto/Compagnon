import React from 'react';
import { Settings, User, MessageSquare, Info, LogOut } from 'lucide-react';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DrawerItemProps {
  icon: React.ElementType;
  label: string;
}

function DrawerItem({ icon: Icon, label }: DrawerItemProps) {
  return (
    <button className="w-full flex items-center gap-3 p-4 text-[#EDEFEF] hover:bg-primary/10 transition-colors rounded-lg">
      <Icon className="w-5 h-5 text-primary" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-50 rounded-[3rem]"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`absolute inset-y-0 left-0 w-[85%] bg-[#27282B] z-50 transform transition-transform duration-300 ease-in-out rounded-l-[3rem] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-[#EDEFEF] font-semibold text-lg">Tommy Pelletier</h3>
              <p className="text-[#EDEFEF]/70">Étudiant</p>
            </div>
          </div>

          <div className="space-y-2">
            <DrawerItem icon={Settings} label="Paramètres" />
            <DrawerItem icon={User} label="Modifier mon profil" />
            <DrawerItem icon={MessageSquare} label="Commentaires" />
            <DrawerItem icon={Info} label="À propos" />
            <DrawerItem icon={LogOut} label="Se déconnecter" />
          </div>
        </div>
      </div>
    </>
  );
}