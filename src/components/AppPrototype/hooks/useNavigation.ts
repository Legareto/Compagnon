"use client";

import { useState } from "react";
import type { AppPage, NavigationType } from "../types";

export function useNavigation(): NavigationType {
  const [currentPage, setCurrentPage] = useState<AppPage>("dashboard"); // Default page

  const navigateTo = (page: AppPage) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo,
  };
}
