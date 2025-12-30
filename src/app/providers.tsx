"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, AppContainer, MainContent } from "@/components/Layout/Layout.styles";
import { lightTheme, darkTheme } from "@/components/Layout/theme";
import { useThemeStore } from "@/store/themeStore";
import Header from "@/components/Header/Header";

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mode = useThemeStore((state) => state.mode);

    const theme = mode === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppContainer>
                <Header />
                <MainContent>{children}</MainContent>
            </AppContainer>
        </ThemeProvider>
    );
};

export default Providers;
