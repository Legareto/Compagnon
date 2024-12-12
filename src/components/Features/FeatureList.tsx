import React from 'react';
import { Bell, MessageCircle, Briefcase, IdCard, Printer } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { Feature } from './types';

const features: Feature[] = [
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Notifications",
    description: "Consultez les notifications liées à votre dossier académique et à vos cours."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Messages importants",
    description: "Consultez les messages importants de votre domaine d'études et de l'institution."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Trousse étudiante",
    description: "Accédez rapidement à la trousse étudiante qui regroupe plusieurs ressources pour vous accompagner et vous soutenir."
  },
  {
    icon: <IdCard className="w-8 h-8" />,
    title: "Carte numérique",
    description: "Utilisez votre carte numérique pour obtenir des services (bibliothèque, salle de sport, etc.) ou des rabais (autobus, cinéma, etc.)."
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Solde d'impression",
    description: "Vérifiez votre solde d'impression et ajouter des fonds sur votre compte."
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Rappels personnalisés (plus tard)",
    description: "Ne manquez plus jamais un cours, un devoir ou une date importante grâce aux rappels intelligents et personnalisés."
  }
];

export function FeatureList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}