import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Router from "./Router/Router";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-10">
        <Router />
      </div>
    </BrowserRouter>
  );
}