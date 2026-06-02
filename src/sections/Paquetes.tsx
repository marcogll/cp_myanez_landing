import { useEffect, useRef, useState } from 'react';

const WEBHOOK_URL = 'https://flows.soul23.cloud/webhook/wqxfno3zsft5i0mkwm5fg4pdi1y41ovsjof953ccnzooej8je';

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
    planId: 'emprendedor',
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
    planId: 'negocio',
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
    planId: 'premium',
  },
];

export default function Paquetes() {
  const ref = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const openModal = (planId: string) => {
    setSelectedPlan(planId);
    setModalOpen(true);
    setSent(false);
    setError(null);
    setForm({ nombre: '', email: '', telefono: '' });
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
    setSent(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const planName = plans.find((p) => p.planId === selectedPlan)?.name ?? 'Desconocido';
    const now = new Date().toISOString();

    const payload = {
      // Datos del lead
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono || null,
      plan_seleccionado: planName,
      plan_id: selectedPlan,
      estado: 'espera_de_pago',
      fuente: 'sitio_web_cp_myanez',
      fecha: now,

      // Prompts para el agente de análisis (Carla AI)
      system_prompt: `Eres Carla, una asistente experta en servicios contables y fiscales en México. Tu tarea es analizar mensajes de clientes potenciales que llegan desde el sitio web de la Contadora Pública Martha Yáñez.

INSTRUCCIONES:
1. Lee el mensaje del cliente y determina la INTENCIÓN principal.
2. Clasifica el mensaje usando estas categorías (puedes usar múltiples si aplica):
   - Servicio: CONTABILIDAD_GENERAL, IMPUESTOS_ISR_IVA, NOMINA, AUDITORIA, CONSULTA_FISCAL, REGISTRO_EMPRESA, DECLARACION_ANUAL, OTRO
   - Urgencia: ALTA, MEDIA, BAJA
   - Tipo de cliente: PERSONA_FISICA, PERSONA_MORAL, EMPRENDEDOR, DESCONOCIDO
   - Estado emocional: PREOCUPADO, NEUTRO, OPTIMISTA, FRUSTRADO
   - Canal preferido: WHATSAPP, EMAIL, LLAMADA, NO_ESPECIFICA
3. Genera entre 1 y 5 tags relevantes para N8N en formato snake_case.
4. Resume en 1 oración la necesidad real del cliente.
5. Sugiere la siguiente acción de seguimiento recomendada.

FORMATO DE SALIDA (JSON estricto, sin markdown):
{
  "intencion": "string",
  "categorias": {
    "servicio": ["string"],
    "urgencia": "string",
    "tipo_cliente": "string",
    "estado_emocional": "string",
    "canal_preferido": "string"
  },
  "tags": ["string"],
  "resumen_necesidad": "string",
  "accion_recomendada": "string",
  "notas_internas": "string"
}`,

      user_prompt: `Nuevo lead interesado en contratar un plan de servicio contable. Recibido el ${now}.

DATOS DEL CLIENTE:
- Nombre: ${form.nombre}
- Email: ${form.email}
- Teléfono: ${form.telefono || 'No proporcionado'}
- Plan seleccionado: ${planName}
- Estado: espera_de_pago
- Fuente: sitio_web_cp_myanez

Realiza el análisis completo según tus instrucciones y devuelve solo el JSON válido.`,
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al enviar. Intenta de nuevo.');
      }

      setSent(true);
      setForm({ nombre: '', email: '', telefono: '' });
      setTimeout(() => {
        setSent(false);
        closeModal();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

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

              {plan.cta === 'Empieza Ahora' ? (
                <button
                  onClick={() => openModal(plan.planId)}
                  className={`block w-full text-center font-sans text-sm font-semibold py-3.5 rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-sage-400 text-forest hover:bg-sage-300'
                      : 'bg-forest text-white hover:bg-sage-700'
                  }`}
                >
                  {plan.cta}
                </button>
              ) : (
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
              )}
            </div>
          ))}
        </div>

        <p className="pkg-anim text-center font-sans text-xs text-gray-400 mt-10" style={{ opacity: 0 }}>
          * Precios en MXN. IVA incluido. Se requiere contrato minimo de 3 meses. Los planes son 15-20% mas caros por mes que por trimestre. Pregunta por opciones anuales o semestrales.
        </p>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="material-symbols-outlined text-gray-500">close</span>
            </button>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl text-sage-600">check_circle</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-forest">Datos enviados</h3>
                <p className="font-sans text-sm text-gray-500 mt-2">Te contactaremos para completar tu pago.</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-semibold text-forest mb-2">
                  Empieza tu plan
                </h3>
                <p className="font-sans text-sm text-gray-500 mb-6">
                  Déjanos tus datos para enviarte los pasos de pago y activar tu cuenta.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all disabled:opacity-60"
                    />
                  </div>

                  {error && (
                    <p className="font-sans text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-sans text-sm font-semibold py-3.5 rounded-xl bg-forest text-white hover:bg-sage-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Enviar datos de pago'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
