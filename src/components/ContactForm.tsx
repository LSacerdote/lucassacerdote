"use client";

import { useState } from "react";

export function ContactForm() {
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
      } else {
        setStatus(`Erro: ${data.error}`);
      }
    } catch (error) {
      setStatus("Erro ao enviar. Tente novamente mais tarde.");
    }
  };

  return (
    <section id="contato" className="w-full max-w-2xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 bg-gray-700 rounded-md text-white"
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 bg-gray-700 rounded-md text-white"
        />
        <textarea
          placeholder="Sua Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="p-3 bg-gray-700 rounded-md text-white"
        />
        <button
          type="submit"
          className="p-3 bg-cyan-600 hover:bg-cyan-700 rounded-md font-bold transition-colors"
        >
          Enviar Mensagem
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </section>
  );
}
