"use client";

import styled from "styled-components";

export const Card = styled.article`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    transition: transform 0.1s ease, box-shadow 0.1s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.35);
    }
`;

export const Avatar = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 999px;
    border: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const Name = styled.h2`
    font-size: 1rem;
    font-weight: 600;
`;

export const Username = styled.span`
    font-size: 0.85rem;
    opacity: 0.7;
`;

export const RoleTag = styled.span`
    font-size: 0.8rem;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: inline-block;
    margin-top: 0.25rem;
`;

export const Bio = styled.p`
    font-size: 0.85rem;
    margin-top: 0.25rem;
`;

export const FavoriteButton = styled.button`
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: transparent;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;

    &[data-favorite="true"] {
        color: ${({ theme }) => theme.colors.favorite};
    }
`;
