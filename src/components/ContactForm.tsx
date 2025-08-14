"use client";

import React, { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(`Erro: ${data.error || "Tente novamente mais tarde."}`);
      }
    } catch (error) {
      setStatus("Erro ao enviar. Verifique sua conexão.");
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold text-white mb-6">Fale Comigo</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
        />
        <textarea
          placeholder="Sua Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="p-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
        >
          Enviar Mensagem
        </button>
        {status && (
          <p className="text-center text-sm text-neutral-400 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
};
export default ContactForm;
