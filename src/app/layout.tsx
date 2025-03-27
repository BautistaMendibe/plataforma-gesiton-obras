import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import SessionLoader from "@/components/SessionLoader";

export const metadata: Metadata = {
    title: "Plataforma Gestión",
    description: "Gestión de obras para empresas pequeñas",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body>
        <ReduxProvider>
            <SessionLoader />
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
