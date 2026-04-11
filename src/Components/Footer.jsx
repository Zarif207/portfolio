import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

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

  return (
    <footer className="relative w-full py-32 text-center text-white overflow-hidden bg-[#0a0a0a]">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* AMBIENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />

      {/* DECORATIVE SQUARES */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 border border-white/15 hidden sm:block" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/15 hidden sm:block" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={0}
        >
          {/* <h2 className="text-3xl sm:text-4xl tracking-[0.3em] font-bold text-white mb-4">
            CONTACT
          </h2> */}
          <div className="w-10 h-[2px] bg-white mx-auto mb-10" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={1}
          className="mb-14 space-y-1"
        >
          <p className="text-sm text-gray-400 tracking-wide">
            I'm always open to building something meaningful.
          </p>
          <p className="text-sm text-gray-500 tracking-wide">
            Got an idea? Let's make it real.
          </p>
        </motion.div>

        {/* CTA ROW */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={2}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-20"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="social-icon relative text-xs text-gray-500 tracking-widest hover:text-white transition-colors duration-300 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div className="w-full max-w-lg mx-auto h-px bg-white/[0.08] mb-8" />

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
