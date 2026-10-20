import { useState } from "react";

function Hero({ nombre, rol }) {
  const [abierta, setAbierta] = useState(false);

  return (
    <section id="home" className="portfolio-hero py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <span className="badge rounded-pill portfolio-badge px-3 py-2 mb-3">
              Portfolio personal
            </span>

            <h1 className="display-3 fw-bold mb-3 text-white">Hola, soy {nombre}</h1>
            <h2 className="h3 text-info mb-3">{rol}</h2>

            <p className="lead text-light mb-4">
              Soy estudiante de programación con interés en desarrollo web y frontend,
              aprendiendo a crear experiencias útiles, claras y visualmente buenas.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn btn-primary btn-lg rounded-pill portfolio-btn-primary">
                Ver proyectos
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg rounded-pill">
                Contactame
              </a>
            </div>

            <button
              type="button"
              className="btn btn-outline-light rounded-pill px-4"
              onClick={() => setAbierta(!abierta)}
            >
              {abierta ? "Ocultar detalle" : "Ver más"}
            </button>

            {abierta && (
              <p className="mt-4 mb-0 text-light lead fs-6">
                Vengo trabajando con JavaScript, React, Node.js, C# y Windows Forms, y con
                Git para manejar versiones. Lo que más me gusta es el frontend: poder ver
                el resultado al instante en la pantalla y ajustar cada detalle.
              </p>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card shadow-lg border-0 rounded-4 portfolio-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="rounded-circle bg-danger" style={{ width: 12, height: 12, display: 'inline-block' }}></span>
                  <span className="rounded-circle bg-warning" style={{ width: 12, height: 12, display: 'inline-block' }}></span>
                  <span className="rounded-circle bg-success" style={{ width: 12, height: 12, display: 'inline-block' }}></span>
                </div>
                <pre className="mb-0 text-dark small bg-white rounded-3 p-3 overflow-auto">
                  <code>{`const developer = {
  Nombre: "${nombre}",
  rol: "${rol}",
  ubicacion: "Tucumán, Argentina"
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;