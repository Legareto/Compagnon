import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  store: 'App Store' | 'Google Play';
}

export function DownloadButton({ store }: DownloadButtonProps) {
  return (
    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-light px-8 py-3 rounded-lg transition-colors">
      <Download className="w-5 h-5" />
      {store}
    </button>
  );
}