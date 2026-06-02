import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { title: '1. Aceptacion', text: 'Al usar este sitio web y contratar nuestros servicios, aceptas estos terminos. Si no estas de acuerdo, no uses el sitio ni los servicios.' },
  { title: '2. Servicios', text: 'Ofrecemos servicios de contabilidad, preparacion de impuestos, estrategia fiscal y asesoria empresarial. Los servicios se prestan bajo contrato formal con alcance y honorarios definidos.' },
  { title: '3. Honorarios y Pagos', text: 'Los honorarios se establecen por escrito en el contrato de servicios. Los pagos son mensuales y deben realizarse dentro de los primeros 5 dias de cada mes. No hay reembolsos por servicios ya prestados.' },
  { title: '4. Confidencialidad', text: 'Mantenemos estricta confidencialidad sobre toda la informacion financiera y personal de nuestros clientes. Esta obligacion permanece vigente incluso despues de terminada la relacion profesional.' },
  { title: '5. Responsabilidad', text: 'La informacion en este sitio es de caracter general y no constituye asesoria fiscal personalizada. No nos hacemos responsables por decisiones tomadas basadas en la informacion del sitio sin consulta profesional.' },
  { title: '6. Cancelacion', text: 'Cualquiera de las partes puede terminar la relacion con aviso por escrito de 15 dias habiles. Se facturaran los servicios prestados hasta la fecha de terminacion.' },
  { title: '7. Legislacion', text: 'Estos terminos se rigen por las leyes de Mexico. Cualquier controversia se resolvera ante los tribunales competentes de Saltillo, Coahuila.' },
  { title: '8. Contacto', text: 'Para cualquier duda sobre estos terminos, contactanos por WhatsApp al +52 844 676 8367.' },
];

export default function Terminos() {
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
        <h1 className="font-serif text-4xl font-semibold text-forest">Terminos y Condiciones</h1>
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
