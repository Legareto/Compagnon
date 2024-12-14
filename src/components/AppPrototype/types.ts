// src/types.ts

// Define types for Messages
export interface Message {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
}

export interface MessagesType {
  messages: Message[];
  toggleMessage: (id: string) => void;
}

// Define types for Navigation
export interface NavigationType {
  currentRoute: string;
  navigate: (route: string) => void;
}

// Define types for Sessions
export interface Session {
  id: string;
  name: string;
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
}

export interface SessionsType {
  sessions: Session[];
  // Add other relevant methods or properties if needed
}

// Define types for Notifications
export interface NotificationItem {
  id: string;
  message: string;
  read: boolean;
}

export interface NotificationsType {
  notifications: NotificationItem[];
  addNotification: (notification: NotificationItem) => void;
  markAsRead: (id: string) => void;
}

// Define AppStateContextType using explicit types
export interface AppStateContextType {
  messages: MessagesType;
  navigation: NavigationType;
  sessions: SessionsType;
  notifications: NotificationsType;
}

// Define other types as needed
export type AppPage = "dashboard" | "toolkit" | "folder" | "card" | "menu";
