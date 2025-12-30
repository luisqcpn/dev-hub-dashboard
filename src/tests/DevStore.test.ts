import { act } from "react-dom/test-utils";
import { useDevStore } from "@/store/devStore";
import type { Dev } from "@/types/dev";

describe("DevStore", () => {
    it("adiciona e remove favoritos", () => {
        const initialDev: Dev = {
            id: 1,
            name: "Dev Teste",
            username: "devteste",
            role: "frontend",
            bio: "Bio teste",
            avatarUrl: "",
            favorite: false
        };

        act(() => {
            useDevStore.setState({
                devs: [initialDev],
                favorites: [],
                loading: false,
                error: null,
                filterRole: "all",
                loadDevs: useDevStore.getState().loadDevs,
                setFilterRole: useDevStore.getState().setFilterRole,
                toggleFavorite: useDevStore.getState().toggleFavorite
            });
        });

        act(() => {
            useDevStore.getState().toggleFavorite(1);
        });

        expect(useDevStore.getState().favorites).toEqual([1]);
        expect(useDevStore.getState().devs[0].favorite).toBe(true);

        act(() => {
            useDevStore.getState().toggleFavorite(1);
        });

        expect(useDevStore.getState().favorites).toEqual([]);
        expect(useDevStore.getState().devs[0].favorite).toBe(false);
    });
});
