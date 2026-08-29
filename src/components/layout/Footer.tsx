import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden pt-16 pb-8">
      {/* Subtle network pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none network-pattern"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Slogan */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg relative overflow-hidden">
                <span className="text-primary font-bold text-2xl z-10">S</span>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight tracking-tight text-white">
                  Sunulink
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
                  Telecom SA
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecter aujourd&apos;hui, bâtir demain. Fournisseur de solutions de télécommunications innovantes au Sénégal et dans les 14 régions.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-sans">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Services', href: '#services' },
                { label: 'À propos', href: '#a-propos' },
                { label: 'Starlink', href: '#starlink' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-sans">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Internet & Connectivité',
                'Installation & Déploiement',
                'Maintenance & Support',
                'Réseaux & Infrastructures',
                'Connectivité Satellitaire',
              ].map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-sans">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Mail size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>contact@sunulink.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Phone size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>+221 XX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-white/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} SUNULINK Telecom SA. Tous droits réservés.
          </p>

          <div className="flex items-center gap-3">
            {/* Custom SVG Social Icons */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://sunulink.com"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300"
              aria-label="Website"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
