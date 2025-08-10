// src/components/Navbar.tsx

"use client";

import Link from "next/link";

export function Navbar() {
  return (
    // 1. Container principal da Navbar
    // 'absolute' a tira do fluxo normal e a faz flutuar
    // 'top-0 w-full' a posiciona no topo e estica por toda a largura
    // 'z-20' garante que ela fique na frente da maioria dos outros elementos
    <nav className="absolute top-0 w-full z-20 py-4">
      {/* 2. Container interno para centralizar o conteúdo */}
      {/* 'max-w-7xl' define uma largura máxima (pode ajustar) */}
      {/* 'mx-auto' centraliza este container na tela */}
      {/* 'px-4' adiciona um respiro nas laterais para telas menores */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          LS
        </Link>

        {/* Links de Navegação */}
        <div className="flex items-center gap-6 text-white font-medium">
          <Link
            href="/#projetos"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Projetos
          </Link>
          <Link
            href="/#contato"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Contato
          </Link>
          <a
            href="https://github.com/seu-usuario" // Lembre-se de colocar seu usuário aqui
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
