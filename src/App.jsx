import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Acomodacoes from "./components/Acomodacoes";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import ReservaModal from "./components/ReservaModal";
import CabanaModal from "./components/CabanaModal";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { cabanas } from "./data/cabanas";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showReservaModal, setShowReservaModal] = useState(false);
  const [selectedCabana, setSelectedCabana] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para encontrar cabana pelo ID
  const findCabanaById = (cabanaId) => {
    return cabanas.find((cabana) => cabana.id === cabanaId);
  };

  // Função para abrir modal de cabana a partir do Header
  const handleCabanaClickFromHeader = (cabanaId) => {
    const cabana = findCabanaById(cabanaId);
    if (cabana) {
      setSelectedCabana(cabana);
    }
  };

  const handleHeroReservarClick = () => {
    setShowReservaModal(true);
  };

  const handleCabanaReservarClick = (cabana) => {
    setSelectedCabana(null);
    setShowReservaModal(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header
        scrollPosition={scrollPosition}
        onCabanaClick={handleCabanaClickFromHeader} // ← CORRIGIDO AQUI
      />

      <Hero
        scrollPosition={scrollPosition}
        onReservarClick={handleHeroReservarClick}
      />

      <Acomodacoes cabanas={cabanas} onCabanaClick={setSelectedCabana} />

      <Localizacao />

      <Footer />

      <WhatsAppFloat />

      <ReservaModal
        isOpen={showReservaModal}
        onClose={() => setShowReservaModal(false)}
      />

      <CabanaModal
        cabana={selectedCabana}
        isOpen={!!selectedCabana}
        onClose={() => setSelectedCabana(null)}
        onReservarClick={handleCabanaReservarClick}
      />
    </div>
  );
}

export default App;
