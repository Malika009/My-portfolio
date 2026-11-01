import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Настройки Vite: подключаем плагин React.
// Готовая сборка попадает в папку dist — её и публикует Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
});
