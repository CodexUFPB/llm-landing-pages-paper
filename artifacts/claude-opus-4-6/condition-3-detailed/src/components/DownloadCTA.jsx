import { Apple, PlayCircle } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function DownloadCTA() {
  const revealRef = useReveal()

  return (
    <section
      id="download"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="download-heading"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold-primary/[0.06] blur-[100px]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" aria-hidden="true" />

      <div ref={revealRef} className="reveal relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <span className="text-gold-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
          Download Gratuito
        </span>
        <h2
          id="download-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
        >
          Pronto para encontrar seu{' '}
          <span className="text-gold-gradient">imóvel ideal?</span>
        </h2>
        <div className="divider-gold mb-6" aria-hidden="true" />
        <p className="text-white-muted text-base sm:text-lg max-w-xl mx-auto mb-10">
          Baixe gratuitamente o aplicativo da Imobiliária Extremo Oriente e
          tenha acesso ao maior catálogo premium de imóveis da região.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="btn-gold animate-pulse-glow"
            aria-label="Baixar na Apple App Store"
          >
            <Apple size={22} />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[0.625rem] opacity-70 font-normal">Baixar na</span>
              <span className="text-sm">App Store</span>
            </div>
          </a>
          <a
            href="#"
            className="btn-outline-gold"
            aria-label="Disponível no Google Play"
          >
            <PlayCircle size={22} />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[0.625rem] opacity-70 font-normal">Disponível no</span>
              <span className="text-sm">Google Play</span>
            </div>
          </a>
        </div>

        <p className="text-white-muted/50 text-xs mt-6">
          Disponível para iOS 15+ e Android 10+. Sem anúncios.
        </p>
      </div>
    </section>
  )
}
