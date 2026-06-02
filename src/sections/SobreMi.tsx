import { useEffect, useRef } from 'react';

const values = [
  { icon: 'lightbulb', title: 'Estrategia', desc: 'Pienso en el largo plazo de tus finanzas.' },
  { icon: 'schedule', title: 'Puntualidad', desc: 'Cumplo con todas las fechas fiscales.' },
  { icon: 'handshake', title: 'Confianza', desc: 'Tu informacion siempre es confidencial.' },
  { icon: 'auto_awesome', title: 'Proactividad', desc: 'Te aviso antes de que surja un problema.' },
];

export default function SobreMi() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.about-anim');
          els.forEach((el, i) => {
            const h = el as HTMLElement;
            h.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`;
            h.style.opacity = '1';
            h.style.transform = 'translateY(0)';
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="sobre-mi" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div className="about-anim flex justify-center" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-sage-100 -rotate-3" />
              <img
                src="/images/martha.jpg"
                alt="Martha Yanez"
                className="relative w-[300px] h-[380px] md:w-[360px] md:h-[460px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <p className="font-serif text-2xl font-bold text-forest">10+</p>
                <p className="font-sans text-xs text-gray-500">Anos de experiencia</p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="about-anim inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 mb-4" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              Sobre Mi
            </span>
            <h2 className="about-anim font-serif text-3xl md:text-4xl font-semibold text-forest leading-tight" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              No solo cumplo con el SAT, <em className="italic">ayudo a crecer tu negocio</em>
            </h2>
            <div className="about-anim mt-6 space-y-4 font-sans text-gray-600 text-sm leading-relaxed" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              <p>
                Soy Martha Yanez Pacheco, Contador Publico certificado con mas de 10 anos de experiencia y siempre actualizandome, ayudando a emprendedores y negocios en Saltillo, Coahuila.
              </p>
              <p>
                Como mama y emprendedora, entiendo los retos de manejar un negocio mientras cuidas de tu familia. Por eso mi enfoque es simple: organizacion, claridad y resultados. No te dejo con dudas ni papeleo sin sentido.
              </p>
              <p>
                He ayudado a mas de 20 clientes a ordenar sus finanzas, reducir su carga fiscal y tomar decisiones inteligentes con sus numeros. Cada cliente recibe atencion personalizada porque tu negocio es unico.
              </p>
            </div>

            {/* Values grid */}
            <div className="about-anim grid grid-cols-2 gap-4 mt-8" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-sage-700">{v.icon}</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-forest">{v.title}</p>
                    <p className="font-sans text-xs text-gray-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
