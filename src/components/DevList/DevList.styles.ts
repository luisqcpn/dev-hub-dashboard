"use client";

import styled from "styled-components";

export const ListContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FiltersRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ $active, theme }) =>
        $active ? theme.colors.primary : theme.colors.cardBackground};
    color: ${({ $active }) => ($active ? "#ffffff" : "inherit")};
    font-size: 0.8rem;
`;
