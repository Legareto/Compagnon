import { ReactNode } from 'react';

export interface BetaCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface BetaFormProps {
  onSubmit: (email: string) => void;
}