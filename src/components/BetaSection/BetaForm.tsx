import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { BetaFormProps } from './types';

export function BetaForm({ onSubmit }: BetaFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="justify-center">
        <button
          type="submit"
          className="group flex items-center gap-2 bg-accent hover:bg-accent/90 text-light px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          M'inscrire
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}