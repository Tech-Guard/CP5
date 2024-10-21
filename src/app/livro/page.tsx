"use client";

import Layout from "../layout";
import { useEffect, useState } from "react";

interface ImageData {
  title: string;
  url: string;
}

const Livro = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/2023-10-20");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Erro ao buscar imagem da NASA");
        }

        setImageData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Worlds in Collision</h1>
        <p className="mt-4 text-lg text-gray-700">
          *Worlds in Collision* é uma das obras mais controversas de Immanuel
          Velikovsky. Publicada em 1950, ela propôs que planetas como Vênus e
          Marte passaram perigosamente perto da Terra, causando catástrofes que
          moldaram a história da humanidade.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          A tese central do livro sugere que essas interações planetárias foram
          responsáveis por eventos bíblicos e mitológicos, alterando o curso da
          civilização. Velikovsky argumenta que os relatos históricos de
          catástrofes e eventos extraordinários podem ser explicados por essas
          mudanças cósmicas.
        </p>
        <h2 className="text-2xl font-bold mt-6">Conteúdo do Livro</h2>
        <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
          <li>Análise de eventos cataclísmicos na história da Terra</li>
          <li>Interpretação de textos antigos e mitológicos</li>
          <li>Conexões entre a astronomia e a história da civilização</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6">Recepção da Obra</h2>
        <p className="mt-4 text-lg text-gray-700">
          A obra gerou muita controvérsia e debate na comunidade científica, com
          muitos críticos rejeitando suas teorias. No entanto, também inspirou
          muitos leitores a reconsiderar as narrativas tradicionais da história
          e da ciência.
        </p>
        {imageData ? (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-center">
              {imageData.title}
            </h2>
            <img
              src={imageData.url}
              alt={imageData.title}
              className="mt-4 w-full rounded shadow-lg"
            />
          </div>
        ) : (
          <div className="mt-6">Carregando imagem...</div>
        )}
      </div>
  );
};

export default Livro;
