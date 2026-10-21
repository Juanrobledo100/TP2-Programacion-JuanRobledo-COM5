import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./Components/Footer";

function App() {
  const nombre = "Juan Robledo";
  const rol = "Programador Full Stack, Ciberseguridad, estudiante de programación";

  return (
    <>
      <Header />
      <Home nombre={nombre} rol={rol} />
      <About />
      <Skills />
      <Projects />
      <Footer nombre={nombre} />
    </>
  );
}

export default App;