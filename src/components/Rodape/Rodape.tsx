export default function Rodape() {
    return (
      <footer className="bg-gray-800 text-white p-6 mt-10">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold mb-4 text-center">Criado por:</h1> 
          <ul className="flex justify-center space-x-8">
            <li className="text-center"> 
              <h2 className="text-lg font-semibold">Julio César Santos Maciel</h2>
              <h3 className="text-sm">RM: 554466</h3>
            </li>
            <li className="text-center">
              <h2 className="text-lg font-semibold">Brenno Cauet Vilela</h2>
              <h3 className="text-sm">RM: 557334</h3>
            </li>
          </ul>
        </div>
      </footer>
    );
  }