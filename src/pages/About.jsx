function About() {
  return (
    <section id="about" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge rounded-pill bg-primary mb-3">Sobre mí</span>
            <h2 className="text-dark fw-bold mb-4 display-6">Un estudiante que aprende construyendo</h2>
            <p className="lead text-body-secondary">
              Vivo en Tucumán y estoy en la comisión 5 de Programación. Elegí esta carrera
              porque siempre me gustó entender cómo funcionan las cosas por dentro y
              resolver problemas paso a paso.
            </p>
            <p className="text-body-secondary mb-0">
              Ya vengo trabajando con JavaScript, React, Node.js y C#, especialmente con
              Windows Forms, así que este portfolio también es una forma de ordenar todo lo
              aprendido y mostrar mi progreso en desarrollo web.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg rounded-4 h-100 bg-white">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-3">Mi enfoque</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">Aprender construyendo proyectos reales</li>
                  <li className="list-group-item px-0">Mejorar cada día en frontend y lógica</li>
                  <li className="list-group-item px-0">Buscar soluciones simples, claras y útiles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;