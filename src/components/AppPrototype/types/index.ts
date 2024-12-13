import type { LucideIcon } from "lucide-react";

export interface Message {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
}

export interface Notification {
  id: string;
  title: string;
  time: string;
}

export interface Session {
  id: string;
  name: string;
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
  session: string;
}

export type AppPage = "dashboard" | "toolkit" | "card" | "folder" | "menu";

export interface AppStateContextType {
  messages: {
    messages: Message[];
    toggleMessage: (id: string) => void;
  };
  navigation: {
    currentPage: AppPage;
    navigateTo: (page: AppPage) => void;
  };
  sessions: {
    currentSession: Session;
    currentCourse: Course;
    nextSession: () => void;
    previousSession: () => void;
  };
  notifications: {
    notifications: Notification[];
    count: number;
  };
}

export interface DrawerItemProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
