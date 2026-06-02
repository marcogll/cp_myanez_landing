import { useState, useRef, useEffect } from 'react';

const WEBHOOK_URL = 'https://flows.soul23.cloud/webhook/wqxfno3zsft5i0mkwm5fg4pdi1y41ovsjof953ccnzooej8je';

export default function Contacto() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.contact-anim');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono || null,
          mensaje: form.mensaje,
          fuente: 'sitio_web_cp_myanez',
          fecha: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje. Intenta de nuevo.');
      }

      setSent(true);
      setForm({ nombre: '', email: '', telefono: '', mensaje: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="contact-anim inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 mb-4" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              Contacto
            </span>
            <h2 className="contact-anim font-serif text-3xl md:text-4xl font-semibold text-forest leading-tight" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              Hablemos de <em className="italic">tus numeros</em>
            </h2>
            <p className="contact-anim font-sans text-sm text-gray-500 mt-4 max-w-md" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              Agenda una consulta gratuita de 15 minutos. Sin compromiso, solo claridad sobre tu situacion fiscal.
            </p>

            <div className="contact-anim space-y-5 mt-10" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              <a href="https://wa.me/528446768367" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors group">
                <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-sans text-sm font-semibold text-forest group-hover:underline">+52 844 676 8367</p>
                </div>
              </a>

              <a href="https://calendly.com/cpmarthayanez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors group">
                <div className="w-11 h-11 rounded-full bg-sage-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">calendar_month</span>
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-400 uppercase tracking-wider">Calendly</p>
                  <p className="font-sans text-sm font-semibold text-forest group-hover:underline">Agendar una cita</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-sage-50">
                <div className="w-11 h-11 rounded-full bg-sage-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-400 uppercase tracking-wider">Ubicacion</p>
                  <p className="font-sans text-sm font-semibold text-forest">Saltillo, Coahuila, Mexico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-anim" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl text-sage-600">check_circle</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-forest">Mensaje enviado</h3>
                <p className="font-sans text-sm text-gray-500 mt-2">Te respondere lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream-50 rounded-2xl p-8 border border-cream-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">Nombre</label>
                    <input type="text" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all disabled:opacity-60" />
                  </div>
                  <div>
                    <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">Telefono</label>
                    <input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all disabled:opacity-60" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all disabled:opacity-60" />
                </div>
                <div className="mb-6">
                  <label className="font-sans text-xs font-semibold text-forest uppercase tracking-wider mb-2 block">Mensaje</label>
                  <textarea rows={4} required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 font-sans text-sm text-forest outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all resize-none disabled:opacity-60" />
                </div>
                {error && (
                  <p className="mb-4 font-sans text-sm text-red-600">{error}</p>
                )}
                <button type="submit" disabled={loading}
                  className="w-full font-sans text-sm font-semibold py-3.5 rounded-xl bg-forest text-white hover:bg-sage-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
