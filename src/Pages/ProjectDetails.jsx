import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/projects";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectDetails() {
  const { id } = useParams();
  const imageRef = useRef(null);
  const lineRef = useRef(null);

  const project = projects.find(
    (p) => String(p.id) === String(id)
  );

  /* ================= GSAP EFFECTS ================= */
  useEffect(() => {
    if (!project) return;

    // Image floating
    gsap.to(imageRef.current, {
      y: -6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Title underline draw
    gsap.fromTo(
      lineRef.current,
      { width: 0 },
      { width: "3rem", duration: 1.2, ease: "power2.out", delay: 0.4 }
    );
  }, [project]);

  if (!project) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-xl mb-4">Project not found</h2>
        <Link to="/projects" className="underline text-sm">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <motion.section
      className="relative py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.h1
          className="text-3xl font-bold tracking-widest mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {project.name}
        </motion.h1>

        {/* UNDERLINE */}
        <div
          ref={lineRef}
          className="h-[2px] bg-white mb-10"
        />

        {/* IMAGE */}
        <motion.img
          ref={imageRef}
          src={project.image}
          alt={project.name}
          className="border border-white/40 mb-10 w-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* STACK */}
        <motion.h3
          className="text-sm tracking-widest mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          TECH STACK
        </motion.h3>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack?.map((t, i) => (
            <motion.span
              key={t}
              className="border px-3 py-1 text-xs tracking-widest"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <motion.p
          className="text-gray-300 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {project.description}
        </motion.p>

        {/* LINKS */}
        <motion.div
          className="flex gap-8 mb-14 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-2 hover:bg-white hover:text-black transition"
            >
              LIVE PROJECT
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-2 hover:bg-white hover:text-black transition"
            >
              GITHUB
            </a>
          )}
        </motion.div>

        {/* CHALLENGES */}
        <motion.h3
          className="font-bold mb-3 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          CHALLENGES
        </motion.h3>

        <ul className="list-disc list-inside mb-10 text-gray-400 space-y-2">
          {project.challenges?.map((c, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 + i * 0.05 }}
            >
              {c}
            </motion.li>
          ))}
        </ul>

        {/* FUTURE */}
        <motion.h3
          className="font-bold mb-3 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          FUTURE IMPROVEMENTS
        </motion.h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {project.future?.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95 + i * 0.05 }}
            >
              {f}
            </motion.li>
          ))}
        </ul>

      </div>
    </motion.section>
  );
}