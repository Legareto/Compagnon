"use client";

import { useState } from "react";
import { Message } from "../types";

const initialMessages: Message[] = [
  {
    id: "1",
    title: "Devoir de mathématiques",
    content: "Le devoir de calcul différentiel est à rendre pour le 15 mars.",
    isExpanded: false,
  },
  {
    id: "2",
    title: "Changement de salle",
    content: "Le cours de physique du jeudi 12 mars aura lieu en salle B204.",
    isExpanded: false,
  },
];

export function useMessages() {
  const [messages, setMessages] = useState(initialMessages);

  const toggleMessage = (id: string) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, isExpanded: !msg.isExpanded } : msg
      )
    );
  };

  return { messages, toggleMessage };
}
