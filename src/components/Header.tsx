'use client'
import { useState, useEffect } from 'react'
import {Menu, X} from 'lucide-react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Header() {

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
    <header className = {`sticky top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20'
      }`
}>
  <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold text-white">
        Dev<span className="text-purple-400">Portfolio</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-white hover:text-purple-300'
              }`}
          >
            {item === 'home' ? 'Início' :
              item === 'about' ? 'Sobre' :
                item === 'services' ? 'Serviços' :
                  item === 'projects' ? 'Projetos' : 'Contato'}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md">
        <div className="flex flex-col space-y-4 p-6">
          {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left text-white hover:text-purple-300 capitalize"
            >
              {item === 'home' ? 'Início' :
                item === 'about' ? 'Sobre' :
                  item === 'services' ? 'Serviços' :
                    item === 'projects' ? 'Projetos' : 'Contato'}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
      </header >
    );
}