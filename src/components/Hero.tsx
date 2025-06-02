"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe, ChevronDown } from 'lucide-react';


const Hero = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-52 h-52 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img className="w-full h-full rounded-full z-30" src="/imgs/pedro.jpg" alt="" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pedro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Cirotto</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Front-end Developer especializado em React, Next.js e experiências digitais excepcionais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all"
            >
              Entrar em Contato
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/PedroCirotto" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pedro-henrique-cirotto-81b89028a/" target='_blank' className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>

      </section>
    </div>
  );
};

export default Hero;