import React from "react";
import DevList from "@/components/DevList/DevList";

export default function HomePage() {
    return (
        <>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
                Descubra devs para o seu time
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
                Este painel é apenas demonstrativo, feito com Next 15, React 19, TypeScript,
                Axios, Zustand e styled-components.
            </p>
            <DevList />
        </>
    );
}
