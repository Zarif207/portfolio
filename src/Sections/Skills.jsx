import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 px-6 overflow-hidden bg-transparent"
    >
      {/* SUBTLE GRID */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* NOISE */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* TITLE */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl tracking-widest font-bold text-white">
            TECH & STACK
          </h2>

          <div className="w-14 h-[2px] bg-white mx-auto mt-4" />
        </motion.div>

        {/* FRONTEND */}
        <Section title="Frontend">
          <Skill icon={<FaHtml5 />} label="HTML5" />
          <Skill icon={<FaCss3Alt />} label="CSS3" />
          <Skill icon={<FaJs />} label="JavaScript" />
          <Skill icon={<FaReact />} label="React" />
          <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
        </Section>

        {/* BACKEND */}
        <Section title="Backend">
          <Skill icon={<FaNodeJs />} label="Node.js" />
          <Skill icon={<SiExpress />} label="Express" />
          <Skill icon={<SiMongodb />} label="MongoDB" />
        </Section>

        {/* TOOLS */}
        <Section title="Tools & Platforms">
          <Skill icon={<FaGitAlt />} label="Git" />
          <Skill icon={<FaGithub />} label="GitHub" />
          <Skill icon={<SiFirebase />} label="Firebase" />
          <Skill icon={<SiVercel />} label="Vercel" />
        </Section>
      </div>
    </section>
  );
}

/* ================= SECTION ================= */
function Section({ title, children }) {
  return (
    <div className="mb-28">
      <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-12 uppercase">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-16">{children}</div>
    </div>
  );
}

/* ================= SKILL ================= */
function Skill({ icon, label }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative flex flex-col items-center"
    >
      {/* BORDER RING */}
      <div
        className="
        absolute inset-0 rounded-xl
        border border-white/20
        opacity-0 group-hover:opacity-100
        group-hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]
        transition
      "
      />

      {/* ICON BOX */}
      <div
        className="
        relative z-10
        w-16 h-16 flex items-center justify-center
        text-white text-3xl opacity-80
        transition
        group-hover:opacity-100
      "
      >
        {icon}
      </div>

      {/* LABEL */}
      <span
        className="
        absolute -bottom-8
        text-[11px] tracking-widest uppercase
        text-white opacity-0
        group-hover:opacity-100
        transition
      "
      >
        {label}
      </span>
    </motion.div>
  );
}
