"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Enviando...");

    const formData = new FormData();
    formData.append("access_key", "8255563a-5f03-4442-b772-8a9562ca01a1");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResult("Erro ao enviar. Tente novamente mais tarde.");
        console.error("Erro:", data);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setResult("Erro de conexão. Verifique sua internet.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Entre em <span className="text-purple-400">Contato</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              Pronto para transformar suas ideias em realidade digital?
              Vamos conversar sobre seu próximo projeto!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">cirotto131@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Linkedin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">LinkedIn</h3>
                  <p className="text-gray-300">in/pedro-henrique-cirotto/</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Github className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">GitHub</h3>
                  <p className="text-gray-300">github.com/PedroCirotto</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={onSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-purple-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-purple-400 focus:outline-none"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-purple-400 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Enviar Mensagem
              </button>
              {result && (
                <p className="text-center text-gray-300 mt-2">{result}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
