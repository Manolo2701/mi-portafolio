function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>¿Hablamos? Puedes contactarme por cualquiera de estos canales:</p>
      <ul className="contact-list">
        <li>
          📧{" "}
          <a href="mailto:manuelramirobarbado@gmail.com">
            manuelramirobarbado@gmail.com
          </a>
        </li>
        <li>
          📱 <a href="tel:+34644746045">+34 644 746 045</a>
        </li>
        <li>
          💼{" "}
          <a
            href="https://linkedin.com/in/manuel-ramiro-barbado-sánchez-7404b5345"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          🐙{" "}
          <a
            href="https://github.com/Manolo2701"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
