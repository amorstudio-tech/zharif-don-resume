import { useState } from "react";
import { projects } from "../content.js";
import AccordionPanel from "./AccordionPanel.jsx";
import "../styles/projects.css";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <AccordionPanel
          key={index}
          title={project.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          id={`proj-${index}`}
        >
          <p className="stack">{project.stack}</p>
          <p>{project.details}</p>
        </AccordionPanel>
      ))}
    </section>
  );
}