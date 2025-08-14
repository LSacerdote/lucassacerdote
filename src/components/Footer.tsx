"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SpotifyPlaylist from "./SpotifyPlaylist";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer id="contato" className="w-full px-4 pb-8 pt-12">
      <div className="max-w-6xl mx-auto">
        <SpotlightCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-25 items-start">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-white mb-7">
                O que estou ouvindo?
              </h2>
              <SpotifyPlaylist playlistId="3bB9sE0rebWhQxvP3qU5wM" />
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-neutral-400 text-sm">
              © 2025 Lucas Sacerdote. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/LSacerdote"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-sacerdote-3a6b8a240/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </footer>
  );
};
