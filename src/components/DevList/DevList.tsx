"use client";

import React, { useEffect } from "react";
import DevCard from "@/components/DevCard/DevCard";
import { useDevStore } from "@/store/devStore";
import { ListContainer, FiltersRow, FilterButton } from "./DevList.styles";

const DevList: React.FC = () => {
    const { devs, loadDevs, loading, error, filterRole, setFilterRole, toggleFavorite } =
        useDevStore();

    useEffect(() => {
        if (!devs.length) {
            void loadDevs();
        }
    }, [devs.length, loadDevs]);

    const filteredDevs =
        filterRole === "all" ? devs : devs.filter((dev) => dev.role === filterRole);

    return (
        <section>
            <FiltersRow>
                <FilterButton
                    $active={filterRole === "all"}
                    onClick={() => setFilterRole("all")}
                >
                    Todos
                </FilterButton>
                <FilterButton
                    $active={filterRole === "frontend"}
                    onClick={() => setFilterRole("frontend")}
                >
                    Frontend
                </FilterButton>
                <FilterButton
                    $active={filterRole === "backend"}
                    onClick={() => setFilterRole("backend")}
                >
                    Backend
                </FilterButton>
                <FilterButton
                    $active={filterRole === "fullstack"}
                    onClick={() => setFilterRole("fullstack")}
                >
                    Fullstack
                </FilterButton>
            </FiltersRow>

            {loading && <p>Carregando devs...</p>}
            {error && <p>Erro: {error}</p>}

            <ListContainer>
                {filteredDevs.map((dev) => (
                    <DevCard
                        key={dev.id}
                        dev={dev}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </ListContainer>
        </section>
    );
};

export default DevList;
