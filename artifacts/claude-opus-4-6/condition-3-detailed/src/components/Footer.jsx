import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram da Imobiliária Extremo Oriente' },
  { icon: Facebook, href: '#', label: 'Facebook da Imobiliária Extremo Oriente' },
  { icon: Linkedin, href: '#', label: 'LinkedIn da Imobiliária Extremo Oriente' },
]

const quickLinks = [
  { text: 'Sobre nós', href: '#' },
  { text: 'Imóveis à Venda', href: '#' },
  { text: 'Imóveis para Locação', href: '#' },
  { text: 'Blog', href: '#' },
]

const legalLinks = [
  { text: 'Política de Privacidade', href: '#' },
  { text: 'Termos de Uso', href: '#' },
  { text: 'CRECI: 12345-J', href: '#' },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative bg-dark-surface border-t border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5 group" aria-label="Página inicial">
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
            <p className="text-white-muted text-sm leading-relaxed mb-6 max-w-xs">
              Há mais de 20 anos conectando pessoas aos melhores imóveis de João
              Pessoa e litoral paraibano.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-white-muted hover:text-gold-primary hover:border-gold-primary/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white-text font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Links Úteis
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-white-muted text-sm hover:text-gold-primary transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white-text font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-white-muted text-sm hover:text-gold-primary transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white-text font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-white-muted text-sm">
                  Av. Epitácio Pessoa, 1200
                  <br />
                  Tambaú — João Pessoa, PB
                </span>
              </li>
              <li>
                <a
                  href="tel:+558332451234"
                  className="flex items-center gap-3 text-white-muted text-sm hover:text-gold-primary transition-colors"
                >
                  <Phone size={16} className="text-gold-primary shrink-0" aria-hidden="true" />
                  (83) 3245-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@extremooriente.com.br"
                  className="flex items-center gap-3 text-white-muted text-sm hover:text-gold-primary transition-colors"
                >
                  <Mail size={16} className="text-gold-primary shrink-0" aria-hidden="true" />
                  contato@extremooriente.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white-muted/60 text-xs text-center sm:text-left">
            &copy; {currentYear} Imobiliária Extremo Oriente. Todos os direitos
            reservados.
          </p>
          <p className="text-white-muted/40 text-xs">
            Feito com dedicação em João Pessoa, PB
          </p>
        </div>
      </div>
    </footer>
  )
}
