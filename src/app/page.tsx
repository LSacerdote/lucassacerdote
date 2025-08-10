// src/app/page.tsx

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { ButtonSecondary } from "@/components/ButtonSecondary";

export default function Home() {
  return (
    // 'pt-32' (padding-top) empurra o conteúdo para baixo da Navbar
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 pb-45">
      <div className="mb-6">
        <div className="relative inline-flex overflow-hidden rounded-full p-px">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Full Stack Developer
          </span>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Lucas Sacerdote
      </h1>
      <p className="text-lg text-neutral-300 max-w-2xl mb-10">
        Desenvolvendo soluções robustas com Node.js, React e Java.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <ButtonPrimary>Ver Projetos</ButtonPrimary>
        <ButtonSecondary>Fale Comigo</ButtonSecondary>
      </div>
    </div>
  );
}
