import { FaArrowUp } from "react-icons/fa";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="
        relative py-40 text-center text-white overflow-hidden
        bg-[#0b0b0b]
      "
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* DECORATIVE SQUARES */}
      <div className="absolute left-1/4 top-1/2 w-4 h-4 border border-white/40" />
      <div className="absolute right-1/4 top-1/2 w-4 h-4 bg-white/40" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* TITLE */}
        <h2 className="text-3xl tracking-[0.3em] mb-4">CONTACT</h2>

        {/* UNDERLINE */}
        <div className="w-10 h-[2px] bg-white mx-auto mb-10" />

        {/* DESCRIPTION */}
        <p className="max-w-xl mx-auto text-sm text-gray-400 leading-relaxed mb-14">
          I’m always looking for opportunities to build and scale real-world
          applications using the MERN stack alongside passionate developers.
          <br /> <br/>
          Let's build intelligent solutions together.
        </p>

        {/* ACTIONS */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm mb-20">
          <a
            href="mailto:zarifhasan207@gmail.com"
            className="border border-white/60 px-6 py-2 tracking-widest hover:bg-white hover:text-black transition"
          >
            SEND EMAIL
          </a>

          <div className="flex gap-8 text-gray-300 tracking-widest">
            <a
              href="https://github.com/Zarif207"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition border-b border-transparent hover:border-white pb-1"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/zarif-hasan5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition border-b border-transparent hover:border-white pb-1"
            >
              LinkedIn
            </a>

            <a
              href="https://web.facebook.com/zarif.hasan.5059"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition border-b border-transparent hover:border-white pb-1"
            >
              Facebook
            </a>

            <a
              href="tel:+8801648117509"
              className="hover:text-white transition border-b border-transparent hover:border-white pb-1"
            >
              Phone
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full max-w-4xl mx-auto h-px bg-white/20 mb-6" />

        {/* FOOTER */}
        <p className="text-xs text-gray-500 tracking-widest">
          © 2026 Zarif Hasan
        </p>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 left-6 z-50
          w-10 h-10 border border-white/60
          flex items-center justify-center
          hover:bg-white hover:text-black
          transition
        "
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </section>
  );
}
