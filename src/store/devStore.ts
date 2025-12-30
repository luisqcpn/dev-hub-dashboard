import { create } from "zustand";
import type { Dev, DevRole } from "@/types/dev";
import { fetchDevs } from "@/services/devService";

interface DevStoreState {
    devs: Dev[];
    loading: boolean;
    error: string | null;
    filterRole: DevRole | "all";
    favorites: number[];

    loadDevs: () => Promise<void>;
    setFilterRole: (role: DevStoreState["filterRole"]) => void;
    toggleFavorite: (id: number) => void;
}

export const useDevStore = create<DevStoreState>((set, get) => ({
    devs: [],
    loading: false,
    error: null,
    filterRole: "all",
    favorites: [],

    loadDevs: async () => {
        try {
            set({ loading: true, error: null });
            const devs = await fetchDevs();
            const favorites = get().favorites;
            const devsWithFavorite = devs.map((dev) => ({
                ...dev,
                favorite: favorites.includes(dev.id)
            }));
            set({ devs: devsWithFavorite, loading: false });
        } catch (error: unknown) {
            let message = "Erro ao carregar desenvolvedores";

            if (error && typeof error === "object" && "message" in error) {
                message = String((error as { message: string }).message);
            }

            set({
                loading: false,
                error: message
            });
        }
    },

    setFilterRole: (role) => set({ filterRole: role }),

    toggleFavorite: (id) => {
        const { favorites, devs } = get();
        const isFavorite = favorites.includes(id);
        const newFavorites = isFavorite
            ? favorites.filter((favId) => favId !== id)
            : [...favorites, id];

        const updatedDevs = devs.map((dev) =>
            dev.id === id ? { ...dev, favorite: !isFavorite } : dev
        );

        set({ favorites: newFavorites, devs: updatedDevs });
    }
}));
