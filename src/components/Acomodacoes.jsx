import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Acomodacoes({ cabanas, onCabanaClick }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();

      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section id="acomodacoes" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Nossa Estrutura
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Conheça nossas cabanas e área externa
        </p>

        {/* Container Relativo para as Setas */}
        <div className="relative">
          {/* Seta Esquerda - Desktop (SOLUÇÃO PROFISSIONAL) */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
              aria-label="Ver cabanas anteriores"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ChevronLeft
                  size={24}
                  className="text-gray-700 relative z-10"
                />
              </div>
              {/* Sombra de destaque */}
              <div className="absolute inset-0 rounded-full shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          )}

          {/* Seta Esquerda - Mobile (SOLUÇÃO PROFISSIONAL) */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="lg:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full p-3 shadow-xl transition-all duration-200 group"
              aria-label="Ver cabanas anteriores"
            >
              <ChevronLeft size={20} className="text-gray-700" />
              {/* Efeito de glow no hover */}
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/0 group-hover:ring-blue-500/20 transition-all duration-300"></div>
            </button>
          )}

          {/* Container do Scroll */}
          <div ref={scrollContainerRef} className="overflow-x-auto pb-8">
            <div
              className="flex gap-6 px-4 lg:px-8" /* Aumentado padding para mobile */
              style={{ minWidth: "min-content" }}
            >
              {cabanas.map((cabana) => (
                <div
                  key={cabana.id}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 group relative"
                  onClick={() => onCabanaClick(cabana)}
                >
                  <div className="h-48 bg-gray-300 overflow-hidden relative">
                    <img
                      src={cabana.coverImage}
                      alt={cabana.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#4A5D3F] transition-colors">
                      {cabana.name}
                    </h3>
                    <p className="text-[#4A5D3F] font-semibold mb-3">
                      {cabana.capacity}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {cabana.shortDesc}
                    </p>
                    <button className="w-full bg-[#4A5D3F] hover:bg-[#3D2817] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seta Direita - Desktop (SOLUÇÃO PROFISSIONAL) */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
              aria-label="Ver próximas cabanas"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ChevronRight
                  size={24}
                  className="text-gray-700 relative z-10"
                />
              </div>
              {/* Sombra de destaque */}
              <div className="absolute inset-0 rounded-full shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          )}

          {/* Seta Direita - Mobile (SOLUÇÃO PROFISSIONAL) */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="lg:hidden absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full p-3 shadow-xl transition-all duration-200 group"
              aria-label="Ver próximas cabanas"
            >
              <ChevronRight size={20} className="text-gray-700" />
              {/* Efeito de glow no hover */}
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/0 group-hover:ring-blue-500/20 transition-all duration-300"></div>
            </button>
          )}
        </div>

        {/* Indicadores de Scroll - Mobile Melhorado */}
        <div className="lg:hidden flex justify-center items-center gap-3 mt-6">
          <div className="flex gap-1.5">
            {cabanas.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-400 cursor-pointer"
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    container.scrollTo({
                      left: index * 320, // Aproximadamente a largura de um card
                      behavior: "smooth",
                    });
                  }
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            Arraste ou clique nos pontos
          </span>
        </div>

        {/* Indicador Desktop - Mais Sutil */}
        <div className="hidden lg:flex justify-center items-center mt-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Use as setas para navegar</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS para scrollbar customizada no desktop */}
      <style jsx>{`
        /* Scrollbar customizada para desktop */
        @media (min-width: 1024px) {
          .overflow-x-auto::-webkit-scrollbar {
            height: 6px;
          }
          .overflow-x-auto::-webkit-scrollbar-track {
            background: #f8f8f8;
            border-radius: 3px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb {
            background: #d1d1d1;
            border-radius: 3px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        }

        /* Mobile continua sem scrollbar */
        @media (max-width: 1023px) {
          .overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
