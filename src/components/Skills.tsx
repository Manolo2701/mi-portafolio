const skills = {
  Frontend: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Angular", "React"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "MVC"],
  "Bases de datos": ["MySQL", "Sequelize"],
  Herramientas: ["Git", "GitHub", "Docker", "Postman"],
  Móvil: ["Ionic", "Capacitor", "Android Studio"],
  "Actualmente aprendiendo": [
    "IoT (Internet of Things)",
    "React (Profundizando)",
  ],
};

function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades técnicas</h2>
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
