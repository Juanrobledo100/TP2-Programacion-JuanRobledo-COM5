import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const nombre = "Juan Robledo";
  const rol = "Programador Full Stack, Ciberseguridad, estudiante de programación";

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        <Sidebar nombre={nombre} />

        <div className="col-12 col-md-8 d-flex flex-column p-0">
          <Header rol={rol} />

          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home nombre={nombre} rol={rol} />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer nombre={nombre} />
        </div>
      </div>
    </div>
  );
}

export default App;
