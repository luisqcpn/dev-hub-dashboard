import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "DevHub Dashboard",
    description: "Painel de desenvolvedores usando Next 15, React 19, TypeScript, Zustand, styled-components e Axios"
};

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;

    return (
        <html lang="pt-BR">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
