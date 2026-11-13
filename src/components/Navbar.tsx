import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <span className="navbar-brand">Manuel Ramiro</span>
      <ul className="navbar-links">
        <li>
          <a href="#about">{language === "es" ? "Sobre mí" : "About me"}</a>
        </li>
        <li>
          <a href="#skills">{language === "es" ? "Skills" : "Skills"}</a>
        </li>
        <li>
          <a href="#projects">{language === "es" ? "Proyectos" : "Projects"}</a>
        </li>
        <li>
          <a href="#contact">{language === "es" ? "Contacto" : "Contact"}</a>
        </li>
        <li className="nav-actions">
          <button
            onClick={toggleLanguage}
            className="theme-toggle"
            title="Cambiar idioma"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title="Cambiar tema"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
