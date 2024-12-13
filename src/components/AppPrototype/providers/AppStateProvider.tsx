'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useMessages } from '../hooks/useMessages';
import { useNavigation } from '../hooks/useNavigation';
import { useSessions } from '../hooks/useSessions';
import { useNotifications } from '../hooks/useNotifications';

interface AppStateContextType {
  messages: ReturnType<typeof useMessages>;
  navigation: ReturnType<typeof useNavigation>;
  sessions: ReturnType<typeof useSessions>;
  notifications: ReturnType<typeof useNotifications>;
}

const AppStateContext = createContext<AppStateContextType | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const messages = useMessages();
  const navigation = useNavigation();
  const sessions = useSessions();
  const notifications = useNotifications();

  return (
    <AppStateContext.Provider value={{
      messages,
      navigation,
      sessions,
      notifications,
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}