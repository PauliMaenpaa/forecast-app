import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/pnpm add vue-router@4
export default defineConfig({
  plugins: [vue(), vuetify({autoImport: true})],
});
