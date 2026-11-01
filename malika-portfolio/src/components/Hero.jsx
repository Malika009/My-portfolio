// Первый экран: приветствие, кнопки и декоративная карточка с кодом.
import { links, resumeFile } from '../data/portfolio.js';

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="pulse"></span> Открыта к новым возможностям
        </div>
        <p className="eyebrow">ПРИВЕТ! Я МАЛИКА</p>
        <h1>
          Создаю сайты,
          <br />
          которые <span className="gradient-text">вдохновляют.</span>
        </h1>
        <p className="hero-description">
          Начинающий Frontend Developer. Превращаю идеи в современные, удобные и адаптивные
          веб-интерфейсы.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Посмотреть проекты <span>↗</span>
          </a>
          <a className="button button-ghost" href="#contact">
            Связаться со мной
          </a>
          <a className="button button-ghost" href={resumeFile.url} target="_blank" rel="noreferrer">
            Моё резюме ↗
          </a>
        </div>

        <div className="hero-socials">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>
          <a href={links.telegram} target="_blank" rel="noreferrer">
            Telegram <span>↗</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Декоративная карточка разработчика">
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>

        <div className="profile-card">
          <div className="card-top">
            <span className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>developer.js</span>
          </div>
          <div className="code-lines">
            <p>
              <span className="code-purple">const</span> developer = {'{'}
            </p>
            <p className="indent">
              <span className="code-blue">name</span>: <span className="code-green">'Malika'</span>,
            </p>
            <p className="indent">
              <span className="code-blue">role</span>:{' '}
              <span className="code-green">'Frontend Developer'</span>,
            </p>
            <p className="indent">
              <span className="code-blue">passion</span>:{' '}
              <span className="code-green">'Building for the web'</span>,
            </p>
            <p className="indent">
              <span className="code-blue">learning</span>: <span className="code-green">'Every day'</span>
            </p>
            <p>{'};'}</p>
            <p className="code-comment">// turning ideas into reality ✨</p>
          </div>
          <div className="card-footer">
            <span className="status-dot"></span> Available for opportunities
          </div>
        </div>

        <div className="floating-chip chip-react">
          <span>⚛</span> React
        </div>
        <div className="floating-chip chip-js">
          <span>JS</span> JavaScript
        </div>
        <div className="floating-chip chip-css">
          <span>✦</span> Creative UI
        </div>
      </div>

      <a className="scroll-hint" href="#about">
        <span></span> Листай вниз
      </a>
    </section>
  );
}

export default Hero;
