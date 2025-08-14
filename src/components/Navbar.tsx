// src/components/Navbar.tsx

"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          LS
        </Link>
        <div className="flex items-center gap-6 text-white font-medium">
          <Link
            href="/#sobre"
            className="hover:text-cyan-400 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/#projetos"
            className="hover:text-cyan-400 transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/#contato"
            className="hover:text-cyan-400 transition-colors"
          >
            Contato
          </Link>
          <a
            href="https://github.com/seu-usuario-aqui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
