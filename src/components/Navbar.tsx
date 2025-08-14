"use client";

import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          LS
        </Link>
        <div className="flex items-center gap-6 text-neutral-300 font-medium">
          <Link href="/#sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>
          <Link
            href="/#projetos"
            className="hover:text-white transition-colors"
          >
            Projetos
          </Link>
          <Link href="/#contato" className="hover:text-white transition-colors">
            Contato
          </Link>
          <a
            href="https://github.com/LSacerdote"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-sacerdote-3a6b8a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
