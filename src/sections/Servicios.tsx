import { useEffect, useRef } from 'react';

const services = [
  {
    icon: 'receipt_long',
    title: 'Declaracion de Impuestos',
    desc: 'Preparacion precisa de declaraciones anuales y mensuales. Personas fisicas y morales. Maximiza tus deducciones legales.',
  },
  {
    icon: 'account_balance',
    title: 'Contabilidad Integral',
    desc: 'Registro, classificacion y reporte de todas tus operaciones. Estados financieros claros para tomar decisiones informadas.',
  },
  {
    icon: 'shield',
    title: 'Estrategia Fiscal',
    desc: 'Planificacion proactiva para reducir tu carga fiscal de forma legal. Ahorra dinero mientras creces.',
  },
  {
    icon: 'gavel',
    title: 'Resolucion Fiscal',
    desc: 'Defensa en auditorias, regularizacion de adeudos y tramites ante el SAT. Resuelvo tus problemas fiscales.',
  },
  {
    icon: 'groups',
    title: 'Nomina y RRHH',
    desc: 'Administracion de nomina, altas y bajas ante IMSS. Cumplimiento laboral completo para tu equipo.',
  },
  {
    icon: 'rocket_launch',
    title: 'Asesoria Empresarial',
    desc: 'Acompanamiento para nuevos negocios. Elige la estructura fiscal correcta desde el inicio.',
  },
];

export default function Servicios() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.svc-anim');
          els.forEach((el, i) => {
            const h = el as HTMLElement;
            h.style.transition = `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`;
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
    <section id="servicios" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="svc-anim inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 mb-4" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Que Hago
          </span>
          <h2 className="svc-anim font-serif text-3xl md:text-5xl font-semibold text-forest" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Servicios profesionales
          </h2>
          <p className="svc-anim font-sans text-base text-gray-500 mt-4 max-w-lg mx-auto" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Soluciones contables completas disenadas para que te enfoques en hacer crecer tu negocio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-anim group p-7 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{
                background: '#FDFCF8',
                border: '1px solid #E5E2D8',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                <span className="material-symbols-outlined text-2xl text-sage-700">{s.icon}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest mb-2">{s.title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
