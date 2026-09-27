import { useState } from "react";
import { education } from "../content.js";
import AccordionPanel from "./AccordionPanel.jsx";
import "../styles/education.css";

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((entry, index) => (
        <AccordionPanel
          key={index}
          title={entry.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          id={`edu-${index}`}
        >
          <p className="meta">
            {entry.institution} &mdash; {entry.year}
          </p>
          <p>{entry.details}</p>
        </AccordionPanel>
      ))}
    </section>
  );
}