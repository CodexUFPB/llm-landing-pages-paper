import { Apple, PlayCircle, ChevronDown } from 'lucide-react'
import appMockup from '../assets/app-mockup.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Ambiance */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radial gold glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gold-primary/[0.04] blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating gold particles */}
        <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-gold-primary/30 animate-float" />
        <div className="absolute top-[35%] right-[15%] w-1 h-1 rounded-full bg-gold-primary/20 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-gold-primary/15 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 rounded-full bg-gold-primary/25 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-primary/20 bg-gold-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
              <span className="text-gold-primary text-xs font-medium tracking-wide uppercase">
                Novo App Disponível
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
            >
              Encontre o Imóvel dos
              <br />
              Seus Sonhos{' '}
              <span className="text-gold-gradient">na Palma da Mão</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up-delay-2 text-white-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Explore nosso catálogo completo de imóveis premium para{' '}
              <span className="text-white-text font-medium">venda</span> e{' '}
              <span className="text-white-text font-medium">locação</span> em
              João Pessoa e região. Busca inteligente, fotos em alta resolução e
              contato direto com corretores especializados.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="btn-gold group"
                aria-label="Baixar na Apple App Store"
              >
                <Apple size={20} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[0.625rem] opacity-70 font-normal">Baixar na</span>
                  <span className="text-sm">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="btn-outline-gold group"
                aria-label="Disponível no Google Play"
              >
                <PlayCircle size={20} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[0.625rem] opacity-70 font-normal">Disponível no</span>
                  <span className="text-sm">Google Play</span>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up-delay-3 mt-12 flex gap-8 justify-center lg:justify-start">
              {[
                { value: '2.500+', label: 'Imóveis' },
                { value: '15k+', label: 'Downloads' },
                { value: '4.9', label: 'Avaliação' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-gold-primary font-display font-bold text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-white-muted text-xs uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-up">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-[3rem] bg-gold-primary/10 blur-[80px] scale-90"
                aria-hidden="true"
              />
              <img
                src={appMockup}
                alt="Interface do aplicativo Imobiliária Extremo Oriente exibindo listagem de imóveis premium"
                className="relative w-[280px] sm:w-[320px] lg:w-[380px] h-auto drop-shadow-2xl animate-float"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white-muted hover:text-gold-primary transition-colors group"
        aria-label="Rolar para seção de recursos"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.2em]">Explorar</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
