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
}

export type AppPage = 'dashboard' | 'toolkit' | 'card' | 'folder' | 'menu';