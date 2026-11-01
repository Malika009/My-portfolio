// Все данные сайта в одном месте.
// Чтобы поменять ссылку или добавить навык — достаточно изменить этот файл,
// компоненты сами отрисуют новые данные.

// Ссылки на соцсети и проекты
export const links = {
  github: 'https://github.com/Malika009',
  telegram: 'https://t.me/usserr_0777',
  whatsapp: 'https://wa.me/996708700915',
  travelKg: 'https://travelkg.uk/',
};

// PDF-резюме лежит в папке public, поэтому доступно по адресу /Malika-Arapbaeva-CV.pdf
export const resumeFile = {
  url: `${import.meta.env.BASE_URL}Malika-Arapbaeva-CV.pdf`,
  downloadName: 'Malika-Arapbaeva-CV.pdf',
};

// Пункты меню в шапке
export const navItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#resume', label: 'Резюме' },
];

// Карточки в разделе «Обо мне»
export const facts = [
  { icon: '⌘', title: 'Frontend', text: 'Моё направление' },
  { icon: '✧', title: 'Постоянное развитие', text: 'Учусь и практикуюсь каждый день' },
  { icon: '◎', title: 'Внимание к деталям', text: 'Адаптивность и удобство' },
];

// Навыки. Поле className задаёт цвет иконки (классы описаны в global.css)
export const skills = [
  { symbol: '5', className: 'html', title: 'HTML5', text: 'Семантическая и доступная структура страниц.' },
  { symbol: '✳', className: 'css', title: 'CSS3', text: 'Flexbox, Grid, анимации и адаптивная вёрстка.' },
  { symbol: 'JS', className: 'js', title: 'JavaScript', text: 'Логика, события, массивы и интерактивность.' },
  { symbol: '⚛', className: 'react', title: 'React', text: 'Компоненты, Hooks и создание интерфейсов.' },
  { symbol: 'ϟ', className: 'vite', title: 'Vite', text: 'Современная среда разработки проектов.' },
  { symbol: '⌘', className: 'git', title: 'Git & GitHub', text: 'Контроль версий и публикация проектов.' },
];

// Проекты
export const projects = [
  {
    number: '01',
    label: 'МОЙ ОСНОВНОЙ ПРОЕКТ',
    title: 'Travel KG',
    domain: 'travelkg.uk',
    url: links.travelKg,
    description:
      'Туристическая платформа, посвящённая красоте Кыргызстана. Проект помогает путешественникам знакомиться с направлениями, находить интересные места и планировать поездки.',
    tags: ['React', 'JavaScript', 'Vite', 'CSS'],
  },
];

// Карточки в разделе «Контакты»
export const contacts = [
  { icon: '◉', label: 'WHATSAPP', value: '+996 708 700 915', url: links.whatsapp },
  { icon: '➤', label: 'TELEGRAM', value: '@usserr_0777', url: links.telegram },
  { icon: '⌘', label: 'GITHUB', value: 'github.com/Malika009', url: links.github },
];
