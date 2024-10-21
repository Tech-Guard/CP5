// src/app/layout.tsx
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import "./globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Velikovsky",
  description: "Explore as ideias e teorias de Immanuel Velikovsky.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Explore as ideias e teorias de Immanuel Velikovsky."
        />
        <link rel="icon" href="/img/logoIcon.png" />
      </head>
      <body>
        <Cabecalho />
        <main className="content-wrap">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
