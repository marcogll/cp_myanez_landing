import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="Soy tu Conta" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-serif text-lg font-semibold">Soy tu Conta</p>
                <p className="font-sans text-xs text-white/50">Martha Yanez, CP</p>
              </div>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs">
              Contador Publico certificado en Saltillo, Coahuila. Ayudando a emprendedores y negocios a crecer con finanzas sanas.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Navegacion</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Paquetes', href: '#paquetes' },
                { label: 'Sobre Mi', href: '#sobre-mi' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal + Social */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Legal</p>
            <nav className="flex flex-col gap-3 mb-8">
              <Link to="/privacidad" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Politica de Privacidad</Link>
              <Link to="/terminos" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Terminos y Condiciones</Link>
            </nav>

            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Redes</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/cpmarthayanez" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/528446768367" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; 2025 Martha Yanez Pacheco. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-white/30 max-w-sm text-center md:text-right">
            Contador Publico en Saltillo, Coahuila. Estrategia fiscal, contabilidad, impuestos.
          </p>
        </div>
      </div>
    </footer>
  );
}
