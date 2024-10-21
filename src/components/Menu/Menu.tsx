import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="bg-blue-500 p-4 rounded-lg">
      <ul className="flex space-x-4 text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/livro">Livro</Link></li>
        <li><Link href="/ideias">Ideia</Link></li>
        <li><Link href="/teoria">Teoria</Link></li>
      </ul>
    </nav>
  );
}