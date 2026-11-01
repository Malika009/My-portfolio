// Заголовок раздела. Повторяется в нескольких разделах, поэтому вынесен отдельно.
// Пропсы (props) — это «параметры» компонента, которые передаёт родитель.
function SectionHeading({ eyebrow, title, accent, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} <span className="gradient-text">{accent}</span>
      </h2>
      {/* Подзаголовок показываем, только если он передан */}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
