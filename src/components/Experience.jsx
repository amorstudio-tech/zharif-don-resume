import { useState } from "react";
import { experience } from "../content.js";
import AccordionPanel from "./AccordionPanel.jsx";
import "../styles/experience.css";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <AccordionPanel
          key={index}
          title={job.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          id={`exp-${index}`}
        >
          <p className="period">{job.period}</p>
          <p>{job.details}</p>
        </AccordionPanel>
      ))}
    </section>
  );
}