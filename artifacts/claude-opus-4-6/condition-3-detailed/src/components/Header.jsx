import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4 md:px-8"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Imobiliária Extremo Oriente — Página inicial"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-primary to-gold-light flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-dark-bg font-bold text-lg font-display">E</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white-text font-display font-semibold text-base tracking-wide">
              Extremo Oriente
            </span>
            <span className="text-white-muted text-[0.625rem] uppercase tracking-[0.2em]">
              Imobiliária
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white-muted text-sm hover:text-gold-primary transition-colors duration-300">
            Recursos
          </a>
          <a href="#depoimentos" className="text-white-muted text-sm hover:text-gold-primary transition-colors duration-300">
            Depoimentos
          </a>
          <a
            href="#hero"
            className="btn-gold text-sm !py-2.5 !px-5"
            aria-label="Baixar o aplicativo"
          >
            <Download size={16} strokeWidth={2.5} />
            Baixar App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white-text p-2 hover:text-gold-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="menu"
      >
        <div className="px-5 pb-6 pt-2 border-t border-dark-border bg-dark-bg/95 backdrop-blur-xl space-y-4">
          <a
            href="#features"
            className="block text-white-muted text-sm hover:text-gold-primary transition-colors py-2"
            role="menuitem"
            onClick={() => setMobileMenuOpen(false)}
          >
            Recursos
          </a>
          <a
            href="#depoimentos"
            className="block text-white-muted text-sm hover:text-gold-primary transition-colors py-2"
            role="menuitem"
            onClick={() => setMobileMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a
            href="#hero"
            className="btn-gold text-sm justify-center w-full"
            role="menuitem"
            aria-label="Baixar o aplicativo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={16} strokeWidth={2.5} />
            Baixar App
          </a>
        </div>
      </div>
    </header>
  )
}
