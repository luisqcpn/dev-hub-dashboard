"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
`;

export const ThemeButton = styled.button`
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.4rem 0.9rem;
    background: ${({ theme }) => theme.colors.cardBackground};
    color: inherit;
    font-size: 0.85rem;
`;
