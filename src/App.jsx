import Hero from "./components/Hero.jsx";
import Bio from "./components/Bio.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <Bio />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
}