import React from "react";
import { contato } from "../data/cabanas";

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      {" "}
      {/* ID ADICIONADO AQUI */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img
              src="/images/topob.png"
              alt="Refúgio Araçá"
              className="w-48 h-auto mb-6"
            />
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              A Vida é mais simples no Morro Redondo.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a
                href={contato.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
              >
                <img
                  src="/images/icons/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>

              <a
                href={contato.social.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
              >
                <img
                  src="/images/icons/booking.png"
                  alt="Booking.com"
                  className="w-6 h-6"
                />
              </a>

              <a
                href={contato.social.airbnb[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
              >
                <img
                  src="/images/icons/airbnb.png"
                  alt="Airbnb"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Contato
            </h3>
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contato.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <img
                    src="/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <span className="text-lg font-medium block group-hover:text-green-400 transition-colors">
                    {contato.telefone}
                  </span>
                  <span className="text-sm text-gray-400">
                    Clique para conversar
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contato.email}`}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <img
                    src="/images/icons/email.png"
                    alt="Email"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <span className="text-lg font-medium block group-hover:text-blue-400 transition-colors">
                    {contato.email}
                  </span>
                  <span className="text-sm text-gray-400">Envie um email</span>
                </div>
              </a>

              {/* Telefone */}
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <img
                    src="/images/icons/phone.png"
                    alt="Telefone"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <span className="text-lg font-medium block">
                    {contato.telefone}
                  </span>
                  <span className="text-sm text-gray-400">Ligue para nós</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diferenciais */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Nossos Diferenciais
            </h3>
            <div className="space-y-4">
              {/* Pet Friendly */}
              <div className="flex items-start gap-3 text-gray-300">
                <span className="text-2xl mt-1">🐾</span>
                <div>
                  <p className="font-medium text-white">Pet Friendly</p>
                  <p className="text-sm">Aceitamos pets</p>
                </div>
              </div>

              {/* Café da Manhã */}
              <div className="flex items-start gap-3 text-gray-300">
                <span className="text-2xl mt-1">☕</span>
                <div>
                  <p className="font-medium text-white">Café da Manhã</p>
                  <p className="text-sm">Delícias Locais (Opcional)</p>
                </div>
              </div>

              {/* Estacionamento */}
              <div className="flex items-start gap-3 text-gray-300">
                <span className="text-2xl mt-1">🅿️</span>
                <div>
                  <p className="font-medium text-white">Estacionamento</p>
                  <p className="text-sm">Gratuito e amplo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Navegação
            </h3>
            <nav className="space-y-3">
              {["Home", "Acomodacoes", "Localizacao"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#4A5D3F] text-lg transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="w-2 h-2 bg-[#4A5D3F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg mb-2">
            &copy; {new Date().getFullYear()} Refúgio Araçá. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
