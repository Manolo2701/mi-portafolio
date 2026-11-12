function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Manuel Ramiro Barbado Sánchez</h1>
      <p className="hero-title">Junior Full Stack Web Developer</p>
      <p className="hero-subtitle">
        Inglés C1 (Cambridge) · Español nativo · Cádiz, España
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          Ver proyectos
        </a>
        <a href="/CV_English_MBS.pdf" className="btn btn-secondary" download>
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
