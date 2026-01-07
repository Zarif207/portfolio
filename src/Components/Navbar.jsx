import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const tickingRef = useRef(false);

  // Explicit mapping (NO guesswork)
  const links = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "SKILLS", id: "skills" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  /* ================= SMOOTH SCROLL ================= */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setOpen(false);
  };

  /* ================= ACTIVE SECTION TRACK ================= */
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const offset = window.innerHeight * 0.35;

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(id);
            break;
          }
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= UI ================= */
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-white font-bold tracking-widest text-lg cursor-pointer"
        >
          ZARIF
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-white">
          {links.map(({ label, id }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative cursor-pointer transition ${
                activeSection === id
                  ? "opacity-100"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <span
                className={`after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-white after:transition-all after:duration-300 ${
                  activeSection === id ? "after:w-full" : "after:w-0"
                }`}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-white text-sm">
            {links.map(({ label, id }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer transition ${
                  activeSection === id
                    ? "opacity-100 font-semibold"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}