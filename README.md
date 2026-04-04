Projekti: Vue + Vuetify (JS)
Tämä projekti on alustettu käyttäen Vue 3:a ja Vuetifya JavaScript-pohjaisena.

Alustus ja asennus

1. Ympäristö
   Varmista, että käytössäsi on oikea Node-versio. Projektissa käytetään paketinhallintaan PNPM:ää.

Bash
nvm install 22.12.1
nvm use 22.12.1 2. Projektin luonti
Koska pnpm create vuetify@latest pakottaa TypeScriptin, projekti on luotu JavaScript-pohjaisena Vite-kiertotien kautta:

Bash

# Projektin alustus

pnpm create vite@latest # Valitse: Vue -> JavaScript

# Vuetifyn ja riippuvuuksien asennus

pnpm add vuetify@latest
pnpm add -D sass vite-plugin-vuetify
Asennetut lisäosat:

sass: Tarvitaan Vuetifyn tyylien kääntämiseen.

vite-plugin-vuetify: Mahdollistaa komponenttien automaattisen latauksen (tree-shaking).

3. Konfigurointi
   Lisää seuraavat asetukset projektin tiedostoihin:

vite.config.js
JavaScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
plugins: [
vue(),
vuetify({ autoImport: true }), // Automaattinen komponenttien lataus
],
})
src/main.js
JavaScript
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(App)
.use(vuetify)
.mount('#app')
Käynnistys
Asenna riippuvuudet ja käynnistä kehityspalvelin:

Bash
pnpm install
pnpm dev
