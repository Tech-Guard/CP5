import Image from "next/image";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image 
          src="/img/logoIcon.png" 
          alt="Logo"
          width={50}
          height={50}
          className="mr-2"
        />
      </div>
      <Menu />
    </header>
  );
}