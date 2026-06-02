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

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col items-center gap-4">
          <p className="font-sans text-xs text-white/40 text-center">
            &copy; 2026 Martha Yañez Pacheco. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-white/30 max-w-sm text-center">
            Contador Publico en Saltillo, Coahuila. Estrategia fiscal, contabilidad, impuestos.
          </p>
          <a
            href="https://soul23.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300 mt-2"
          >
            <svg
              version="1.1"
              viewBox="0 0 858.47046 253.70135"
              className="h-5 w-auto"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-1160.1694,-10.970869)">
                <path d="m 1171.9047,225.32161 v -29 h 15 15 v 14.5 14.5 h 34.3334 c 18.8833,0 34.5208,-0.18687 34.75,-0.41527 0.2291,-0.22839 0.2896,-12.15339 0.1343,-26.5 l -0.2824,-26.08473 h -10.9676 -10.9677 v -13.5 -13.5 h -23.5 -23.5 v -14 -14 h -15 -15 v -48 -48 h 65 65 v 24 24 h -15.5 -15.5 v -12.75 -12.75 h -33.967 -33.967 l -0.283,24.16752 c -0.1556,13.29214 -0.058,24.15135 0.217,24.13158 0.275,-0.0198 4.8875,0.0173 10.25,0.0825 l 9.75,0.1184 v 13 13 h 25 25 v 12.5 12.5 h 14.5 14.5 v 55.5 55.5 h -65 -65 z m 152,-87.5 v -116.5 h 60.5 60.5 v 116.5 116.5 h -60.5 -60.5 z m 92.0031,14.75 c 0,-40.0125 0.2975,-80.5125 0.6574,-90 l 0.6543,-17.25 h -33.6574 -33.6574 v 11.5 c 0,7 0.3913,11.5 1,11.5 0.6582,0 1,26.83333 1,78.5 v 78.5 h 32 32 z m 51.9969,-14.75 v -116.5 h 20.5 20.5 l -10e-4,102.25 -10e-4,102.25 23.0212,-0.5 23.0211,-0.5 -0.029,-101.75 -0.029,-101.75 56.7592,-6e-5 56.7592,-7e-5 -0.2593,102.00007 -0.2597,102.00006 h 28.509 28.5093 v 14.5 14.5 h -49 -49 v -105 -105 h -15.5 -15.5 v 105 105 h -64 -64 z m 279,48.5 v -68 h 32 32 v -13 -13 h 11 11 v -24 -24 h -30.5 -30.5 v 12.5 12.5 h -12.5 -12.5 v -24 -24 h 55 55 v 61.5 61.5 h -42.5 -42.5 v 40.5 40.5 h 19.5 c 14.9055,0 19.5124,-0.29453 19.5524,-1.25 0.029,-0.6875 0.01,-6.9875 -0.049,-14 l -0.1016,-12.75 h 23.049 23.0492 v 28.5 28.5 h -55 -55 z m 131,39.5 v -28.5 h 19 19 v 14 14 h 27 27 v -40.5 -40.5 h -13.5 -13.5 v -12.5 -12.5 h 13.5 13.5 v -37.5 -37.5 h -27 -27 v 12.5 12.5 h -19 -19 v -24 -24 h 64.5 64.5 v 49 49 h -11 -11 v 12 12 h 11 11 v 55.5 55.5 h -64.5 -64.5 z m -180,-49 v -19.5 h 13.5 13.5 v 19.5 19.5 h -13.5 -13.5 z m 180,-71.5 v -13 h 19 19 v 13 13 h -19 -19 z" />
              </g>
            </svg>
            <span className="font-sans text-[10px] text-white/50 tracking-[0.2em] uppercase">by soul23.mx</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
