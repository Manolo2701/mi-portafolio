interface ProjectLink {
  label: string;
  url: string;
  disabled?: boolean;
}

interface Project {
  title: string;
  status?: string;
  description: React.ReactNode;
  tech: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Hair & Beauty Salon Management System (TFG)",
    status: "Proyecto Destacado",
    description: (
      <>
        <p>
          Aplicación full stack de arquitectura de tres capas desplegada con
          Docker. El mayor desafío técnico fue el{" "}
          <strong>sistema de reservas inteligente</strong>, que requería validar
          disponibilidad cruzada en tiempo real: horarios de trabajadores,
          cualificaciones para servicios específicos, vacaciones y prevención de
          solapamiento de citas.
        </p>
        <p>
          Incluye autenticación JWT, control de acceso por roles (RBAC), gestión
          de stock, carrito de compras e integración con la pasarela de pago de
          PayPal en entorno de pruebas.
        </p>
      </>
    ),
    tech: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Docker",
      "JWT",
    ],
    links: [
      {
        label: "Ver Repositorio",
        url: "https://github.com/Manolo2701/TFG_Peluqueria",
      },
    ],
  },
  {
    title: "Business Data Management App (Prácticas)",
    description: (
      <>
        <p>
          Desarrollado en Mediasurgroup. Me encargué de construir una app para
          gestionar empresas, centros y empleados con filtros avanzados.{" "}
          <strong>Reto superado:</strong> sin conocimientos previos de
          desarrollo móvil, investigué y lideré la adaptación de la app web a
          Android usando Ionic y Capacitor, entregando el proyecto con éxito.
        </p>
        <p>
          El sistema contaba con control de permisos CRUD según el rol del
          usuario y un modo oscuro implementado para mejorar la UX.
        </p>
      </>
    ),
    tech: ["Angular", "Ionic", "Capacitor", "Android Studio", "PHP", "MySQL"],
    links: [{ label: "Proyecto privado de empresa", url: "#", disabled: true }],
  },
  {
    title: "Task Manager — Full Stack",
    description:
      "Aplicación full stack para gestión de tareas. Este proyecto nació como una práctica para dominar React, por lo que decidí aplicar una arquitectura desacoplada (Frontend y Backend en repositorios separados), comunicados a través de una API REST. Incluye manejo de estados de carga y errores en la UI.",
    tech: ["React", "Vite", "Node.js", "Express", "REST API", "JavaScript"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/Manolo2701/frontend-tareas",
      },
      { label: "Backend", url: "https://github.com/Manolo2701/api-tareas" },
    ],
  },
  {
    title: "Enciclopedia de Animales (En desarrollo)",
    status: "WIP",
    description:
      "Proyecto personal en desarrollo. Una aplicación web diseñada como un álbum interactivo y enciclopedia para amantes de la naturaleza. Los usuarios podrán subir fotografías de animales (con especial enfoque en insectos), registrar su nombre científico y la app completará automáticamente la información taxonómica. Un proyecto con el que estoy aprendiendo gestión de imágenes y consumo de APIs externas.",
    tech: ["React", "Node.js", "API REST"],
    links: [{ label: "Próximamente en GitHub", url: "#", disabled: true }],
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              {project.status && (
                <span className="project-status">{project.status}</span>
              )}
            </div>
            <div className="project-description">{project.description}</div>
            <ul className="project-tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.links.map((link) =>
                link.disabled ? (
                  <span
                    key={link.label}
                    className="btn btn-secondary btn-disabled"
                  >
                    {link.label}
                  </span>
                ) : (
                  <a
                    key={link.label}
                    href={link.url}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
