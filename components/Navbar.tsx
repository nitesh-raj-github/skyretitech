import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="text-white font-semibold">
          Skyreti
        </Link>
        <nav className="flex gap-6 text-gray-400">
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
