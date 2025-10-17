import React from "react";
import { contato } from "../data/cabanas";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${contato.whatsapp}?text=Olá! Gostaria de saber mais sobre o Refúgio Araçá`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <img
        src="/images/icons/whatsapp-float.png"
        alt="WhatsApp"
        className="w-[46px] h-[46px]" // Ajuste o tamanho se necessário
      />
    </a>
  );
}
