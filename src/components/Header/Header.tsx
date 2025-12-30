"use client";

import React from "react";
import { HeaderContainer, HeaderContent, Title, ThemeButton } from "./Header.styles";
import { useThemeStore } from "@/store/themeStore";

const Header: React.FC = () => {
    const mode = useThemeStore((state) => state.mode);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    return (
        <HeaderContainer>
            <HeaderContent>
                <Title>DevHub Dashboard</Title>
                <ThemeButton onClick={toggleTheme}>
                    Tema: {mode === "light" ? "Claro" : "Escuro"}
                </ThemeButton>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
