import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import Servicios from './sections/Servicios';
import Paquetes from './sections/Paquetes';
import SobreMi from './sections/SobreMi';
import Testimonios from './sections/Testimonios';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Paquetes />
        <SobreMi />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  );
}
