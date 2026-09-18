import { Star, Quote } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Mariana Albuquerque',
    location: 'Tambaú, João Pessoa',
    avatar: 'MA',
    text: 'Encontrei minha casa em Tambaú em menos de uma semana usando o app! A busca avançada e as fotos em alta resolução me ajudaram a filtrar exatamente o que eu queria. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Roberto Cavalcanti',
    location: 'Manaíra, João Pessoa',
    avatar: 'RC',
    text: 'O app da Extremo Oriente é simplesmente o melhor catálogo de imóveis da região. A visita virtual 360° foi decisiva para eu fechar o negócio sem perder tempo com visitas desnecessárias.',
    rating: 5,
  },
  {
    name: 'Fernanda Oliveira',
    location: 'Bessa, João Pessoa',
    avatar: 'FO',
    text: 'Estou impressionada com a qualidade do app. Interface linda, filtros super detalhados e consegui falar diretamente com o corretor pelo chat. Assinei o contrato de locação em 3 dias!',
    rating: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação: ${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="currentColor"
          className="star-gold"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const revealRef = useReveal()

  return (
    <section
      id="depoimentos"
      className="relative py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" aria-hidden="true" />

      <div ref={revealRef} className="reveal relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Depoimentos
          </span>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
          >
            O que nossos{' '}
            <span className="text-gold-gradient">clientes dizem</span>
          </h2>
          <div className="divider-gold mb-6" aria-hidden="true" />
          <p className="text-white-muted text-base sm:text-lg max-w-2xl mx-auto">
            Milhares de pessoas já encontraram o imóvel ideal usando nosso
            aplicativo. Veja o que elas têm a dizer.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="glass-card p-8 flex flex-col relative"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-gold-primary/15 absolute top-6 right-6"
                aria-hidden="true"
              />

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Text */}
              <blockquote className="mt-5 mb-8 text-white-muted text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-dark-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-primary to-gold-light flex items-center justify-center shrink-0">
                  <span className="text-dark-bg text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white-text text-sm font-semibold">{t.name}</div>
                  <div className="text-white-muted text-xs">{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
