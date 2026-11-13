import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language } = useLanguage();

  return (
    <section id="about">
      <h2>{language === "es" ? "Sobre mí" : "About me"}</h2>
      <div className="about-content">
        {language === "es" ? (
          <>
            <p>
              Lo que realmente me atrae de la programación es la curiosidad y la
              profunda sensación de realización que siento cuando logro
              encontrar la solución a un problema complejo. Siempre me han
              fascinado los retos lógicos, como los escape rooms o los puzzles,
              y descubrí que el desarrollo de software es el rompecabezas
              definitivo: puedes crear cosas extremadamente útiles partiendo de
              cero.
            </p>
            <p>
              Tras formarme en Desarrollo de Aplicaciones Web (DAW), he
              descubierto que mi zona de confort está en el{" "}
              <strong>Backend</strong>: me encanta diseñar la lógica de los
              servidores, estructurar bases de datos y hacer que todo funcione
              como un reloj. Sin embargo, mi perfil es{" "}
              <strong>Full Stack</strong> y disfruto igualmente montando
              interfaces con React o Angular.
            </p>
            <p>
              Actualmente sigo ampliando mi stack. Estoy desarrollando una
              aplicación web (Álbum y Enciclopedia de Animales) basada en la
              taxonomía biológica general. A nivel personal, me apasionan
              especialmente los artrópodos y los insectos, por lo que son los
              protagonistas de la mayoría de mis fotografías en la app. Además,
              estoy cursando formación en{" "}
              <strong>IoT (Internet de las Cosas)</strong> y profundizando en
              React. Busco un equipo donde aportar mi proactividad y enfrentar
              nuevos retos técnicos.
            </p>
          </>
        ) : (
          <>
            <p>
              What truly draws me to programming is the curiosity and the deep
              sense of accomplishment I feel when I manage to find the solution
              to a complex problem. I have always been fascinated by logical
              challenges, such as escape rooms or puzzles, and I discovered that
              software development is the ultimate puzzle: you can create
              extremely useful things from scratch.
            </p>
            <p>
              After studying Web Application Development (DAW), I found that my
              comfort zone is in the <strong>Backend</strong>: I love designing
              server logic, structuring databases, and making everything run
              like clockwork. However, my profile is <strong>Full Stack</strong>{" "}
              and I equally enjoy building interfaces with React or Angular.
            </p>
            <p>
              I am currently expanding my stack. I am developing a web
              application (Animal Album & Encyclopedia) based on general
              biological taxonomy. On a personal level, I am especially
              passionate about arthropods and insects, which is why they are the
              stars of most of my photos in the app. Additionally, I am taking a
              course in <strong>IoT (Internet of Things)</strong> and deepening
              my React skills. I am looking for a team where I can contribute my
              proactivity and face new technical challenges.
            </p>
          </>
        )}
        <ul className="about-highlights">
          <li>
            🌍{" "}
            <strong>
              {language === "es"
                ? "Inglés C1 (Cambridge) - Capacidad para trabajar en entornos internacionales."
                : "English C1 (Cambridge) - Ability to work in international environments."}
            </strong>
          </li>
          <li>
            🧩{" "}
            {language === "es"
              ? "Resolución de problemas y pensamiento lógico."
              : "Problem-solving and logical thinking."}
          </li>
          <li>
            🤝{" "}
            {language === "es"
              ? "Aprendizaje rápido y adaptabilidad a nuevas tecnologías."
              : "Fast learning and adaptability to new technologies."}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
