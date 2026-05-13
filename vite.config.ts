import path from 'path';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@cards': path.resolve(__dirname, 'src/features/cards'),
      '@sidebar': path.resolve(__dirname, 'src/features/sidebar'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
