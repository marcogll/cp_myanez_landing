import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-5 md:px-10 py-4 max-w-[1400px] mx-auto">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }} className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Soy tu Conta" className="w-11 h-11 rounded-full object-cover shadow-sm" />
            <div className="flex flex-col">
              <span className={`font-serif text-base font-semibold leading-tight transition-colors duration-300 ${scrolled ? 'text-forest' : 'text-forest'}`}>
                Soy tu Conta
              </span>
              <span className={`text-[10px] font-sans font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${scrolled ? 'text-sage-600' : 'text-sage-600'}`}>
                Martha Yanez, CP
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`font-sans text-sm font-medium transition-colors duration-300 hover:text-sage-500 ${
                  scrolled ? 'text-forest/80' : 'text-forest/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/cpmarthayanez"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold px-6 py-2.5 rounded-full bg-forest text-white hover:bg-sage-700 transition-all duration-300"
            >
              Agendar
            </a>
          </nav>

          {/* Burger - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ background: menuOpen ? 'transparent' : scrolled ? '#F0F5F0' : '#F0F5F0' }}
          >
            <span className="material-symbols-outlined text-2xl text-forest">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="font-serif text-3xl text-white/90 hover:text-sage-300 transition-colors"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${0.1 + i * 0.06}s, transform 0.5s ease ${0.1 + i * 0.06}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/528446768367"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 font-sans text-sm font-semibold px-8 py-3 rounded-full bg-sage-400 text-forest hover:bg-sage-300 transition-all"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s`,
            }}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
