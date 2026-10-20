import ProjectCard from "./ProjectCard";

const misProyectos = [
  {
    id: "gastos",
    nombre: "Control de gastos compartidos",
    resumen:
      "App para registrar gastos entre roomies y tener un resumen claro de lo que cada uno debe al final del mes.",
    hechoCon: ["React", "useState", "UI"],
    repo: "https://github.com/juanrobledo/gastos-compartidos",
  },
  {
    id: "clima",
    nombre: "Clima Tucumán",
    resumen:
      "App que consume una API pública para mostrar el pronóstico semanal y practicar fetching y renderizado de listas.",
    hechoCon: ["React", "Fetch API", "CSS"],
    repo: "https://github.com/juanrobledo/clima-tucuman",
  },
];

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