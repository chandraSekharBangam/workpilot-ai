"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "light" | "dark";

type AppState = {
  sidebarCollapsed: boolean;
  theme: ThemeMode;
  language: "English" | "Hindi" | "Spanish";
  toggleSidebar: () => void;
  setTheme: (theme: ThemeMode) => void;
  setLanguage: (language: AppState["language"]) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      theme: "light",
      language: "English",
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setTheme: (theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        set({ theme });
      },
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "workpilot-ai-preferences",
      onRehydrateStorage: () => (state) => {
        if (state?.theme === "dark") {
          document.documentElement.classList.add("dark");
        }
      },
    },
  ),
);
