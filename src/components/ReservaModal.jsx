import React from "react";
import { X } from "lucide-react";
import { contato } from "../data/cabanas";

export default function ReservaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const reservaOptions = [
    {
      name: "WhatsApp",
      icon: "/images/icons/whatsapp.png",
      url: `https://wa.me/${contato.whatsapp}?text=Olá! Gostaria de fazer uma reserva no Refúgio Araçá`,
      color: "bg-green-500 hover:bg-green-600",
      description: "Reserva direta e rápida",
    },
    {
      name: "Booking.com",
      icon: "/images/icons/booking.png",
      url: contato.social.booking,
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Plataforma internacional",
    },
    {
      name: "Airbnb",
      icon: "/images/icons/airbnb.png",
      url: contato.social.airbnb[0],
      color: "bg-rose-500 hover:bg-rose-600",
      description: "Experiência completa",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl border border-gray-200 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            Fazer Reserva
          </h2>
          <p className="text-gray-600 text-sm">
            Escolha sua plataforma preferida
          </p>
        </div>

        {/* Opções de Reserva */}
        <div className="space-y-3">
          {reservaOptions.map((option, index) => (
            <a
              key={index}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${option.color} text-white rounded-lg p-4 transition-all duration-200 hover:scale-105 hover:shadow-lg block group font-sans`}
            >
              <div className="flex items-center gap-3">
                {/* Ícone */}
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Texto - Descrição sempre visível no mobile */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col justify-center h-full">
                    <div className="font-semibold text-base tracking-tight leading-none">
                      {option.name}
                    </div>
                    <div className="text-white/90 text-xs transition-opacity duration-200 truncate leading-none mt-1 md:opacity-0 md:group-hover:opacity-100 opacity-100">
                      {option.description}
                    </div>
                  </div>
                </div>

                {/* Seta - Sempre visível no mobile */}
                <div className="flex-shrink-0 transform transition-all duration-200 flex items-center md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1 opacity-100">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Informativo */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 text-lg flex-shrink-0">💡</span>
            <div>
              <p className="text-gray-700 text-xs font-medium tracking-tight leading-none">
                Reserva Segura
              </p>
              <p className="text-gray-500 text-xs leading-none mt-0.5">
                Todas as plataformas oferecem pagamento seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
