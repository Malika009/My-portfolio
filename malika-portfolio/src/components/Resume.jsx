// Раздел «Резюме»: кнопки просмотра и скачивания PDF.
import { resumeFile } from '../data/portfolio.js';

function Resume() {
  return (
    <section className="section container" id="resume">
      <div className="resume-card">
        <div className="resume-icon">PDF</div>

        <div className="resume-copy">
          <p className="eyebrow">МОЁ РЕЗЮМЕ</p>
          <h2>
            Опыт и навыки — <span className="gradient-text">в одном документе</span>
          </h2>
          <p>
            Посмотрите моё резюме или скачайте PDF, чтобы сохранить информацию о моих навыках и
            опыте.
          </p>
        </div>

        <div className="resume-actions">
          {/* target="_blank" — открыть PDF в новой вкладке */}
          <a className="button button-primary" href={resumeFile.url} target="_blank" rel="noreferrer">
            Посмотреть резюме ↗
          </a>
          {/* Атрибут download — браузер скачает файл, а не откроет его */}
          <a className="button button-ghost" href={resumeFile.url} download={resumeFile.downloadName}>
            Скачать PDF ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
