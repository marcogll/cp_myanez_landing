import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { title: '1. Informacion que Recopilamos', text: 'Recopilamos informacion personal que nos proporcionas al contactarnos: nombre, email, telefono y mensaje. Tambien datos necesarios para la prestacion de servicios contables y fiscales.' },
  { title: '2. Uso de la Informacion', text: 'Utilizamos tu informacion para: responder consultas, prestar servicios contables, cumplir obligaciones fiscales ante autoridades, y comunicacion sobre tu servicio.' },
  { title: '3. Proteccion de Datos', text: 'Implementamos medidas de seguridad tecnicas y administrativas para proteger tu informacion. Tu informacion financiera es confidencial y se maneja con estricta reserva profesional.' },
  { title: '4. Compartir Informacion', text: 'No vendemos ni compartimos tu informacion con terceros para marketing. Solo compartimos datos con autoridades fiscales (SAT) cuando la ley lo requiere.' },
  { title: '5. Tus Derechos (ARCO)', text: 'Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, contactanos por WhatsApp o email.' },
  { title: '6. Cookies', text: 'Este sitio web no utiliza cookies de seguimiento ni herramientas de analisis de terceros. No recopilamos informacion de navegacion.' },
  { title: '7. Cambios', text: 'Nos reservamos el derecho de actualizar esta politica. Cualquier cambio sera publicado en esta pagina con la fecha de actualizacion.' },
];

export default function Privacidad() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: '#F7F6F2' }}>
      <header className="bg-forest/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="" className="w-8 h-8 rounded-full" />
            <span className="font-serif text-base font-semibold text-white">Soy tu Conta</span>
          </Link>
          <Link to="/" className="font-sans text-xs font-medium uppercase tracking-wider text-white/60 hover:text-white transition-colors">Volver</Link>
        </div>
      </header>
      <main className="max-w-[900px] mx-auto px-5 md:px-10 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest">Politica de Privacidad</h1>
        <p className="font-sans text-sm text-gray-400 mt-2">Ultima actualizacion: Junio 2025</p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="font-serif text-xl font-semibold text-forest mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
