"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
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
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                                    <Mail className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gray-300">joao.dev@email.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                                    <Linkedin className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">LinkedIn</h3>
                                    <p className="text-gray-300">linkedin.com/in/joao-dev</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                                    <Github className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">GitHub</h3>
                                    <p className="text-gray-300">github.com/joao-dev</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <input
                                type="text"
                                placeholder="Seu nome"
                                className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-purple-400 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Seu email"
                                className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-purple-400 focus:outline-none"
                            />
                            <textarea

                                aria-rowcount={5}
                                placeholder="Sua mensagem"
                                className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-purple-400 focus:outline-none resize-none"
                            ></textarea>
                            <button
                                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                                onClick={() => alert('Mensagem enviada! (Em produção, integre com um serviço de email)')}
                            >
                                Enviar Mensagem
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}