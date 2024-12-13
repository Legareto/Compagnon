import {
  BellDot,
  MessageCircle,
  Briefcase,
  Printer,
  Contact,
  BellRing,
  BotMessageSquare,
} from "lucide-react";
import { Feature } from "../types";

export const features: Feature[] = [
  {
    icon: BellDot,
    title: "Notifications",
    description:
      "Consulte les notifications liées à ton dossier académique et à tes cours.",
  },
  {
    icon: MessageCircle,
    title: "Messages importants",
    description:
      "Consulte les messages importants de ton domaine d'études et de l'institution.",
  },
  {
    icon: Briefcase,
    title: "Trousse étudiante",
    description:
      "Consulte rapidement la trousse étudiante qui regroupe plusieurs ressources de soutien pédagogique, numérique et psychosocial.",
  },
  {
    icon: Contact,
    title: "Carte numérique",
    description:
      "Utilise ta carte numérique pour obtenir des services (bibliothèque, salle de sport, etc.) et des rabais (autobus, cinéma, etc.).",
  },
  {
    icon: Printer,
    title: "Solde d'impression",
    description:
      "Vérifie ton solde d'impression et ajoute des fonds sur ton compte avant d'imprimer tes textes à lire ou tes travaux.",
  },
  {
    icon: BellRing,
    title: "Rappels personnalisés (plus tard)",
    description:
      "Ne manque plus jamais un cours, un devoir ou une date importante grâce aux rappels intelligents et personnalisés selon tes préférences.",
  },
  {
    icon: BotMessageSquare,
    title: "Compagnon intelligent (plus tard)",
    description:
      "Un compagnon d'étude intelligent qui répond à tes questions et qui t'aide à planifier ton temps et tes séances d'études.",
  },
];
