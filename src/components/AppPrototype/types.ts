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

// Define types for Courses and Sessions
export interface Course {
  id: string;
  name: string;
  session: string;
}

export interface Session {
  id: string;
  name: string;
  courses: Course[];
}

export interface SessionsType {
  currentSession: Session;
  currentCourse: Course;
  nextSession: () => void;
  previousSession: () => void;
}

// Define types for Notifications
export interface Notification {
  id: string;
  title: string;
  time: string;
}

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

// Define types for Navigation
export interface NavigationType {
  currentPage: AppPage;
  navigateTo: (page: AppPage) => void;
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
