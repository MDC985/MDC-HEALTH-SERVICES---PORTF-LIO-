import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import MissionVisionValues from './components/MissionVisionValues';
import AreasAtuacao from './components/AreasAtuacao';
import Diferenciais from './components/Diferenciais';
import Experiencia from './components/Experiencia';
import PropostaValor from './components/PropostaValor';
import ObjetivoEstrategico from './components/ObjetivoEstrategico';
import Contactos from './components/Contactos';
import Organograma from './components/Organograma';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar scrolled={scrolled} />
      <Hero />
      
      {/* QUEM SOMOS - VEM LOGO APÓS O HERO */}
      <QuemSomos />
      
      <MissionVisionValues />
      <AreasAtuacao />
      <Diferenciais />
      <Experiencia />
      <PropostaValor />
      <ObjetivoEstrategico />
      <Localizacao />
      <Contactos />
      <Organograma />
      <Footer />
    </div>
  );
}

export default App;
