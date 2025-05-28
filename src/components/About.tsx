"use client"

import { Download } from "lucide-react"

const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'Figma', level: 80 }
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">
                        Sobre <span className="text-purple-400">Mim</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Desenvolvedor Front-end Apaixonado por Tecnologia
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Com quase 2 anos de experiência em desenvolvimento front-end, especializo-me em criar
                                interfaces modernas e responsivas usando as mais recentes tecnologias do mercado.
                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Minha paixão está em transformar ideias em experiências digitais excepcionais,
                                sempre focando na usabilidade e performance das aplicações.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Tailwind</span>
                            </div>

                            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                                <Download size={20} />
                                Download CV
                            </button>
                        </div>

                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white font-medium">{skill.name}</span>
                                        <span className="text-purple-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}