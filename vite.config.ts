import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/neuronix-landing/',
  plugins: [
    tailwindcss(),
  ],
})