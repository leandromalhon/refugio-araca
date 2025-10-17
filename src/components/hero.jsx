import React from "react";
import { motion } from "framer-motion";

export default function Hero({ scrollPosition, onReservarClick }) {
  // Animations suaves e profissionais
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scaleInVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background com cortes específicos */}
      <div className="absolute inset-0">
        {/* MOBILE - Corte VERTICAL (768x1024px) */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url(/images/aerea-mobile.jpg)",
            transform: `translateY(${scrollPosition * 0.2}px)`,
            backgroundPosition: "center 40%",
          }}
        />

        {/* DESKTOP - 1920x1080px (16:9) */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url(/images/aerea-desktop.jpg)",
            transform: `translateY(${scrollPosition * 0.5}px)`,
            backgroundPosition: "center center",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo com animações suaves */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo com scale suave */}
        <motion.img
          src="/images/logo.png"
          alt="Refúgio Araçá"
          className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 drop-shadow-2xl"
          variants={scaleInVariants}
        />

        {/* Nome com fade-up suave */}
        <motion.img
          src="/images/nome.png"
          alt="Refúgio Araçá"
          className="mx-auto mb-6 md:mb-8 drop-shadow-2xl max-w-xs md:max-w-md w-full h-auto"
          variants={fadeUpVariants}
        />

        {/* Texto com fade-up */}
        <motion.p
          variants={fadeUpVariants}
          className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 drop-shadow-lg font-light px-4"
        >
          A Vida é mais simples no Morro Redondo
        </motion.p>

        {/* Botão com fade-up + hover suave */}
        <motion.button
          variants={fadeUpVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#3D2817",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onReservarClick}
          className="bg-[#4A5D3F] text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl"
        >
          Reservar Agora
        </motion.button>
      </motion.div>
    </section>
  );
}
