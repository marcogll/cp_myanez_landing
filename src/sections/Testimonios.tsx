import { useEffect, useRef } from 'react';

const testimonials = [
  {
    text: 'Martha me ayudo a ordenar las finanzas de mi negocio desde cero. Ahora se exactamente cuanto gano, cuanto debo y cuanto puedo invertir.',
    name: 'Carlos Mendez',
    role: 'Dueno de tienda de abarrotes',
  },
  {
    text: 'Desde que trabajo con Martha, mis declaraciones son un alivio, no un dolor de cabeza. Siempre me avisa con tiempo de lo que necesito.',
    name: 'Ana Lucia Herrera',
    role: 'Emprendedora digital',
  },
  {
    text: 'Me represento en una auditoria del SAT y resolvio todo en semanas. Su conocimiento y tranquilidad me dieron mucha confianza.',
    name: 'Roberto Sanchez',
    role: 'Consultor independiente',
  },
  {
    text: 'El plan de reduccion fiscal que me diseno me ahorro mas de $45,000 al ano. La inversion en su servicio se pago sola.',
    name: 'Diana Flores',
    role: 'Dentista propietaria',
  },
  {
    text: 'Como freelancer nunca sabia cuanto apartar para impuestos. Martha me dio un sistema simple que uso cada mes sin complicaciones.',
    name: 'Luis Torres',
    role: 'Disenador grafico',
  },
  {
    text: 'Llevaba anos con un contador que nunca me explicaba nada. Martha me dice las cosas claras y me enseña a entender mis numeros.',
    name: 'Patricia Ruiz',
    role: 'Dueña de salon de belleza',
  },
];

export default function Testimonios() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.test-anim');
          els.forEach((el, i) => {
            const h = el as HTMLElement;
            h.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
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
    <section id="testimonios" ref={ref} className="py-24 md:py-32" style={{ background: '#F0F5F0' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <span className="test-anim inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 mb-4" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Testimonios
          </span>
          <h2 className="test-anim font-serif text-3xl md:text-5xl font-semibold text-forest" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Lo que dicen mis clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="test-anim p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              style={{ opacity: 0, transform: 'translateY(16px)' }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ color: '#C17F59' }}>star</span>
                ))}
              </div>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-sage-200 flex items-center justify-center">
                  <span className="font-sans text-sm font-semibold text-sage-700">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-forest">{t.name}</p>
                  <p className="font-sans text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
