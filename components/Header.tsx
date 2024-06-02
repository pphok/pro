// components/Header.tsx
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-400 text-white p-6 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
