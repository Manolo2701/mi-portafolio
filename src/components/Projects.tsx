import { useLanguage } from "../context/LanguageContext";

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

function Projects() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const projects: Project[] = [
    {
      title: "Hair & Beauty Salon Management System (TFG)",
      status: isEs ? "Proyecto Destacado" : "Featured Project",
      description: (
        <>
          <p>
            {isEs
              ? "Aplicación full stack de arquitectura de tres capas desplegada con Docker. El mayor desafío técnico fue el sistema de reservas inteligente, que requería validar disponibilidad cruzada en tiempo real: horarios de trabajadores, cualificaciones para servicios específicos, vacaciones y prevención de solapamiento de citas."
              : "A three-tier architecture full stack application deployed with Docker. The biggest technical challenge was the smart booking system, which required validating cross-availability in real-time: staff schedules, qualifications for specific services, holidays, and preventing appointment overlaps."}
          </p>
          <p>
            {isEs
              ? "Incluye autenticación JWT, control de acceso por roles (RBAC), gestión de stock, carrito de compras e integración con la pasarela de pago de PayPal en entorno de pruebas."
              : "It includes JWT authentication, role-based access control (RBAC), stock management, a shopping cart, and integration with the PayPal payment gateway in a test environment."}
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
          label: isEs ? "Ver Repositorio" : "View Repository",
          url: "https://github.com/Manolo2701/TFG_Peluqueria",
        },
      ],
    },
    {
      title: "Business Data Management App (Prácticas)",
      description: (
        <>
          <p>
            {isEs
              ? "Desarrollado en Mediasurgroup. Me encargué de construir una app para gestionar empresas, centros y empleados con filtros avanzados. Reto superado: sin conocimientos previos de desarrollo móvil, investigué y lideré la adaptación de la app web a Android usando Ionic y Capacitor, entregando el proyecto con éxito."
              : "Developed at Mediasurgroup. I was responsible for building an app to manage companies, centers, and employees with advanced filters. Challenge overcome: without prior mobile development knowledge, I researched and led the adaptation of the web app to Android using Ionic and Capacitor, successfully delivering the project."}
          </p>
          <p>
            {isEs
              ? "El sistema contaba con control de permisos CRUD según el rol del usuario y un modo oscuro implementado para mejorar la UX."
              : "The system featured CRUD permission control based on user roles and a dark mode implemented to improve UX."}
          </p>
        </>
      ),
      tech: ["Angular", "Ionic", "Capacitor", "Android Studio", "PHP", "MySQL"],
      links: [
        {
          label: isEs
            ? "Proyecto privado de empresa"
            : "Private company project",
          url: "#",
          disabled: true,
        },
      ],
    },
    {
      title: "Task Manager — Full Stack",
      description: isEs
        ? "Aplicación full stack para gestión de tareas. Este proyecto nació como una práctica para dominar React, por lo que decidí aplicar una arquitectura desacoplada (Frontend y Backend en repositorios separados), comunicados a través de una API REST. Incluye manejo de estados de carga y errores en la UI."
        : "Full stack application for task management. This project started as a practice to master React, so I decided to apply a decoupled architecture (Frontend and Backend in separate repositories), communicating via a REST API. It includes handling loading and error states in the UI.",
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
      title: isEs
        ? "Enciclopedia de Animales (En desarrollo)"
        : "Animal Encyclopedia (Work in Progress)",
      status: "WIP",
      description: isEs
        ? "Proyecto personal en desarrollo. Una aplicación web diseñada como un álbum interactivo y enciclopedia para amantes de la naturaleza. Los usuarios podrán subir fotografías de animales (con especial enfoque en insectos), registrar su nombre científico y la app completará automáticamente la información taxonómica. Un proyecto con el que estoy aprendiendo gestión de imágenes y consumo de APIs externas."
        : "Personal project in development. A web application designed as an interactive album and encyclopedia for nature lovers. Users will be able to upload animal photographs (with a special focus on insects), register their scientific name, and the app will automatically complete the taxonomic information. A project where I am learning about image management and consuming external APIs.",
      tech: ["React", "Node.js", "API REST"],
      links: [
        {
          label: isEs ? "Próximamente en GitHub" : "Coming soon to GitHub",
          url: "#",
          disabled: true,
        },
      ],
    },
  ];

  return (
    <section id="projects">
      <h2>{isEs ? "Proyectos" : "Projects"}</h2>
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
