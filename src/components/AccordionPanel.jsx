import "../styles/accordion-panel.css";

export default function AccordionPanel({ title, children, isOpen, onToggle, id }) {
  const contentId = `${id}-content`;

  return (
    <div className={`accordion-panel${isOpen ? " open" : ""}`}>
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <span className="indicator">&#9660;</span>
      </button>
      <div
        id={contentId}
        role="region"
        className="panel-collapse"
      >
        <div className="panel-content">{children}</div>
      </div>
    </div>
  );
}