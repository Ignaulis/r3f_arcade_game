import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/r3f_game__alien_trap_run/',
  plugins: [react()],
})
