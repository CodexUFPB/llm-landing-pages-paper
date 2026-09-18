import { Search, SlidersHorizontal, MessageCircle, Eye } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const features = [
  {
    icon: Search,
    title: 'Busca Avançada',
    description:
      'Encontre imóveis por localização, faixa de preço, número de quartos, metragem e muito mais. Resultados precisos em segundos.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Filtros de Alto Padrão',
    description:
      'Filtre por características exclusivas: piscina, varanda gourmet, vista para o mar, garagem coberta e área de lazer completa.',
  },
  {
    icon: MessageCircle,
    title: 'Contato Direto',
    description:
      'Fale instantaneamente com corretores especializados. Tire dúvidas, agende visitas e negocie diretamente pelo aplicativo.',
  },
  {
    icon: Eye,
    title: 'Visita Virtual 360°',
    description:
      'Explore cada cômodo do imóvel com tours virtuais imersivos. Conheça cada detalhe sem sair de casa.',
  },
]

export default function Features() {
  const revealRef = useReveal()

  return (
    <section
      id="features"
      className="relative py-24 md:py-32"
      aria-labelledby="features-heading"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" aria-hidden="true" />

      <div ref={revealRef} className="reveal max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Recursos
          </span>
          <h2
            id="features-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
          >
            Por que baixar o{' '}
            <span className="text-gold-gradient">nosso app?</span>
          </h2>
          <div className="divider-gold mb-6" aria-hidden="true" />
          <p className="text-white-muted text-base sm:text-lg max-w-2xl mx-auto">
            Cada funcionalidade foi pensada para tornar sua experiência de busca
            por imóveis mais rápida, elegante e eficiente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="glass-card p-7 text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-muted mb-6 transition-all duration-300 group-hover:bg-gold-primary/20 group-hover:scale-110">
                  <Icon
                    size={26}
                    className="text-gold-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white-text mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
