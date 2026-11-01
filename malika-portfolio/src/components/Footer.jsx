// Подвал сайта. Год считается автоматически, поэтому его не нужно менять вручную.
import Logo from './Logo.jsx';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container">
      <Logo />
      <p>Создано с интересом к коду и любовью к деталям.</p>
      <span>© {year} Malika</span>
    </footer>
  );
}

export default Footer;
