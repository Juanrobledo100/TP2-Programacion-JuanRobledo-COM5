import SkillCard from "../components/SkillCard";
import { skills } from "../data/Skills";

function Skills() {
  return (
    <section className="container py-5">
      <h2 className="display-6 fw-bold">Habilidades</h2>
      <p className="lead text-body-secondary mb-4">Con qué trabajo</p>

      <div className="row g-3">
        {skills.map((item) => (
          <SkillCard key={item.id} tec={item.tec} nivel={item.nivel} />
        ))}
      </div>
    </section>
  );
}

export default Skills;