import { NavLink } from "react-router-dom";


const enlaces = [
  { to: "/", texto: "Home" },
  { to: "/about", texto: "Sobre mí" },
  { to: "/skills", texto: "Habilidades" },
  { to: "/projects", texto: "Proyectos" },
  { to: "/contact", texto: "Contacto" },
];

function Sidebar({ nombre }) {
  return (
    <aside className="app-sidebar bg-info text-white">
      <div className="sticky-md-top p-4">
        <h1 className="h3 fw-bold mb-1">{nombre}</h1>
        <p className="text-white-50 mb-4">Portfolio personal</p>

        <nav className="nav nav-pills flex-md-column gap-2">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.to}
              to={enlace.to}
              end={enlace.to === "/"}
              className="nav-link text-white"
            >
              {enlace.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
