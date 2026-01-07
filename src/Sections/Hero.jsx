import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "../assets/zarif.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
        bg-[size:36px_36px]"
      />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />

      {/* =====================================================
          FLOATING CODE BLOCKS (DESKTOP ONLY)
      ===================================================== */}
      <div className="hidden lg:block">
        {/* JS – EXPRESS */}
        <motion.pre
          className="absolute top-24 left-12 text-[12px] font-mono text-white/40"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
{`const app = express()
app.use(cors())
app.listen(8800)`}
        </motion.pre>

        {/* JS – ASYNC */}
        <motion.pre
          className="absolute top-40 right-20 text-[12px] font-mono text-white/45"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
{`async function fetchData() {
  const res = await api.get()
}`}
        </motion.pre>

        {/* MONGODB – FIND */}
        <motion.pre
          className="absolute bottom-96 left-20 text-[12px] font-mono text-white/40"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
{`db.users.find({
  role: "admin"
})`}
        </motion.pre>

        {/* MONGODB – INSERT */}
        <motion.pre
          className="absolute bottom-32 right-24 text-[12px] font-mono text-white/35"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
{`db.projects.insertOne({
  name: "Portfolio"
})`}
        </motion.pre>

        {/* GIT BASH */}
        <motion.pre
          className="absolute bottom-28 left-16 text-[12px] font-mono text-white/45"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
{`$ git add .
$ git commit -m "fixed some issues"
$ git push`}
        </motion.pre>
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* AVATAR */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto mb-14 w-48 h-48 md:w-60 md:h-60 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-[url('/noise.png')] opacity-[0.12]" />
          <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />
          <div className="absolute inset-0 rounded-full border border-white/40" />
          <div className="absolute inset-5 rounded-full border border-white/20" />

          <div className="relative z-10 w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover grayscale contrast-125 brightness-95 sepia-[0.25] blur-[0.3px]"
            />
          </div>

          {/* CORNER DOTS */}
          <span className="absolute -top-1 -left-4 w-3 h-3 border border-white"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white"></span>
          <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-white"></span>
          <span className="absolute -bottom-1 -right-4 w-3 h-3 border border-white"></span>
        </motion.div>

        {/* NAME */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-[0.25em] text-white">
          ZARIF HASAN
        </h1>

        <div className="w-16 h-[2px] bg-white mx-auto my-6" />

        {/* ROLE */}
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-300">
          MERN Stack Developer
        </p>

        {/* DESCRIPTION */}
        <p className="mt-5 text-xs md:text-sm text-gray-400 max-w-[90%] md:max-w-xl mx-auto leading-relaxed">
          Building modern web experiences with clean code, smooth animations,
          and thoughtful design.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-5 mt-12">
          <a
            href="https://github.com/Zarif207"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/zarif-hasan5/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://web.facebook.com/zarif.hasan.5059"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.div>
    </section>
  );
}