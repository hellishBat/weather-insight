import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { createHtmlPlugin } from 'vite-plugin-html'
import mkcert from 'vite-plugin-mkcert'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  server: { open: true },
  preview: {
    open: true,
  },
  plugins: [
    react(),
    mkcert(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
    }),
    imagetools(),
    svgr(),
    eslintPlugin({
      eslintOptions: {
        cache: false,
        fix: true,
      },
      shouldLint: (path) =>
        /\.(ts|tsx)$/.test(path) &&
        path.includes('/src/') &&
        !path.includes('/node_modules/') &&
        !path.includes('/dist/'),
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
