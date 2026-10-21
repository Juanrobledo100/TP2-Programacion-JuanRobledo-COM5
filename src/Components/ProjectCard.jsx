import { useState } from "react";

function ProjectCard({ nombre, resumen, detalle, hechoCon, repo }) {
  const [verMas, setVerMas] = useState(false);

  return (
    <div className="col-12 col-xl-6">
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5">{nombre}</h3>
          <p className="card-text text-body-secondary">{resumen}</p>

          {verMas && <p className="card-text">{detalle}</p>}

          <div className="d-flex flex-wrap gap-2 mb-3">
            {hechoCon.map((tec) => (
              <span key={tec} className="badge text-bg-secondary">{tec}</span>
            ))}
          </div>

          <div className="d-flex gap-2 mt-auto">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setVerMas(!verMas)}
            >
              {verMas ? "Ver menos" : "Ver más"}
            </button>
            <a href={repo} target="_blank" rel="noreferrer" className="btn btn-primary">
              Ver repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;