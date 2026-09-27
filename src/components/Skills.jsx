import { useState } from "react";
import { skills } from "../content.js";
import AccordionPanel from "./AccordionPanel.jsx";
import "../styles/skills.css";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <AccordionPanel
          key={index}
          title={skill.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          id={`skill-${index}`}
        >
          <p>{skill.details}</p>
        </AccordionPanel>
      ))}
    </section>
  );
}