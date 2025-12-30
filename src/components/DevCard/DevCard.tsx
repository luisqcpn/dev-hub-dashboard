"use client";

import React from "react";
import type { Dev } from "@/types/dev";
import {
    Card,
    Avatar,
    Info,
    Name,
    Username,
    RoleTag,
    Bio,
    FavoriteButton
} from "./DevCard.styles";

interface DevCardProps {
    dev: Dev;
    onToggleFavorite: (id: number) => void;
}

const DevCard: React.FC<DevCardProps> = ({ dev, onToggleFavorite }) => {
    return (
        <Card>
            <Avatar src={dev.avatarUrl} alt={dev.name} />
            <Info>
                <Name>{dev.name}</Name>
                <Username>@{dev.username}</Username>
                <RoleTag>{dev.role}</RoleTag>
                <Bio>{dev.bio}</Bio>
            </Info>
            <FavoriteButton
                aria-label={dev.favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                data-favorite={dev.favorite ? "true" : "false"}
                onClick={() => onToggleFavorite(dev.id)}
            >
                {dev.favorite ? "★" : "☆"}
            </FavoriteButton>
        </Card>
    );
};

export default DevCard;
