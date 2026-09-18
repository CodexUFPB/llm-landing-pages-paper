import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-12">
      {/* Logo - substitua pelo seu SVG ou PNG */}
      <Image
        src="/images/logo.png"
        alt="Imobiliária Extremo Oriente"
        width={140}
        height={40}
        className="object-contain"
      />
      <a
        href="#"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-background hover:bg-primary/90 transition"
        aria-label="Baixar App"
      >
        Baixar App
      </a>
    </header>
  );
}
