import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background text-textLight py-20 md:py-32">
      <div className="container mx-auto flex flex-col-reverse items-center gap-8 px-6 md:flex-row md:px-12">
        {/* Texto */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold md:text-5xl text-primary">
            Encontre o Imóvel dos Seus Sonhos na Palma da Mão
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Catálogo premium de imóveis à venda e locação, com busca avançada,
            filtros de alto padrão e visitas virtuais.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-background hover:bg-primary/90 transition"
              aria-label="Baixar na App Store"
            >
              <img src="/images/appstore-badge.svg" alt="App Store" className="h-6" />
              Baixar na App Store
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-background hover:bg-primary/90 transition"
              aria-label="Disponível no Google Play"
            >
              <img src="/images/googleplay-badge.svg" alt="Google Play" className="h-6" />
              Google Play
            </a>
          </div>
        </div>
        {/* Mockup do app */}
        <div className="w-full max-w-sm">
          <img
            src="/images/mockup.png"
            alt="Mockup do aplicativo Imobiliária Extremo Oriente"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
