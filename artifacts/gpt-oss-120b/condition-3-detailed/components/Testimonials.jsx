const testimonials = [
  {
    name: "Mariana S.",
    text: "Encontrei minha casa em Tambaú em menos de uma semana usando o app!",
    rating: 5
  },
  {
    name: "Carlos P.",
    text: "A visita virtual me ajudou a decidir sem precisar deslocar.",
    rating: 5
  },
  {
    name: "Ana L.",
    text: "Filtros avançados fizeram a busca muito mais rápida e precisa.",
    rating: 5
  }
];

export default function Testimonials() {
  const stars = Array.from({ length: 5 });
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="mb-8 text-center text-3xl font-semibold text-primary">
          Depoimentos
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg bg-[#1a1a1a] p-6 text-center shadow-md"
            >
              <p className="text-sm text-gray-300">{t.text}</p>
              <div className="mt-4 flex justify-center gap-0.5">
                {stars.map((_, s) => (
                  <svg
                    key={s}
                    className="h-5 w-5 fill-current text-primary"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <polygon points="10 1.5 12.59 7.11 18.66 7.77 13.83 11.92 15.45 18 10 14.38 4.55 18 6.17 11.92 1.34 7.77 7.41 7.11 10 1.5" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-200">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
