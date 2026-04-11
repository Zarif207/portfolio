import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaQuoteLeft } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const links = [
  { label: "GitHub",   href: "https://github.com/Zarif207" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zarif-hasan5/" },
  { label: "Facebook", href: "https://web.facebook.com/zarif.hasan.5059" },
  { label: "Phone",    href: "tel:+8801648117509" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowing(true);
      setTimeout(() => setGlowing(false), 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full py-32 text-center text-white overflow-hidden bg-[#0a0a0a]">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* AMBIENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />

      {/* DECORATIVE SQUARES */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 border border-white/10 hidden sm:block" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/10 hidden sm:block" />

      <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6">

        {/* DIVIDER TOP */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={0}
        >
          <div className="w-13 h-[3px] bg-white mx-auto mb-30" />
        </motion.div>

        {/* QUOTE BLOCK */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={1}
          className="mb-20"
        >
          {/* quote icon */}
          <FaQuoteLeft
            className="mx-auto mb-5 text-white/20"
            style={{ fontSize: "1.4rem", filter: "drop-shadow(0 0 6px rgba(255,255,255,0.08))" }}
          />

          {/* quote text */}
          <p
            className={`text-sm leading-[2] tracking-[0.04em] max-w-md mx-auto ${glowing ? "quote-blink" : ""}`}
            style={{
              color: "#d4d4d4",
              textShadow: "0 0 8px rgba(255,255,255,0.07)",
            }}
          >
            I'm the type of person that if you ask me a question and I don't
            know the answer, I'm gonna tell you that I don't know. But I bet
            you what: I know how to find the answer, and I will find the answer.
          </p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={2}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-20"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="footer-link text-[11px] text-gray-500 tracking-[0.15em] px-3 py-1.5 border border-transparent transition-all duration-200 ease-in-out hover:text-white hover:border-white/50 hover:scale-105"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* DIVIDER BOTTOM */}
        <div className="w-full h-px bg-white/[0.07] mb-8" />

        {/* COPYRIGHT */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={3}
          className="text-[11px] text-gray-700 tracking-[0.2em]"
        >
          © 2026{" "}
          <span className="text-[#00ff9f]/50">Zarif Hasan</span>
        </motion.p>
      </div>

      {/* SCROLL TO TOP */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.08, boxShadow: "0 0 14px rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xs" />
      </motion.button>
    </footer>
  );
}

