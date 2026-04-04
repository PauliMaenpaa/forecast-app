# Projekti: Vue + Vuetify (JS) Forecast-app

Tämä projekti on alustettu käyttäen Vue 3 ja Vuetifya JavaScript-pohjaisena.

# Alustus ja asennus

## 1. Ympäristö

Varmista, että käytössäsi on oikea Node-versio. Projektissa käytetään paketinhallintaan PNPM.

```Bash
nvm install 22.12.1
nvm use 22.12.1
```

## 2. Projektin luominen

Koska `pnpm create vuetify@latest` pakottaa käyttämään TypeScript, projekti on luotu Vite-kiertotien kautta:

`pnpm create vite@latest` Valitse: Vue -> JavaScript

## 3. Vuetify ja riippuvuuksien asennus

```Bash
pnpm add vuetify@latest
pnpm add -D sass vite-plugin-vuetify
```

## 4. Asennetut lisäosat:

sass: Tarvitaan Vuetifyn tyylien kääntämiseen.

vite-plugin-vuetify: Mahdollistaa komponenttien automaattisen latauksen (tree-shaking).

## 5. Konfigurointi

Lisätty seuraavat asetukset projektin tiedostoihin:

vite.config.js:

```JavaScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
plugins: [
vue(),
vuetify({ autoImport: true }), // Automaattinen komponenttien lataus
],
})
```

src/main.js:

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(App)
.use(vuetify)
.mount('#app')
```

## 6. Käynnistys

Asenna riippuvuudet ja käynnistä kehityspalvelin:

```Bash
pnpm install
pnpm dev
```
