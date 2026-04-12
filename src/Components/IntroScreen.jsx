import React from "react";
import { motion } from "framer-motion";

const IntroScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101010] select-none pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 1, 0, 1, 0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.5, 0.52, 0.54, 0.56, 0.58, 0.833, 1],
          ease: "linear",
        }}
        className="text-white text-5xl md:text-8xl font-bold tracking-[0.4em] uppercase"
      >
        WELCOME
      </motion.h1>
    </motion.div>
  );
};

export default IntroScreen;
