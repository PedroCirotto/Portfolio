"use client"

import { Code, Smartphone, Globe, Palette } from "lucide-react"

const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento Web',
      description: 'Criação de aplicações web modernas e responsivas usando as mais recentes tecnologias.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e experiências de usuário excepcionais.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sites Responsivos',
      description: 'Desenvolvimento de sites que funcionam perfeitamente em todos os dispositivos.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding Digital',
      description: 'Criação de identidade visual digital consistente e impactante.'
    }
];
  
export default function Services() {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-16">
                    Meus <span className="text-purple-400">Serviços</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <div key={service.title} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all transform hover:scale-105 border border-slate-700/50">
                            <div className="text-purple-400 mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}