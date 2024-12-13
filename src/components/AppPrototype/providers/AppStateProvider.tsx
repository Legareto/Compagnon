"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useMessages } from "../hooks/useMessages";
import { useNavigation } from "../hooks/useNavigation";
import { useSessions } from "../hooks/useSessions";
import { useNotifications } from "../hooks/useNotifications";
import type { AppStateContextType } from "../types";

const AppStateContext = createContext<AppStateContextType | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const messages = useMessages();
  const navigation = useNavigation();
  const sessions = useSessions();
  const notifications = useNotifications();

  const value = React.useMemo(
    () => ({
      messages,
      navigation,
      sessions,
      notifications,
    }),
    [messages, navigation, sessions, notifications]
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
}
