import ProjectCard from "../Components/ProjectCard";
import { misProyectos } from "../data/Projects";


function Projects() {
  return (
    <section id="projects" className="py-5 bg-success text-light">
      <div className="container">
        <span className="badge rounded-pill text-bg-light text-dark mb-3">Proyectos</span>
        <h2 className="fw-bold mb-4 display-6 text-white">Algunas cosas que hice</h2>
        <div className="row g-4">
          {misProyectos.map((proyecto) => (
            <ProjectCard
              key={proyecto.id}
              nombre={proyecto.nombre}
              resumen={proyecto.resumen}
              hechoCon={proyecto.hechoCon}
              repo={proyecto.repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;