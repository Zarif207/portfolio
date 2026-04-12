import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const SERVICE_ID  = "service_asp3djs";
const TEMPLATE_ID = "template_ymvkd5o";
const PUBLIC_KEY  = "mM51xjyxdEIhyAAaj";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => { emailjs.init(PUBLIC_KEY); }, []);

  const handleChange = (e) => {
    const key = e.target.name === "user_name" ? "name"
              : e.target.name === "user_email" ? "email"
              : e.target.name;
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sending");
    try {
      console.log("Sending:", form);
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        user_name:  form.name,
        user_email: form.email,
        subject:    form.subject || "No Subject",
        message:    form.message,
      });
      console.log("SUCCESS", res);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("ERROR", err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">

        <motion.div className="text-center mb-20" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl tracking-[0.25em] font-bold text-white">CONTACT</h2>
          <div className="w-14 h-[2px] bg-white mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="space-y-10">
            <div className="space-y-5">
              <h3 className="text-[1.7rem] sm:text-[2.1rem] font-bold text-white leading-[1.15] tracking-tight">
                Lets Build<br />
                <span className="text-white/40 font-light">Something That Actually Matters.</span>
              </h3>
              <p className="text-sm text-gray-500 leading-[1.95] max-w-[340px]">
                Got an idea? A problem? Or just curiosity? If its interesting, challenging, or slightly crazy — Im in. Lets talk.
              </p>
            </div>

            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              {[
                { href: "mailto:zarifhasan207@gmail.com", icon: <FaEnvelope />, label: "Email" },
                { href: "https://wa.me/8801648117509",    icon: <FaWhatsapp />, label: "WhatsApp" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  className="social-icon w-11 h-11 border border-white/25 flex items-center justify-center text-white text-[1.6rem] transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:border-white">
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                  className="min-h-[380px] border border-[#00ff9f]/15 bg-black flex flex-col items-center justify-center gap-5 p-10 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    className="w-14 h-14 border border-[#00ff9f]/40 flex items-center justify-center text-2xl text-[#00ff9f]">✓</motion.div>
                  <p className="text-[#00ff9f] tracking-[0.25em] text-sm">MESSAGE SENT</p>
                  <p className="text-gray-600 text-xs tracking-wide">Ill get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name"    name="user_name"  value={form.name}    onChange={handleChange} delay={3} />
                    <Field label="Email"   name="user_email" type="email" value={form.email}   onChange={handleChange} delay={4} />
                  </div>
                  <Field label="Subject" name="subject"    value={form.subject} onChange={handleChange} delay={5} />
                  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6}>
                    <textarea name="message" rows={5} required value={form.message} onChange={handleChange}
                      placeholder="Message" autoComplete="off"
                      className="contact-field w-full px-4 py-3 text-sm border border-white/10 outline-none resize-none transition-all duration-300" />
                  </motion.div>
                  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7}>
                    <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
                      className="w-full border border-white/40 py-3.5 text-[11px] tracking-[0.3em] text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 mt-1 disabled:opacity-40 disabled:cursor-not-allowed">
                      {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                    </motion.button>
                    {status === "error" && <p className="text-red-400/70 text-xs tracking-wide mt-2 text-center">Failed. Try again later.</p>}
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, delay = 0 }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={delay}>
      <input type={type} name={name} required value={value} onChange={onChange}
        placeholder={label} autoComplete="off"
        className="contact-field w-full px-4 py-3 text-sm border border-white/10 outline-none transition-all duration-300" />
    </motion.div>
  );
}