/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNextdotjs,
} from "react-icons/si";
import { fadeUp, scaleIn, viewport } from "../Aminations/scrollVariants";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      dividerRef.current,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: dividerRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-transparent"
    >

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <h2 className="text-3xl sm:text-4xl tracking-widest font-bold text-white">
            TECH & STACK
          </h2>
          <div ref={dividerRef} className="w-14 h-[2px] bg-white mx-auto mt-4" />
        </motion.div>

        <Section title="Frontend" delay={0}>
          <Skill icon={<FaHtml5 />}     label="HTML5"      i={0} />
          <Skill icon={<FaCss3Alt />}   label="CSS3"       i={1} />
          <Skill icon={<FaJs />}        label="JavaScript" i={2} />
          <Skill icon={<FaReact />}     label="React"      i={3} />
          <Skill icon={<SiNextdotjs />} label="Next.js"    i={4} />
          <Skill icon={<SiTailwindcss />} label="Tailwind CSS" i={5} />
        </Section>

        <Section title="Backend" delay={0.1}>
          <Skill icon={<FaNodeJs />}  label="Node.js"  i={0} />
          <Skill icon={<SiExpress />} label="Express"  i={1} />
          <Skill icon={<SiMongodb />} label="MongoDB"  i={2} />
        </Section>

        <Section title="Tools & Platforms" delay={0.1}>
          <Skill icon={<FaGitAlt />}   label="Git"      i={0} />
          <Skill icon={<FaGithub />}   label="GitHub"   i={1} />
          <Skill icon={<SiFirebase />} label="Firebase" i={2} />
          <Skill icon={<SiVercel />}   label="Vercel"   i={3} />
        </Section>
      </div>
    </section>
  );
}

function Section({ title, children, delay = 0 }) {
  return (
    <motion.div
      className="mb-20 sm:mb-28"
      variants={fadeUp} initial="hidden" whileInView="visible"
      viewport={viewport} custom={delay}
    >
      <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-10 sm:mb-12 uppercase">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-10 sm:gap-16">{children}</div>
    </motion.div>
  );
}

function Skill({ icon, label, i = 0 }) {
  return (
    <motion.div
      variants={scaleIn} initial="hidden" whileInView="visible"
      viewport={viewport} custom={i}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative flex flex-col items-center"
    >
      <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition" />
      <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-80 transition group-hover:opacity-100">
        {icon}
      </div>
      <span className="absolute -bottom-8 text-[10px] sm:text-[11px] tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

