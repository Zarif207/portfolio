import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Sections/About";
import Hero from "../Sections/Hero";
import Projects from "./Projects";
import Skills from "../Sections/Skills";
import Contact from "../Sections/Contact";

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
