import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.hero-anim');
            els.forEach((el, i) => {
              const htmlEl = el as HTMLElement;
              htmlEl.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * i}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * i}s`;
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0)';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F7F6F2 0%, #E8F0E8 40%, #D4E4D4 100%)' }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-sage-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-48 h-48 rounded-full bg-sage-300/30 blur-2xl" />
      <div className="absolute top-1/3 right-[5%] w-32 h-32 rounded-full bg-sage-100/50 blur-xl" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className="hero-anim inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(143, 188, 143, 0.15)',
                border: '1px solid rgba(143, 188, 143, 0.3)',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              <span className="material-symbols-outlined text-lg" style={{ color: '#2C5E2C' }}>verified</span>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: '#2C5E2C' }}>
                Contador Publico Certificado
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-anim font-serif font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 64px)',
                color: '#1C1C1C',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              Hago que tus finanzas trabajen{' '}
              <em className="font-serif italic" style={{ color: '#2C5E2C' }}>a tu favor</em>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-anim font-sans font-light mt-6 leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 1.2vw, 18px)',
                color: '#5C5C5C',
                maxWidth: '480px',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              Estrategia fiscal, contabilidad y crecimiento inteligente para emprendedores y negocios en Saltillo, Coahuila.
            </p>

            {/* Stats row */}
            <div
              className="hero-anim flex gap-8 mt-8"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div>
                <p className="font-serif text-2xl font-semibold" style={{ color: '#2C5E2C' }}>+20</p>
                <p className="font-sans text-xs font-medium uppercase tracking-wider" style={{ color: '#5C5C5C' }}>Clientes</p>
              </div>
              <div className="w-px bg-sage-300" />
              <div>
                <p className="font-serif text-2xl font-semibold" style={{ color: '#2C5E2C' }}>5+</p>
                <p className="font-sans text-xs font-medium uppercase tracking-wider" style={{ color: '#5C5C5C' }}>Anos</p>
              </div>
              <div className="w-px bg-sage-300" />
              <div>
                <p className="font-serif text-2xl font-semibold" style={{ color: '#2C5E2C' }}>100%</p>
                <p className="font-sans text-xs font-medium uppercase tracking-wider" style={{ color: '#5C5C5C' }}>Satisfaccion</p>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="hero-anim flex flex-wrap gap-4 mt-10"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <a
                href="https://calendly.com/cpmarthayanez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: '#2C3E2D' }}
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                Agendar Cita
              </a>
              <a
                href="https://wa.me/528446768367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: '#F0F5F0', color: '#2C3E2D', border: '1.5px solid #D4E4D4' }}
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="hero-anim relative"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              {/* Background circle */}
              <div
                className="absolute -inset-4 rounded-full opacity-20"
                style={{ background: 'linear-gradient(135deg, #8FBC8F 0%, #D4E4D4 100%)' }}
              />
              {/* Photo */}
              <div
                className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl"
                style={{ border: '6px solid white' }}
              >
                <img
                  src="/images/martha.jpg"
                  alt="Martha Yanez - Contador Publico"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-2 -left-4 md:-left-8 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sage-700">trending_up</span>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold" style={{ color: '#2C3E2D' }}>Ahorro Fiscal</p>
                  <p className="font-sans text-[10px]" style={{ color: '#5C5C5C' }}>Hasta 30% en impuestos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
