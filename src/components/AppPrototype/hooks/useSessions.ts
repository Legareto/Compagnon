import { useState } from "react";
import { Session } from "../types";

const sessions: Session[] = [
  {
    id: "1",
    name: "Session automne 2024",
    courses: [
      { id: "1", name: "Mathématiques avancées", session: "1" },
      { id: "2", name: "Physique quantique", session: "1" },
      { id: "3", name: "Chimie organique", session: "1" },
    ],
  },
  {
    id: "2",
    name: "Session hiver 2025",
    courses: [
      { id: "4", name: "Calcul différentiel", session: "2" },
      { id: "5", name: "Mécanique des fluides", session: "2" },
      { id: "6", name: "Biologie moléculaire", session: "2" },
    ],
  },
  {
    id: "3",
    name: "Session été 2025",
    courses: [
      { id: "7", name: "Algèbre linéaire", session: "3" },
      { id: "8", name: "Thermodynamique", session: "3" },
      { id: "9", name: "Génétique", session: "3" },
    ],
  },
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
    previousSession,
  };
}
