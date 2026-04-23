import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";

// Pinia Store
import {createPinia} from "pinia";

import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import {createVuetify} from "vuetify";
import "vuetify/styles";
import {aliases, mdi} from "vuetify/iconsets/mdi";

// Reititin (Tarkista että polku on oikein tiedostoosi nähden)
import router from "./router/routes";

const pinia = createPinia();

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

// Lisää .use(router) tähän ketjuun
createApp(App).use(vuetify).use(pinia).use(router).mount("#app");
