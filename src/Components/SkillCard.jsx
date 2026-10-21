function SkillCard({ tec, nivel }) {
  return (
    <div className="col-12 col-sm-6 col-xl-4">
      <div className="card h-100">
        <div className="card-body d-flex justify-content-between align-items-center">
          <span className="fw-semibold">{tec}</span>
          <span className="badge text-bg-primary rounded-pill">{nivel}</span>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;