"use client";

import React from "react";
import { User, Bell } from "lucide-react";
import { ProfileDrawer } from "./ProfileDrawer";
import { NotificationsDrawer } from "./NotificationsDrawer";
import { useAppState } from "../providers/AppStateProvider";

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const { notifications } = useAppState();

  return (
    <div className="p-4 bg-[#27282B]">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsProfileOpen(true)}
          className="hover:bg-primary/10 p-1 rounded-full transition-colors"
        >
          <User className="w-6 h-6 text-[#EDEFEF]" />
        </button>
        <h3 className="text-primary font-bold text-lg">
          Compagnon d&apos;études
        </h3>
        <button
          onClick={() => setIsNotificationsOpen(true)}
          className="hover:bg-primary/10 p-1 rounded-full transition-colors relative"
        >
          <Bell className="w-6 h-6 text-[#EDEFEF]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-[10px] text-[#EDEFEF] font-bold">
            {notifications.notifications.length}
          </span>
        </button>
      </div>
      <p className="text-[#EDEFEF] text-lg">Bonjour Tommy!</p>

      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
}
