import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();

  return (
    <section id="hero" className="hero">
      <h1>Manuel Ramiro Barbado Sánchez</h1>
      <p className="hero-title">Junior Full Stack Web Developer</p>
      <p className="hero-subtitle">
        {language === "es"
          ? "Inglés C1 (Cambridge) · Español nativo · Cádiz, España"
          : "English C1 (Cambridge) · Native Spanish · Cadiz, Spain"}
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          {language === "es" ? "Ver proyectos" : "View projects"}
        </a>
        <a href="CV_English_MBS.pdf" className="btn btn-secondary" download>
          {language === "es" ? "Descargar CV" : "Download CV"}
        </a>
      </div>
    </section>
  );
}

export default Hero;
