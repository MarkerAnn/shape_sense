import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: 'src',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    },
    cssMinify: true, // Will delete my comments in pruduction/build mode
    // Will delete my console.log() statements in pruduction/build mode
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //   },
    // },
  },
  server: {
    open: true,
    hmr: true, // Will refresh the browser when I save a file
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
