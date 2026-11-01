// Раздел «Проекты»: карточка проекта + баннер со ссылкой на GitHub.
import SectionHeading from './SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import { links, projects } from '../data/portfolio.js';

function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionHeading
        eyebrow="03 / ИЗБРАННЫЕ РАБОТЫ"
        title="Мои"
        accent="проекты"
        subtitle="Практика — важная часть моего профессионального роста."
      />

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      <div className="github-banner">
        <div>
          <span className="github-icon">⌘</span>
          <div>
            <h3>Больше кода — на GitHub</h3>
            <p>Загляни в мой профиль, чтобы увидеть исходный код и новые работы.</p>
          </div>
        </div>
        <a className="button button-ghost" href={links.github} target="_blank" rel="noreferrer">
          Мой GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Projects;
