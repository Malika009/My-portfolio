# Malika — Frontend Developer Portfolio

Сайт-портфолио на **React + JavaScript + Vite**.

## Как запустить на компьютере

Нужен установленный [Node.js](https://nodejs.org/) (версия 20 или новее).

```bash
cd malika-portfolio
npm install      # установить зависимости (один раз)
npm run dev      # запустить сайт: откройте адрес из терминала, обычно http://localhost:5173
```

Другие команды:

```bash
npm run build    # собрать готовый сайт в папку dist
npm run preview  # посмотреть собранную версию из dist
```

## Структура проекта

```
malika-portfolio/
├── index.html               # HTML-страница, в которую React выводит сайт
├── package.json             # список библиотек и команд
├── vite.config.js           # настройки Vite
├── public/
│   └── Malika-Arapbaeva-CV.pdf   # резюме (копируется в сборку без изменений)
└── src/
    ├── main.jsx             # точка входа: запускает React
    ├── App.jsx              # собирает страницу из разделов
    ├── data/portfolio.js    # все ссылки, навыки, проекты и контакты
    ├── styles/global.css    # дизайн, цвета, адаптивность
    └── components/          # React-компоненты (по одному на раздел)
        ├── Header.jsx       # шапка и мобильное меню
        ├── Logo.jsx
        ├── Hero.jsx         # первый экран
        ├── SectionHeading.jsx
        ├── About.jsx        # обо мне
        ├── Skills.jsx       # навыки
        ├── Projects.jsx     # проекты
        ├── ProjectCard.jsx
        ├── Resume.jsx       # резюме: просмотр и скачивание PDF
        ├── Contact.jsx      # контакты
        └── Footer.jsx       # подвал
```

## Что где менять

- Ссылки, навыки, проекты, контакты — `src/data/portfolio.js`.
- Тексты разделов — в соответствующем файле в `src/components/`.
- Цвета, размеры и адаптивность — `src/styles/global.css`.
- Резюме — замените файл `public/Malika-Arapbaeva-CV.pdf` (имя оставьте тем же).

Ссылки:
- Travel KG: https://travelkg.uk/
- GitHub: https://github.com/Malika009
- Telegram: https://t.me/usserr_0777
- WhatsApp: https://wa.me/996708700915

## Публикация

### 1. GitHub

```bash
git add .
git commit -m "Перевод портфолио на React + Vite"
git push
```

Папки `node_modules` и `dist` в GitHub не загружаются (указаны в `.gitignore`).

### 2. Cloudflare Pages

1. Откройте Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Выберите репозиторий `My-portfolio` и нужную ветку.
3. Настройки сборки:
   - **Framework preset:** `Vite` (или `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `malika-portfolio`
4. Нажмите **Save and Deploy**.

После каждого `git push` Cloudflare сам пересобирает и обновляет сайт.
Версия Node.js для сборки задана в файле `.nvmrc`.
