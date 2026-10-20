const stack = [
  { tec: "JavaScript", nivel: "intermedio" },
  { tec: "React", nivel: "intermedio" },
  { tec: "Node.js", nivel: "intermedio" },
  { tec: "C#", nivel: "intermedio" },
  { tec: "Windows Forms", nivel: "intermedio" },
  { tec: "Git", nivel: "intermedio" },
];

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <span className="badge rounded-pill bg-dark mb-3">Skills</span>
        <h2 className="fw-bold mb-4 display-6 text-dark">Con qué trabajo</h2>
        <div className="row g-3">
          {stack.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.tec}>
              <div className="skill-stack border rounded-4 p-3 h-100 shadow-sm d-flex justify-content-between align-items-center">
                <span className="fw-semibold text-white">{item.tec}</span>
                <span className="badge bg-dark rounded-pill">{item.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;