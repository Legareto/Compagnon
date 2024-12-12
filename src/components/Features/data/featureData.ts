import { Bell, MessageCircle, Briefcase, CreditCard, Printer } from 'lucide-react';
import { Feature } from '../types';

export const features: Feature[] = [
  {
    icon: Bell,
    title: "Notifications",
    description: "Consultez les notifications liées à votre dossier académique et à vos cours."
  },
  {
    icon: MessageCircle,
    title: "Messages importants",
    description: "Consultez les messages importants de votre domaine d'études et de l'institution."
  },
  {
    icon: Briefcase,
    title: "Trousse étudiante",
    description: "Accédez rapidement à la trousse étudiante qui regroupe plusieurs ressources pour vous accompagner et vous soutenir."
  },
  {
    icon: CreditCard,
    title: "Carte numérique",
    description: "Utilisez votre carte numérique pour obtenir des services (bibliothèque, salle de sport, etc.) ou des rabais (autobus, cinéma, etc.)."
  },
  {
    icon: Printer,
    title: "Solde d'impression",
    description: "Vérifiez votre solde d'impression et ajouter des fonds sur votre compte."
  },
  {
    icon: Bell,
    title: "Rappels personnalisés (plus tard)",
    description: "Ne manquez plus jamais un cours, un devoir ou une date importante grâce aux rappels intelligents et personnalisés."
  }
];