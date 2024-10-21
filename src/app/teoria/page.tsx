"use client";

import Layout from '../layout';
import { useEffect, useState } from 'react';

const Teoria = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/2023-10-23');
        const data = await res.json();

        console.log(data);

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
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Teoria de Velikovsky</h1>
        <p className="mt-4 text-lg text-gray-700">
          A teoria apresentada por Immanuel Velikovsky em *Worlds in Collision* desafia a compreensão convencional da história e da 
          ciência. Ele propõe que as interações entre os planetas têm um impacto direto na vida na Terra, sugerindo que eventos 
          catastróficos podem ser explicados por mudanças nos corpos celestes.
        </p>
        <h2 className="text-2xl font-bold mt-6">1. Sincronismo entre História e Astronomia</h2>
        <p className="mt-4 text-lg text-gray-700">
          Velikovsky conecta eventos históricos a fenômenos astronômicos, argumentando que eventos como o Dilúvio e a destruição de Sodoma 
          e Gomorra podem ter raízes em catástrofes planetárias.
        </p>
        <h2 className="text-2xl font-bold mt-6">2. Críticas e Controvérsias</h2>
        <p className="mt-4 text-lg text-gray-700">
          Embora suas teorias tenham gerado interesse, também enfrentaram críticas severas de cientistas e historiadores. A comunidade 
          científica, em grande parte, rejeitou suas conclusões, levando a um intenso debate sobre a validade de suas ideias.
        </p>
        <h2 className="text-2xl font-bold mt-6">3. Legado da Obra</h2>
        <p className="mt-4 text-lg text-gray-700">
          Apesar das controvérsias, a obra de Velikovsky continua a ser discutida e inspirou muitas pessoas a explorar novas formas de 
          entender a relação entre a história, a ciência e a mitologia.
        </p>
        {imageData && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-center">{imageData.title}</h2>
            <img src={imageData.url} alt={imageData.title} className="mt-4 w-full rounded shadow-lg" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Teoria;
