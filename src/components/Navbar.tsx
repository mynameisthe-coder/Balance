import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'La Experiencia', href: '#experiencia' },
    { name: 'CATÁLOGO', href: '#tratamientos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-12 py-6 ${
        isScrolled ? 'bg-brand-offwhite/95 backdrop-blur-sm border-b border-brand-accent/5 py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#inicio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <Logo 
            className={`h-16 md:h-20 w-auto transition-colors duration-500 ${
              isScrolled ? 'text-brand-accent' : 'text-white'
            }`} 
          />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:opacity-100 ${
                isScrolled ? 'text-brand-accent/60' : 'text-white/60'
              }`}
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="https://wa.me/c/34664534245"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-semibold border transition-all duration-500 ${
              isScrolled
                ? 'bg-transparent text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white'
                : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-brand-accent'
            }`}
          >
            Reservar
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-brand-accent' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-0 left-0 bg-brand-offwhite h-screen z-50 flex flex-col p-12 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo className="h-16 w-auto text-brand-accent" />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif hover:text-brand-muted transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-brand-beige flex justify-between items-end">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">Síguenos</p>
                <div className="flex space-x-4">
                  <Instagram size={20} className="text-brand-accent" />
                  <span className="text-sm font-medium">@balance.studio</span>
                </div>
              </div>
              <a 
                href="https://wa.me/c/34664534245"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white px-8 py-4 uppercase tracking-widest text-xs font-bold"
              >
                Reservar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
