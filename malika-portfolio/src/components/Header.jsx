// Шапка сайта: логотип, меню и кнопка-«бургер» для телефона.
import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { navItems } from '../data/portfolio.js';

function Header() {
  // isOpen — открыто ли мобильное меню. setIsOpen — функция, которая меняет это значение.
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  // Закрываем меню клавишей Escape и при расширении окна до десктопа
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth > 600) closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    // Функция очистки: убирает обработчики, когда компонент исчезает
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <Logo onClick={closeMenu} />

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Класс open добавляется, только когда меню открыто */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Связаться <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
