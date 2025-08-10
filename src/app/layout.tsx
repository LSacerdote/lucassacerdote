// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import DarkVeil from "@/components/DarkVeil"; // 1. Importando o componente de fundo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio de Lucas Sacerdote",
  description: "Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        {/* 2. Usando o DarkVeil como fundo, posicionado atrás de tudo */}
        <DarkVeil
          className="fixed top-0 left-0 w-full h-full -z-10"
          hueShift={350} // Tom de roxo/azul para combinar com a referência
          warpAmount={0.5}
          noiseIntensity={0.03}
        />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
