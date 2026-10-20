function ProjectCard({ nombre, resumen, hechoCon, repo }) {
  return (
    <div className="col-md-6">
      <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
        <div className="card-body d-flex flex-column p-4">
          <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle align-self-start mb-3">
            Proyecto
          </span>
          <h3 className="h4 fw-bold mb-3 text-dark">{nombre}</h3>
          <p className="text-body-secondary flex-grow-1">{resumen}</p>

          <div className="d-flex flex-wrap gap-2 mb-3">
            {hechoCon.map((tec, index) => (
              <span key={`${nombre}-${tec}-${index}`} className="badge bg-light text-dark border">
                {tec}
              </span>
            ))}
          </div>

          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark mt-auto rounded-pill"
          >
            Ver repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;