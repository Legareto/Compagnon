import { useState } from 'react';
import { AppPage } from '../types';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<AppPage>('dashboard');

  const navigateTo = (page: AppPage) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo
  };
}