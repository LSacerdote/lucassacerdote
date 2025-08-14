"use client";

import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const technologies = [
  { name: "JavaScript", icon: <DiJavascript1 size={64} /> },
  { name: "TypeScript", icon: <SiTypescript size={64} /> },
  { name: "React", icon: <FaReact size={64} /> },
  { name: "Next.js", icon: <SiNextdotjs size={64} /> },
  { name: "Node.js", icon: <FaNodeJs size={64} /> },
  { name: "Java", icon: <FaJava size={64} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={64} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={64} /> },
  { name: "HTML5", icon: <FaHtml5 size={64} /> },
  { name: "CSS3", icon: <FaCss3Alt size={64} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={64} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={64} /> },
];

export const TechCarousel = () => {
  return (
    <section className="py-12">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          style={{ animationDuration: "50s" }}
        >
          {technologies.map((tech, index) => (
            <li
              key={index}
              title={tech.name}
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              {tech.icon}
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          aria-hidden="true"
          style={{ animationDuration: "50s" }}
        >
          {technologies.map((tech, index) => (
            <li
              key={index}
              title={tech.name}
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              {tech.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
