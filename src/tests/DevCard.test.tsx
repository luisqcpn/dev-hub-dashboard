import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DevCard from "@/components/DevCard/DevCard";
import type { Dev } from "@/types/dev";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/components/Layout/theme";

const renderWithTheme = (ui: React.ReactElement) => {
    return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
};

const mockDev: Dev = {
    id: 1,
    name: "Ada Lovelace",
    username: "adal",
    role: "frontend",
    bio: "Pioneira da programação.",
    avatarUrl: "https://example.com/avatar.svg",
    favorite: false
};

describe("DevCard", () => {
    it("renderiza informações básicas do dev", () => {
        renderWithTheme(
            <DevCard dev={mockDev} onToggleFavorite={jest.fn()} />
        );

        expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
        expect(screen.getByText("@adal")).toBeInTheDocument();
        expect(screen.getByText("frontend")).toBeInTheDocument();
        expect(screen.getByText("Pioneira da programação.")).toBeInTheDocument();
    });

    it("chama callback ao clicar em favorito", () => {
        const onToggleFavorite = jest.fn();

        renderWithTheme(
            <DevCard dev={mockDev} onToggleFavorite={onToggleFavorite} />
        );

        const button = screen.getByRole("button", {
            name: /adicionar aos favoritos/i
        });
        fireEvent.click(button);

        expect(onToggleFavorite).toHaveBeenCalledWith(1);
    });
});
