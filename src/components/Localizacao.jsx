import React from "react";
import { MapPin, Navigation, Compass } from "lucide-react";
import { contato } from "../data/cabanas";

export default function Localizacao() {
  // Links diretos atualizados com suas coordenadas exatas
  const googleMapsUrl =
    "https://www.google.com/maps/dir//estrada+colonia+afonso+pena,+s%2Fn+-+Col%C3%B4nia+Afonso+Pena,+Morro+Redondo+-+RS,+96150-000/@-31.6379808,-52.7121738,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9510272353c9bb17:0x8132a40ef2cae9a!2m2!1d-52.6297725!2d-31.6380073?entry=ttu";

  const wazeUrl = "https://waze.com/ul?ll=-31.6380073,-52.6297725&navigate=yes";

  return (
    <section
      id="localizacao"
      className="py-16 bg-gradient-to-br from-[#4A5D3F] to-[#3D2817]"
    >
      <div className="container mx-auto px-4">
        {/* Header Compacto */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            Como Chegar
          </h2>
          <p className="text-lg text-white/80">
            Encontre o caminho para o seu refúgio na natureza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Card de Informações Super Compacto */}
          <div className="flex flex-col">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex-1">
              {/* Cabeçalho Compacto */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Localização</h3>
                  <p className="text-white/70 text-sm">Morro Redondo - RS</p>
                </div>
              </div>

              {/* Endereço Ultra Simples */}
              <div className="mb-6">
                <div className="text-white/90 space-y-1 text-sm">
                  <p className="font-medium">{contato.endereco.rua}</p>
                  <p>
                    {contato.endereco.cidade}, {contato.endereco.estado}
                  </p>
                  <p>CEP: {contato.endereco.cep}</p>
                </div>
              </div>

              {/* Divisória Sutil */}
              <div className="border-t border-white/20 my-4"></div>

              {/* Botões de Navegação Compactos */}
              <div className="space-y-3">
                <p className="text-white text-sm font-semibold mb-3 text-center">
                  Abrir no:
                </p>

                {/* Google Maps */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-white hover:bg-gray-100 text-gray-900 py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/icons/maps.png"
                      alt="Google Maps"
                      className="w-6 h-6"
                    />
                    <span className="font-bold text-sm">Google Maps</span>
                  </div>
                  <Navigation
                    size={16}
                    className="text-gray-400 group-hover:text-[#4285F4] transition-colors"
                  />
                </a>

                {/* Waze */}
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-white hover:bg-gray-100 text-gray-900 py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/icons/waze.png"
                      alt="Waze"
                      className="w-6 h-6"
                    />
                    <span className="font-bold text-sm">Waze</span>
                  </div>
                  <Compass
                    size={16}
                    className="text-gray-400 group-hover:text-[#333366] transition-colors"
                  />
                </a>
              </div>

              {/* Dica Compacta - CENTRALIZADA */}
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <span className="text-blue-300 text-lg flex-shrink-0">
                    💡
                  </span>
                  <p className="text-white/80 text-xs leading-tight">
                    Use o Waze para rotas atualizadas com informações de
                    trânsito em tempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="h-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54826.89477984485!2d-52.6!3d-31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM2JzAwLjAiUyA1MsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Refúgio Araçá - Morro Redondo/RS"
                className="rounded-2xl"
              />
            </div>

            {/* Overlay do Mapa */}
            <div className="absolute bottom-3 left-3 bg-black/70 text-white py-1 px-3 rounded-md backdrop-blur-sm">
              <p className="text-xs font-medium">📍 Refúgio Araçá</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
