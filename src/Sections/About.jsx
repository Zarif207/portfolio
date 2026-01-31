import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [matrix, setMatrix] = useState([]);
  const [terminalLines, setTerminalLines] = useState([]);

  const matrixIntervalRef = useRef(null);
  const terminalIntervalRef = useRef(null);

  const terminalRef = useRef(null);
  const hasTypedRef = useRef(false);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLines]);

  /* ================= MATRIX RAIN EFFECT ================= */
  useEffect(() => {
    if (matrixIntervalRef.current) return;

    const columns = 20;
    const rows = 25;
    const chars = "01101000101001010100100101";

    const initialMatrix = Array.from({ length: columns }, () => ({
      chars: Array.from(
        { length: rows },
        () => chars[Math.floor(Math.random() * chars.length)],
      ),
    }));

    setMatrix(initialMatrix);

    matrixIntervalRef.current = setInterval(() => {
      setMatrix((prev) =>
        prev.map((col) => ({
          ...col,
          chars: [
            ...col.chars.slice(1),
            chars[Math.floor(Math.random() * chars.length)],
          ],
        })),
      );
    }, 160);

    return () => {
      clearInterval(matrixIntervalRef.current);
      matrixIntervalRef.current = null;
    };
  }, []);

  /* ================= TERMINAL TYPING FUNCTION ================= */
  const startTyping = () => {
    const messages = [
      "> whoami",
      "a computer nerd with a hoodie, glasses and a laptop",
      "usually found debugging at 2:47 am",
      "",

      "> setup --device",
      "macbook air (m1)",
      "ram: 8gb | gpu: apple silicon",
      "status: still faster than my brain",
      "",

      "> interests",
      "- mern stack development",
      "- javascript that actually makes sense",
      "- a little bit obsessed with automobiles",
      "",

      "> daily_routine",
      "code. break things.",
      "google errors.",
      "fix them. repeat.",
      "",

      "> dreams",
      "dream city: new jersey",
      "dream company: nvidia, oracle",
      "dream role: ai/ml engineer",
      "",

      "> future_plan",
      "dive deep into machine learning",
      "understand models, not just use them",
      "build intelligent systems that matter",
      "",

      "> status",
      "learning relentlessly. shipping steadily.",
    ];

    let lineIndex = 0;
    let charIndex = 0;

    terminalIntervalRef.current = setInterval(() => {
      setTerminalLines((prev) => {
        if (lineIndex >= messages.length) {
          clearInterval(terminalIntervalRef.current);
          return prev;
        }

        const currentLine = messages[lineIndex];
        const nextChar = currentLine.slice(0, charIndex + 1);

        const updated = [...prev];
        updated[lineIndex] = nextChar;

        charIndex++;

        if (charIndex > currentLine.length) {
          lineIndex++;
          charIndex = 0;
        }

        return updated;
      });
    }, 38);
  };

  /* ================= RUN ON FIRST SCROLL ONLY ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTypedRef.current) {
          hasTypedRef.current = true;
          startTyping();
        }
      },
      { threshold: 0.35 },
    );

    if (terminalRef.current) observer.observe(terminalRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= UI (UNCHANGED) ================= */
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden bg-transparent"
    >
      <div className="absolute top-1/4 left-20 w-16 h-16 border border-gray-800"></div>
      <div className="absolute bottom-1/3 right-32 w-20 h-20 border border-gray-800"></div>
      <div className="absolute bottom-1/4 right-20 w-12 h-12 bg-white"></div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.h2
          className="text-4xl font-bold tracking-[0.25em] text-white pb-10 mb-16 text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          ABOUT ME_
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-white"></div>
              <div className="pl-6 space-y-5 text-gray-400 leading-relaxed text-sm">
                <p>
                  Hi, Zarif here. I’m an introverted guy who spends most of his
                  time in his room, surrounded by a cozy setup and a laptop —
                  thinking, building, and learning. At present, I call myself a
                  MERN stack developer, focused on creating modern, scalable web
                  applications with clean architecture and thoughtful user
                  experiences.
                  <br />
                  <span className="text-xl">O</span>ver the next couple of
                  years, I believe this “MERN stack developer” title will
                  evolve. I’m deeply driven by the idea of simplifying complex
                  problems and making solutions that actually make sense. I want
                  to build things that matter — products that help people and
                  create real impact in the world.
                </p>
                <p>
                  I already carry ideas in my mind, but I know meaningful change
                  can’t be built alone. Turning those ideas into reality
                  requires teamwork, experience, and deeper knowledge — and I’m
                  actively working toward that. I love exploring the world,
                  observing problems with my own eyes, and reaching a point
                  where doing nothing is no longer an option. That’s usually
                  when I decide I have to solve the problem myself.
                </p>
                <p>
                  I’m comfortable under pressure — for me, pressure is a
                  privilege. Sometimes I get lost in the binary world, but I
                  know who I am. I recognize my current limitations, and I also
                  know they won’t last forever. One day, those gaps will close,
                  and I’ll move closer to the future I imagine for myself.
                </p>

                <p>
                  My passion for automobiles is what originally pushed me into
                  the world of coding. I was fascinated by how technology is
                  transforming vehicles — from intelligent systems to
                  data-driven performance and automation. Learning to code felt
                  like the gateway to building real technological innovations in
                  the automobile industry. That curiosity turned into a
                  commitment to software development and problem-solving. But at
                  the end of the day, this tech-driven kid still has a soft spot
                  for classic 80s cars — loud engines, boxy designs, and
                  timeless character.
                </p>
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1cDUxLG8PgAn1a_BmcE4SYpElkQO15U4z/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
    mt-10 px-7 py-2.5
    bg-transparent border-2 border-white
    text-white text-xs font-bold tracking-widest
    transition-all duration-300
    hover:bg-white hover:text-black
    inline-block
  "
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 12px rgba(255,255,255,0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>

          {/* RIGHT TERMINAL */}
          <motion.div
            ref={terminalRef}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full">
              <div className="border-2 border-white bg-black">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/30 bg-gray-900">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">
                    terminal
                  </span>
                </div>

                <div
                  className="
    relative z-10 p-5
    h-[48rem]
    overflow-y-auto
    font-mono text-sm
    scrollbar-thin
    scrollbar-thumb-white/30
    scrollbar-track-transparent
  "
                >
                  {" "}
                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={line === "" ? "h-4" : "mb-2"}
                    >
                      <span className="text-green-300">{line}</span>
                      {index === terminalLines.length - 1 && (
                        <motion.span
                          className="inline-block w-2 h-4 bg-green-400 ml-1"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-xs font-mono bg-black px-2 py-1 border border-white/30">
                &gt; /dev/mern_stack
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
