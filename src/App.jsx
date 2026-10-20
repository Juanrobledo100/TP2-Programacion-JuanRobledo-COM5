import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  const nombre = "Juan Robledo";
  const rol = "Programador Full Stack, Ciberseguridad, estudiante de programación";

  return (
    <>
      <Header />
      <Hero nombre={nombre} rol={rol} />
      <About />
      <Skills />
      <Projects />
      <Footer nombre={nombre} />
    </>
  );
}

export default App;