import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
  build: {
    rollupOptions: {
      external: [path.resolve(__dirname, './src/backend')]
    }
  }
}})
