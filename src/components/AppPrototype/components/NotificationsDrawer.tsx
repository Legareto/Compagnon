import React from 'react';
import { Bell } from 'lucide-react';
import { useNotifications } from '../hooks/useNotifications';

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NotificationItemProps {
  title: string;
  time: string;
}

function NotificationItem({ title, time }: NotificationItemProps) {
  return (
    <div className="p-4 bg-[#27282B]/30 rounded-lg space-y-1">
      <p className="text-[#EDEFEF]">{title}</p>
      <p className="text-[#EDEFEF]/50 text-sm">{time}</p>
    </div>
  );
}

export function NotificationsDrawer({ isOpen, onClose }: NotificationsDrawerProps) {
  const { notifications } = useNotifications();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-50 rounded-[3rem]"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`absolute inset-y-0 right-0 w-[85%] bg-[#27282B] z-50 transform transition-transform duration-300 ease-in-out rounded-r-[3rem] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-[#EDEFEF] font-semibold text-lg">Notifications</h3>
              <p className="text-[#EDEFEF]/70">Vos dernières notifications</p>
            </div>
          </div>

          <div className="space-y-3">
            {notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                title={notification.title}
                time={notification.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}