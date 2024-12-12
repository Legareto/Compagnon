import { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  time: string;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Vous avez un avis sécurisé à votre dossier',
    time: 'Il y a 2 heures'
  },
  {
    id: '2',
    title: 'Vous avez un nouveau résultat dans le cours ERR404',
    time: 'Il y a 3 heures'
  },
  {
    id: '3',
    title: 'Rappel : Remise du devoir de mathématiques demain',
    time: 'Il y a 5 heures'
  }
];

export function useNotifications() {
  const [notifications] = useState(initialNotifications);

  return {
    notifications,
    count: notifications.length
  };
}