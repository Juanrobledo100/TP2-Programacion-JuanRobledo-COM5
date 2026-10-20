function Header() {
  return (
    <header className="fixed-top">
      <nav className="portfolio-navbar navbar navbar-expand-lg shadow-sm">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold text-white" href="#home">
            Portfolio
          </a>

          <button
            className="navbar-toggler navbar-dark border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarPortfolio"
            aria-controls="navbarPortfolio"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarPortfolio">
            <div className="navbar-nav ms-auto d-flex flex-column flex-lg-row gap-2 gap-lg-3 align-items-lg-center">
              <a className="nav-link text-white" href="#home">Home</a>
              <a className="nav-link text-white" href="#about">Sobre mí</a>
              <a className="nav-link text-white" href="#skills">Habilidades</a>
              <a className="nav-link text-white" href="#projects">Proyectos</a>
              <a className="nav-link text-white" href="#contact">Contacto</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;