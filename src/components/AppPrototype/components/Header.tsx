import React, { useState } from 'react';
import { User, Bell } from 'lucide-react';
import { ProfileDrawer } from './ProfileDrawer';
import { NotificationsDrawer } from './NotificationsDrawer';
import { useNotifications } from '../hooks/useNotifications';

export function Header() {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isNotificationsDrawerOpen, setIsNotificationsDrawerOpen] = useState(false);
  const { count: notificationCount } = useNotifications();

  return (
    <>
      <div className="p-4 bg-[#27282B]">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setIsProfileDrawerOpen(true)}
            className="hover:bg-primary/10 p-1 rounded-full transition-colors"
          >
            <User className="w-6 h-6 text-[#EDEFEF]" />
          </button>
          <h3 className="text-primary font-bold text-lg">Compagnon d'études</h3>
          <button
            onClick={() => setIsNotificationsDrawerOpen(true)}
            className="hover:bg-primary/10 p-1 rounded-full transition-colors relative"
          >
            <Bell className="w-6 h-6 text-[#EDEFEF]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-[10px] text-[#EDEFEF] font-bold">
              {notificationCount}
            </span>
          </button>
        </div>
        <p className="text-[#EDEFEF] text-lg">Bonjour Tommy!</p>
      </div>

      <ProfileDrawer 
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
      />

      <NotificationsDrawer
        isOpen={isNotificationsDrawerOpen}
        onClose={() => setIsNotificationsDrawerOpen(false)}
      />
    </>
  );
}