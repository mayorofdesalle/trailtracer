import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@context', replacement: fileURLToPath(new URL('./src/context', import.meta.url)) },
      { find: '@data', replacement: fileURLToPath(new URL('./src/data', import.meta.url)) },
      { find: '@features', replacement: fileURLToPath(new URL('./src/features', import.meta.url)) },
      { find: '@hooks', replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)) },
      { find: '@layout', replacement: fileURLToPath(new URL('./src/layout', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) }
    ],
  },
  build: {
    assetsInlineLimit: '512'
  }
});
