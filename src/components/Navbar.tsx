import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <span className="navbar-brand">Manuel Ramiro</span>
      <ul className="navbar-links">
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
