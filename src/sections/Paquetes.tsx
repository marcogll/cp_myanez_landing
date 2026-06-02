import { useEffect, useRef } from 'react';

const plans = [
  {
    name: 'Emprendedor',
    price: '$1,200',
    period: '/mes',
    desc: 'Para freelancers y emprendedores individuales que estan comenzando.',
    features: [
      'Declaracion mensual ISR/IVA',
      '1 consulta fiscal al mes',
      'Reporte de ingresos y gastos',
      'Soporte por WhatsApp',
      'Recordatorios de pagos',
    ],
    cta: 'Empieza Ahora',
    popular: false,
  },
  {
    name: 'Negocio',
    price: '$2,800',
    period: '/mes',
    desc: 'Para PyMEs establecidas que necesitan contabilidad completa.',
    features: [
      'Todo lo del plan Emprendedor',
      'Contabilidad electronica completa',
      '2 consultas fiscales al mes',
      'Estados financieros trimestrales',
      'Nomina basica (hasta 5 empleados)',
      'Diagnostico fiscal anual',
    ],
    cta: 'Elegir Plan',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$4,500',
    period: '/mes',
    desc: 'Para negocios en crecimiento que buscan una asesoria estrategica.',
    features: [
      'Todo lo del plan Negocio',
      'Consultoria fiscal ilimitada',
      'Proyeccion financiera anual',
      'Nomina completa (ilimitada)',
      'Defensa en auditorias',
      'Estrategia de reduccion fiscal',
      'Reportes personalizados mensuales',
    ],
    cta: 'Agendar Demo',
    popular: false,
  },
];

export default function Paquetes() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.pkg-anim');
          els.forEach((el, i) => {
            const h = el as HTMLElement;
            h.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
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
    <section id="paquetes" ref={ref} className="py-24 md:py-32" style={{ background: '#F0F5F0' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pkg-anim inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 mb-4" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Paquetes
          </span>
          <h2 className="pkg-anim font-serif text-3xl md:text-5xl font-semibold text-forest" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Elige tu plan
          </h2>
          <p className="pkg-anim font-sans text-base text-gray-500 mt-4 max-w-lg mx-auto" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            Precios transparentes sin sorpresas. Todos los planes incluyen facturacion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="pkg-anim relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{
                background: plan.popular ? '#2C3E2D' : 'white',
                border: plan.popular ? 'none' : '1px solid #E5E2D8',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-1 rounded-full bg-sage-400 text-forest">
                  Mas Popular
                </div>
              )}

              <h3 className={`font-serif text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-forest'}`}>
                {plan.name}
              </h3>
              <p className={`font-sans text-sm mb-6 ${plan.popular ? 'text-white/60' : 'text-gray-500'}`}>
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-serif text-4xl font-bold ${plan.popular ? 'text-white' : 'text-forest'}`}>
                  {plan.price}
                </span>
                <span className={`font-sans text-sm ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-lg mt-0.5 flex-shrink-0" style={{ color: plan.popular ? '#8FBC8F' : '#2C5E2C' }}>
                      check_circle
                    </span>
                    <span className={`font-sans text-sm leading-relaxed ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/cpmarthayanez"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-sans text-sm font-semibold py-3.5 rounded-full transition-all duration-300 ${
                  plan.popular
                    ? 'bg-sage-400 text-forest hover:bg-sage-300'
                    : 'bg-forest text-white hover:bg-sage-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pkg-anim text-center font-sans text-xs text-gray-400 mt-10" style={{ opacity: 0 }}>
          * Precios en MXN. IVA incluido. Se requiere contrato minimo de 3 meses.
        </p>
      </div>
    </section>
  );
}
