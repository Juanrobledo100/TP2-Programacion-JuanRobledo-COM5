function Footer({ nombre }) {
  return (
    <footer id="contact" className="footer text-light py-5">
      <div className="container text-center">
        <h3 className="h4 fw-bold mb-3 text-white">¿Querés hablar conmigo?</h3>
        <p className="text-light mb-4">
          Estoy abriéndome a proyectos, oportunidades y aprendizaje continuo.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-3">
          <a className="btn btn-warning rounded-pill px-4" href="mailto:robledojuan100@gmail.com">
            robledojuan100@gmail.com
          </a>
          <a
            className="btn btn-success rounded-pill px-4 d-inline-flex align-items-center justify-content-center gap-2"
            href="https://wa.me/5493814684269"
            target="_blank"
            rel="noreferrer"
            aria-label="Contactarme por WhatsApp"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.2 21.7h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.8 9.8 0 0 1-1.5-5.3C2.5 6.5 6.9 2 12.2 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.9-9.8 9.9Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3Z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <p className="text-light small mb-0">{nombre} · Tucumán, Argentina</p>
      </div>
    </footer>
  );
}

export default Footer;