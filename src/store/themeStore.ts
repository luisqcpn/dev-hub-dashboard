import { create } from "zustand";

export type ThemeMode = "light" | "dark";

interface ThemeState {
    mode: ThemeMode;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
    mode: "light",
    toggleTheme: () => {
        const current = get().mode;
        set({ mode: current === "light" ? "dark" : "light" });
    }
}));
