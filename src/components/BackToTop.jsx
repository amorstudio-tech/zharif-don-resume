import { useState, useEffect } from "react";
import "../styles/back-to-top.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > window.innerHeight * 0.5);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`back-to-top${show ? "" : " hidden"}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      &uarr;
    </button>
  );
}