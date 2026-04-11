import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify
import {createVuetify} from "vuetify";
import "vuetify/styles";
import {aliases, mdi} from "vuetify/iconsets/mdi";

// Reititin (Tarkista että polku on oikein tiedostoosi nähden)
import router from "./router/routes";

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
createApp(App).use(vuetify).use(router).mount("#app");
