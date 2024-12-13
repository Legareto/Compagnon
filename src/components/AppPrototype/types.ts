export interface AppStateContextType {
  messages: ReturnType<typeof useMessages>;
  navigation: ReturnType<typeof useNavigation>;
  sessions: ReturnType<typeof useSessions>;
  notifications: ReturnType<typeof useNotifications>;
}

export interface Message {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
}

export interface Session {
  id: string;
  name: string;
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
}

export type AppPage = "dashboard" | "toolkit" | "folder" | "card" | "menu";
