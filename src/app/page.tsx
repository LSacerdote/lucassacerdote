import { ButtonPrimary } from "@/components/ButtonPrimary";
import { ButtonSecondary } from "@/components/ButtonSecondary";
import SpotlightCard from "@/components/SpotlightCard";
import TrueFocus from "@/components/TrueFocus";
import { TechCarousel } from "@/components/TechCarousel";
import SpotifyPlaylist from "@/components/SpotifyPlaylist";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const aboutText = `Desenvolvedor de Software com 2 anos de experiência prática em projetos freelancer e acadêmicos, construindo aplicações web com React, Node.js, Java e Spring Boot. Atualmente, atuo como Analista de Suporte na Porto, onde desenvolvi uma forte habilidade de resolução de problemas complexos e comunicação eficiente, o que me permite entender as necessidades do usuário final e traduzi-las em soluções técnicas robustas. Minha paixão é criar interfaces dinâmicas no front-end e arquitetar a lógica de negócio no back-end. Tenho projetos práticos envolvendo desde o desenvolvimento de APIs RESTful até a implementação de sistemas para gestão. Busco ativamente uma oportunidade como Desenvolvedor Júnior para aplicar meu conhecimento técnico, minha proatividade e minha capacidade de aprender rapidamente para entregar valor e crescer junto com a equipe.`;

  const projects = [
    {
      title: "Meu Portfólio",
      description:
        "Este próprio site! Um portfólio dinâmico criado para exibir meus projetos como desenvolvedor full stack.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/LSacerdote/meu-portfolio",
    },
    {
      title: "Biblioteca Acadêmica",
      description:
        "Aplicação web acadêmica para cadastro, listagem e exclusão de livros, construída com Java Servlets, JSP e padrão MVC.",
      tags: ["Java", "Servlets", "JSP", "MVC"],
      link: "https://github.com/LSacerdote/Biblioteca-Universidade-Cesumar",
    },
    {
      title: "Agendamento Pet Shop",
      description:
        "Sistema de agendamento para pet shops que permite aos clientes marcarem horários de forma online. Desenvolvido com HTML, CSS e Bootstrap.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/LSacerdote/Agendamento-Petshop",
    },
    {
      title: "Sistema de Votação em Tempo Real",
      description:
        "Backend para um sistema de enquetes com resultados em tempo real, utilizando WebSockets, PostgreSQL e Redis para alta performance.",
      tags: ["Node.js", "WebSockets", "PostgreSQL", "Redis"],
      link: "https://github.com/LSacerdote/NLW-Expert-NodeJS",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center min-h-screen text-center px-4 pt-90">
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
          <Link href="/#projetos" passHref>
            <ButtonPrimary>Ver Projetos</ButtonPrimary>
          </Link>
          <Link href="/#contato" passHref>
            <ButtonSecondary>Fale Comigo</ButtonSecondary>
          </Link>
        </div>
      </section>
      <TechCarousel />
      <section id="sobre" className="w-full py-24 lg:py-32 pt-20">
        <div className="max-w-3xl mx-auto px-4">
          <TrueFocus
            sentence="Sobre Mim"
            manualMode={false}
            blurAmount={5}
            borderColor="#8B5CF6"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <p className="text-xl text-neutral-200 leading-relaxed text-center font-light pt-16">
            {aboutText}
          </p>
        </div>
      </section>
      <section id="tecnologias" className="py-12">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Tecnologias
        </h2>
        <TechCarousel />
      </section>

      <section id="projetos" className="px-4 py-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className="flex flex-col min-h-[450px] w-full"
              >
                <div className="flex-grow">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="block w-fit rounded-full bg-slate-700 px-3 py-1 text-xs font-light text-slate-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-slate-800/60 px-4 py-2 text-sm font-semibold text-slate-50 hover:bg-slate-700/80 transition-colors"
                >
                  Ver Mais
                </a>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
