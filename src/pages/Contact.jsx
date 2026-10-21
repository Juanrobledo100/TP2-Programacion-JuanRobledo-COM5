function Contact() {
  return (
    <section className="container py-5">
      <h2 className="display-6 fw-bold">Contacto</h2>
      <p className="lead text-body-secondary mb-4">¿Querés hablar conmigo?</p>

      <p>
        Estoy abriéndome a proyectos, oportunidades y aprendizaje continuo. Podés
        escribirme por cualquiera de estos medios:
      </p>

      <div className="list-group">
        <a
          className="list-group-item list-group-item-action"
          href="mailto:robledojuan100@gmail.com"
        >
          <span className="fw-bold">Correo:</span> robledojuan100@gmail.com
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="https://wa.me/5493814684269"
          target="_blank"
          rel="noreferrer"
        >
          <span className="fw-bold">WhatsApp:</span> +54 9 381 468-4269
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="https://github.com/Juanrobledo100"
          target="_blank"
          rel="noreferrer"
        >
          <span className="fw-bold">GitHub:</span> github.com/Juanrobledo100
        </a>
      </div>
    </section>
  );
}

export default Contact;
