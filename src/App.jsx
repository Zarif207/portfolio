import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import Router from "./Router/Router";
import ScrollToTop from "./Components/ScrollToTop";
import IntroScreen from "./Components/IntroScreen";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    if (showIntro) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "unset";
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = showIntro ? setTimeout(() => setShowIntro(false), 3000) : null;

    return () => {
      lenis.destroy();
      if (timer) clearTimeout(timer);
    };
  }, [showIntro]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Router />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}