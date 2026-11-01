// Раздел «Обо мне».
import SectionHeading from './SectionHeading.jsx';
import { facts } from '../data/portfolio.js';

function About() {
  return (
    <section className="section container" id="about">
      <SectionHeading eyebrow="01 / ОБО МНЕ" title="Немного" accent="обо мне" />

      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            Я — начинающий Frontend-разработчик, которому нравится создавать красивые и
            функциональные цифровые продукты.
          </p>
          <p>
            Я изучаю веб-разработку и постоянно развиваю свои навыки: от вёрстки интерфейсов до
            создания интерактивных приложений на React. Для меня важно не просто написать код, а
            понимать, как он работает, и делать результат удобным для пользователя.
          </p>
          <p>
            Сейчас я ищу возможность расти в команде, работать над реальными задачами и получать
            новый практический опыт.
          </p>
        </div>

        <div className="about-facts">
          {facts.map((fact) => (
            <div className="fact-card" key={fact.title}>
              <span className="fact-icon">{fact.icon}</span>
              <div>
                <strong>{fact.title}</strong>
                <small>{fact.text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
