export default function Footer() {
  return (
    <footer className="bg-[#050505] py-8 text-center text-sm text-gray-400">
      <div className="container mx-auto px-6 md:px-12">
        <p>
          © {new Date().getFullYear()} Imobiliária Extremo Oriente. Todos os direitos reservados.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-primary transition">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition">Instagram</a>
          <a href="#" className="hover:text-primary transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
