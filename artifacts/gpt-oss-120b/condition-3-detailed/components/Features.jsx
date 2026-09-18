import { Compass, Filter, Phone, Video } from "lucide-react";

const features = [
  {
    icon: <Compass className="h-8 w-8 text-primary" aria-hidden="true" />, 
    title: "Busca avançada",
    description: "Encontre imóveis por localização, preço, tamanho e muito mais."
  },
  {
    icon: <Filter className="h-8 w-8 text-primary" aria-hidden="true" />, 
    title: "Filtros premium",
    description: "Refine a busca com filtros de luxo, vistas, área de lazer etc."
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" aria-hidden="true" />, 
    title: "Contato direto",
    description: "Fale com corretores via chat integrado no app."
  },
  {
    icon: <Video className="h-8 w-8 text-primary" aria-hidden="true" />, 
    title: "Visita virtual",
    description: "Tour 3D dos imóveis sem sair de casa."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="mb-8 text-center text-3xl font-semibold text-primary">
          Por que baixar?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-lg"
            >
              {f.icon}
              <h3 className="mt-4 text-xl font-medium text-textLight">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
