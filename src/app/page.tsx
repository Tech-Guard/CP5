import Layout from './layout';
import './globals.css';

const Page = () => {
  return (
    <>
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-center text-blue-600">Bem-vindo ao Mundo de Velikovsky</h1>
          <p className="mt-4 text-lg text-gray-700">
            Este site explora as ideias e teorias apresentadas por Immanuel Velikovsky em seu livro *Worlds in Collision*. 
            Publicado em 1950, a obra propõe uma visão controversa da história da humanidade, onde interações planetárias moldaram eventos históricos e bíblicos.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Navegue através das páginas para entender melhor a obra e as implicações de suas teorias.
          </p>
        </div>
        <img
            src="/img/capaLivro.jpg" 
            alt="Worlds in Collision"
            className="mx-auto mt-6" 
          />
      </Layout>
    </>
  );
};

export default Page;

