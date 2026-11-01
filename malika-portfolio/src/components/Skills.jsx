// Раздел «Навыки»: карточки создаются из массива skills с помощью map().
import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/portfolio.js';

function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionHeading
        eyebrow="02 / МОИ НАВЫКИ"
        title="Инструменты, с которыми"
        accent="работаю"
        subtitle="Технологии, которые использую в обучении и проектах."
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <span className={`skill-symbol ${skill.className}`}>{skill.symbol}</span>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
