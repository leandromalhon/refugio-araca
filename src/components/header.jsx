import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ scrollPosition, onCabanaClick }) {
  const isScrolled = scrollPosition > 50;
  const isVisible = scrollPosition > 80;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const menuItems = ["Home", "Acomodações", "Localização", "Contato"];

  // Acomodações com nomes corrigidos e IDs correspondentes
  const acomodacoes = [
    {
      id: "bergamota",
      nome: "BERGAMOTA",
      icone: "/images/icons/bergamota.png",
    },
    {
      id: "butia",
      nome: "BUTIA",
      icone: "/images/icons/butia.png",
    },
    {
      id: "pitanga",
      nome: "PITANGA",
      icone: "/images/icons/pitanga.png",
    },
    {
      id: "amora",
      nome: "AMORA",
      icone: "/images/icons/amora.png",
    },
  ];

  const handleCabanaClick = (cabanaId) => {
    setIsMobileMenuOpen(false);

    // Aguarda o menu fechar antes de abrir o modal
    setTimeout(() => {
      if (onCabanaClick) {
        onCabanaClick(cabanaId);
      } else {
        // Fallback: rola para a seção de acomodações
        const element = document.getElementById("acomodacoes");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 w-full z-50 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20"
                : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"
            }`}
          >
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src="/images/topo.png"
                    alt="Refúgio Araçá"
                    className={`transition-all duration-500 ${
                      isScrolled ? "h-10 w-auto" : "h-12 w-auto brightness-125"
                    }`}
                  />
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace("ç", "c")}`}
                      className={`relative font-medium transition-all duration-300 group ${
                        isScrolled
                          ? "text-gray-700 hover:text-[#4A5D3F]"
                          : "text-white hover:text-white/90"
                      }`}
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {item}
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                          isScrolled ? "bg-[#4A5D3F]" : "bg-white"
                        }`}
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                  className={`md:hidden p-2 rounded-lg transition-colors ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="relative w-6 h-6">
                    <motion.span
                      className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        top: isMobileMenuOpen ? "11px" : "4px",
                      }}
                    />
                    <motion.span
                      className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    />
                    <motion.span
                      className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        top: isMobileMenuOpen ? "11px" : "20px",
                      }}
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-md shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-16 h-full flex flex-col">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Menu Items Principais - MENOR AINDA */}
                <nav className="flex flex-col space-y-3 mb-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace("ç", "c")}`}
                      variants={mobileItemVariants}
                      className="text-lg font-semibold text-gray-800 hover:text-[#4A5D3F] transition-colors py-1 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                {/* Seção: Conheça Nossas Acomodações */}
                <motion.div
                  variants={mobileItemVariants}
                  className="bg-gradient-to-br from-[#4A5D3F]/10 to-[#3D2817]/10 rounded-2xl p-4 border border-[#4A5D3F]/20 mb-6"
                >
                  <h3 className="text-base font-bold text-gray-800 mb-3 text-center">
                    Conheça Nossas Acomodações
                  </h3>

                  {/* Banner das Acomodações */}
                  <div className="mb-3 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/acomodacoes-banner.jpg"
                      alt="Nossas Cabanas"
                      className="w-full h-16 object-cover"
                    />
                  </div>

                  {/* Grid de Ícones das Cabanas */}
                  <div className="grid grid-cols-2 gap-2">
                    {acomodacoes.map((cabana, index) => (
                      <motion.button
                        key={cabana.id}
                        onClick={() => handleCabanaClick(cabana.id)}
                        className="flex flex-col items-center p-1 rounded-lg bg-white/50 hover:bg-white transition-all duration-200 group cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                      >
                        <div className="w-10 h-10 mb-1 flex items-center justify-center">
                          <img
                            src={cabana.icone}
                            alt={cabana.nome}
                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                          {cabana.nome}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Botão Ver Todas */}
                  <motion.button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById("acomodacoes");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 300);
                    }}
                    className="block w-full mt-2 py-1.5 bg-[#4A5D3F] text-white text-xs font-semibold rounded-lg text-center hover:bg-[#3D2817] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Todas as Cabanas
                  </motion.button>
                </motion.div>

                {/* Footer do Menu Mobile - MENOR */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="text-gray-600 text-xs">
                    <p className="font-semibold">Refúgio Araçá</p>
                    <p className="text-gray-400">Morro Redondo - RS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
