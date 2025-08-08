"use client"

import { Github, Globe, Linkedin, Mail, Smartphone, ExternalLink } from "lucide-react"

const projects = [
    {
      title: 'PetCareConnect',
      description: 'Sistema de login/cadastro e agendamento de consultas com veterinários.',
      image: '/imgs/petcare.png',
      tech: ['React', 'Node.js', 'APIRest', 'Tailwind'],
      github: 'https://github.com/PedroCirotto/PetCareConnect',
      live: 'https://pet-care-connect-eta.vercel.app/'
    },
    {
      title: 'Peakone',
      description: 'Site portfolio para empresa de Ecommerce.',
      image: 'https://peakonedev.com/',
      tech: ['Next.js', 'Tailwind', "GTM", "GA - Google Analytics"],
      github: '#',
      live: '#'
    },
    {
      title: 'Em construção',
      description: 'Site portfolio para designer com animações avançadas e galeria interativa de projetos.',
      image: 'https://images.unsplash.om/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      tech: ['Astro', 'Tailwind'],
      github: '#',
      live: '#'
    }
  ];

export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Meus <span className="text-purple-400">Projetos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700/50">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Github size={20} className="text-white" />
                    </a>
                    <a href={project.live} target="_blank" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}