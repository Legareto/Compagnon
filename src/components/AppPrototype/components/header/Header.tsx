"use client";

import React from "react";
import { useAppState } from "../../providers/AppStateProvider";
import { ProfileButton } from "./ProfileButton";
import { NotificationButton } from "./NotificationButton";
import { ProfileDrawer } from "../drawers/ProfileDrawer";
import { NotificationsDrawer } from "../drawers/NotificationsDrawer";

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const { notifications } = useAppState();

  return (
    <div className="p-4 bg-[#27282B] font-inter">
      <div className="flex items-center justify-between mb-4">
        <ProfileButton onClick={() => setIsProfileOpen(true)} />
        <h3 className="text-primary font-bold text-lg">
          Compagnon d&apos;études
        </h3>
        <NotificationButton
          onClick={() => setIsNotificationsOpen(true)}
          count={notifications.notifications.length}
        />
      </div>
      <p className="text-[#F5F6F6] text-lg">
        Bonjour <strong>Tommy</strong>!
      </p>

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
