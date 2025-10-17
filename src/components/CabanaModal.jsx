import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CabanaModal({
  cabana,
  isOpen,
  onClose,
  onReservarClick,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !cabana) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === cabana.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? cabana.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleReservarClick = () => {
    onReservarClick(cabana);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-6xl w-full mx-4 max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header fixo no topo */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{cabana.name}</h2>
            <p className="text-[#4A5D3F] font-medium">{cabana.capacity}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Conteúdo principal com scroll VERTICAL no mobile */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row min-h-0">
            {/* Galeria - No mobile fica no topo e sobe ao rolar */}
            <div className="lg:w-2/3 p-4 flex flex-col">
              {/* Container da imagem principal */}
              <div className="flex items-center justify-center min-h-[50vh] lg:min-h-[300px] mb-3">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={cabana.images[currentImageIndex]}
                    alt={`${cabana.name} - Imagem ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[50vh] lg:max-h-full object-contain"
                  />

                  {/* Navegação */}
                  {cabana.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1 rounded-full shadow-lg transition-all"
                      >
                        <ChevronLeft size={20} className="text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1 rounded-full shadow-lg transition-all"
                      >
                        <ChevronRight size={20} className="text-gray-700" />
                      </button>

                      {/* Contador */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                        {currentImageIndex + 1} / {cabana.images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Miniaturas */}
              {cabana.images.length > 1 && (
                <div className="flex-shrink-0 overflow-x-auto">
                  <div
                    className="flex gap-1 pb-1"
                    style={{ minWidth: "min-content" }}
                  >
                    {cabana.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border transition-all ${
                          index === currentImageIndex
                            ? "border-[#4A5D3F]"
                            : "border-gray-300 hover:border-gray-500"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Informações - No mobile fica depois da galeria */}
            <div className="lg:w-1/3 lg:border-l lg:border-gray-100 p-4">
              <div className="space-y-4">
                {/* Descrição */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Sobre
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {cabana.fullDescription.intro}
                  </p>
                </div>

                {/* Seções Detalhadas */}
                <div className="space-y-3">
                  {cabana.fullDescription.sections.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {section.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Comodidades */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Comodidades
                  </h3>
                  <div className="grid grid-cols-2 gap-1">
                    {cabana.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 text-gray-700 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-[#4A5D3F] rounded-full flex-shrink-0"></div>
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão Reservar - AGORA FUNCIONAL */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={handleReservarClick}
                    className="w-full bg-[#4A5D3F] hover:bg-[#3D2817] text-white py-3 rounded-lg font-semibold text-sm transition-colors duration-300"
                  >
                    Fazer Reserva
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
