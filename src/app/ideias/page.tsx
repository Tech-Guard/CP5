"use client";
import Layout from '../layout';
import { useEffect, useState } from 'react';

interface ImageData {
  title: string;
  url: string;
}

const Ideias = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/2023-10-21'); 
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Erro ao buscar imagem da NASA');
        }

        setImageData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Ideias Principais de Velikovsky</h1>
        <p className="mt-4 text-lg text-gray-700">
          As ideias apresentadas por Immanuel Velikovsky em *Worlds in Collision* desafiam a visão tradicional da história e da ciência. 
          Aqui estão algumas das principais ideias que ele explora:
        </p>
        <h2 className="text-2xl font-bold mt-6">1. Catástrofes Planetárias</h2>
        <p className="mt-4 text-lg text-gray-600">
          Velikovsky argumenta que a história da humanidade foi moldada por catástrofes planetárias, que podem ser entendidas através de 
          relatos históricos e mitológicos. Ele sugere que esses eventos não foram meramente mitológicos, mas tiveram bases reais e científicas.
        </p>
        <h2 className="text-2xl font-bold mt-6">2. Relação entre Mitologia e Astronomia</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ele sugere que muitos mitos e histórias antigas podem ser explicados por eventos astronômicos e cataclísmicos, propondo uma 
          nova maneira de interpretar a história da humanidade.
        </p>
        <h2 className="text-2xl font-bold mt-6">3. Nova Perspectiva sobre a História</h2>
        <p className="mt-4 text-lg text-gray-600">
          Velikovsky nos convida a repensar a maneira como entendemos a história, propondo que muitos eventos significativos foram 
          ignorados ou mal interpretados pela ciência tradicional.
        </p>
        {imageData && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-center">{imageData.title}</h2>
            <img src={imageData.url} alt={imageData.title} className="mt-4 w-full rounded shadow-lg" />
          </div>
        )}
      </div>
  );
};

export default Ideias;
