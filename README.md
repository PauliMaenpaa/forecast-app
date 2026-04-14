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
pnpm add @mdi/font
```

## 4. Asennetut lisäosat:

sass: Tarvitaan Vuetifyn tyylien kääntämiseen.

vite-plugin-vuetify: Mahdollistaa komponenttien automaattisen latauksen (tree-shaking).

@mdi/font ikonit

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

# Navigaatio, views ja router

Tässä dokumentaatiossa käydään läpi sovelluksen rakenteen perusteet, reititys ja globaalin navigoinnin toteutus Vuetify-komponenteilla.

## 1. Komponenttien organisointi (Components-kansio)

Luodaan `src/components/` kansio, jonne sijoitetaan sovelluksen pienet, uudelleenkäytettävät palaset ja globaalit käyttöliittymäelementit. Tällä pidetään projektin rakenne selkeänä ja erotetaan logiikka esitystavasta.

## 2. Navigaatiopaneeli

Sovelluksessa käytetään Vuetifyn `<v-navigation-drawer>` -komponenttia. Se tarjoaa valmiin, mobiiliystävällisen sivupaneelin, joka pysyy näkyvissä jokaisella sivulla.

## 3. Sivujen luominen (Views-kansio)

Luodaan `src/views/` kansio, johon sijoitetaan sovelluksen päänäkymät:

- `HomeView.vue` (Etusivu)
- `ForecastView.vue` (Sääennuste)
- `AboutView.vue` (Tietoa sovelluksesta)

## 4. Vue Routerin asennus

Asennetaan reititin komennolla:

```Bash
pnpm add vue-router@4
```

**Tarkoitus:** Vue Router on virallinen reitityskirjasto Vue.js-sovelluksille. Sen avulla voimme luoda yksisivuisen sovelluksen (SPA), jossa näkymä vaihtuu ilman, että koko selainlatausta tarvitsee suorittaa uudelleen.

## 5. Reitityksen konfigurointi (routes.js)

Luodaan `src/router/routes.js` tiedosto.

**Tarkoitus:** Tässä tiedostossa määritellään sovelluksen "kartta": kerromme, mikä URL-osoite (path) vastaa mitäkin sivukomponenttia (view). Se toimii aivoina, jotka ohjaavat käyttäjän oikeaan paikkaan.

## 6. Main.js ja reitittimen aktivointi

Muokataan `main.js ` tiedostoa lisäämällä `.use(router)`.

**Miksi:** Reititin pitää rekisteröidä Vue-instanssiin, jotta koko sovellus (mukaan lukien Vuetify-komponentit) on tietoinen reitityksestä ja osaa reagoida URL-osoitteen muutoksiin.

## 7. Navigaatiolinkit ja 'to'-avainsana

Navigaatiopaneelin linkeissä käytetään Vuetifyn `:to` propseja (esim. `<v-list-item to="/weather">`). Arvona käytetään `routes.js` tiedostossa määriteltyä polkua (`path`). Tämä muuttaa URL-osoitetta ohjelmallisesti ilman sivun uudelleenlatausta.

## 8. App.vue: v-main ja router-view

Lisätään `App.vue` tiedostoon `<v-main>` elementti, jonka sisälle sijoitetaan `<router-view />`.

**Miksi:** `<v-main>` on Vuetifyn layout-järjestelmän osa, joka varmistaa, että sisältö asettuu oikein suhteessa navigointipalkkeihin. `<router-view />` taas on paikanpitäjä (placeholder), johon reititin lataa kulloinkin valittuna olevan sivun sisällön.
