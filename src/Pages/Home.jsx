import Navbar from "../Components/Navbar";
import About from "../Sections/About";
import Hero from "../Sections/Hero";
import Projects from "./Projects";
import Skills from "../Sections/Skills";
import Contact from "../Sections/Contact";

export default function Home() {
  return (
    <div className="text-white text-5xl">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}