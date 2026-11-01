// Логотип используется дважды — в шапке и в подвале, поэтому вынесен в отдельный компонент.
function Logo({ onClick }) {
  return (
    <a className="logo" href="#home" onClick={onClick}>
      <span className="logo-mark">M</span> malika<span className="dot">.</span>
    </a>
  );
}

export default Logo;
