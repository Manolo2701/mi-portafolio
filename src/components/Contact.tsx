import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact">
      <h2>{language === "es" ? "Contacto" : "Contact"}</h2>
      <p>
        {language === "es"
          ? "¿Hablamos? Puedes contactarme por cualquiera de estos canales:"
          : "Let's talk! You can reach me through any of these channels:"}
      </p>
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
