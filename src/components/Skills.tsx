import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const skills = {
    Frontend: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Angular", "React"],
    Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "MVC"],
    [isEs ? "Bases de datos" : "Databases"]: ["MySQL", "Sequelize"],
    [isEs ? "Herramientas" : "Tools"]: ["Git", "GitHub", "Docker", "Postman"],
    [isEs ? "Móvil" : "Mobile"]: ["Ionic", "Capacitor", "Android Studio"],
    [isEs ? "Actualmente aprendiendo" : "Currently learning"]: [
      "IoT (Internet of Things)",
      isEs ? "React (Profundizando)" : "React (Deepening)",
    ],
  };

  return (
    <section id="skills">
      <h2>{isEs ? "Habilidades técnicas" : "Technical Skills"}</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
