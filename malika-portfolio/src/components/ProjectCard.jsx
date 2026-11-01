// Карточка одного проекта. Все данные приходят через проп project.
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Левая часть — нарисованное на CSS «превью» сайта */}
      <div className="project-preview">
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
          <small>{project.domain}</small>
        </div>
        <div className="travel-art">
          <div className="mountain mountain-back"></div>
          <div className="mountain mountain-front"></div>
          <div className="sun"></div>
          <div className="travel-label">DISCOVER KYRGYZSTAN</div>
          <div className="travel-caption">{project.title}</div>
        </div>
      </div>

      {/* Правая часть — описание проекта */}
      <div className="project-info">
        <div className="project-meta">
          <span>{project.label}</span>
          <span className="project-number">{project.number}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
          Открыть сайт <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
