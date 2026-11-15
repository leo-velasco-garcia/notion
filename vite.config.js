import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import { fileURLToPath } from "node:url";


const variablesPath = fileURLToPath(
  new URL("./src/assets/scss/parcials/_vars.scss", import.meta.url)
).replace(/\\/g, "/");

const mixinsPath = fileURLToPath(
  new URL("./src/assets/scss/parcials/_mixins.scss", import.meta.url)
).replace(/\\/g, "/");


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "${variablesPath}" as *;
          @use "${mixinsPath}" as *;
        `,
      },
    },
  },
})

