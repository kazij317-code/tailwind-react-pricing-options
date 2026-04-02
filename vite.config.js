// -------------------------------Start: 34_1 ---------------------------------------

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// (1) import from tailwind: import tailwindcss from '@tailwindcss/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // (2) import from tailwind: tailwindcss()
    react(),
    tailwindcss()
  ],
  base: "/tailwind-react-pricing-options/"
})

// -------------------------------End:34_1-(1) to (9) ---------------------------------------
