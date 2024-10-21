import Cabecalho from '@/components/Cabecalho/Cabecalho';
import Rodape from '@/components/Rodape/Rodape';
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Velikovsky</title>
        <meta name="description" content="Explore as ideias e teorias de Immanuel Velikovsky." />
        <link rel="icon" href="/img/logoIcon.png" /> {}
      </Head>
      <html lang="pt-br">
        <body>
          <Cabecalho />
          <div className="content-wrap">
            {children}
            <Rodape />
          </div>
        </body>
      </html>
    </>
  );
}


