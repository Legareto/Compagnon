import { useState } from 'react';
import { Session } from '../types';

const sessions: Session[] = [
  {
    id: '1',
    name: 'Session automne 2024',
    courses: [
      { id: '1', name: 'Mathématiques avancées' },
      { id: '2', name: 'Physique quantique' },
      { id: '3', name: 'Chimie organique' }
    ]
  },
  {
    id: '2',
    name: 'Session hiver 2025',
    courses: [
      { id: '4', name: 'Calcul différentiel' },
      { id: '5', name: 'Mécanique des fluides' },
      { id: '6', name: 'Biologie moléculaire' }
    ]
  },
  {
    id: '3',
    name: 'Session été 2025',
    courses: [
      { id: '7', name: 'Algèbre linéaire' },
      { id: '8', name: 'Thermodynamique' },
      { id: '9', name: 'Génétique' }
    ]
  }
];

export function useSessions() {
  const [sessionIndex, setSessionIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);

  const currentSession = sessions[sessionIndex];
  const currentCourse = currentSession.courses[courseIndex];

  const nextSession = () => {
    setSessionIndex((prev) => (prev + 1) % sessions.length);
    setCourseIndex(0);
  };

  const previousSession = () => {
    setSessionIndex((prev) => (prev - 1 + sessions.length) % sessions.length);
    setCourseIndex(0);
  };

  return {
    currentSession,
    currentCourse,
    nextSession,
    previousSession
  };
}