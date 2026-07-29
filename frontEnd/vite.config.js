import { defineConfig } from 'vite'
import {resolve} from "path"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rolldownOptions:{
      input:{
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile.html')
      }
    }
  }
})