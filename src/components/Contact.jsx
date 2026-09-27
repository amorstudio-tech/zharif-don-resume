import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="contact-intro">Let&apos;s connect!</p>
      <div className="contact-links">
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="mailto:zharifamor.studio@gmail.com"
          className="contact-link"
        >
          Email
        </a>
      </div>
    </section>
  );
}