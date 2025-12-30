"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: light dark;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    button {
        font-family: inherit;
        cursor: pointer;
    }
`;

export const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem;
    width: 100%;
`;
