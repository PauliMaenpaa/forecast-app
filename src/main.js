import {createApp} from "vue";
import App from "./App.vue";

import {createPinia} from "pinia";

import "@mdi/font/css/materialdesignicons.css";

import {createVuetify} from "vuetify";
import "vuetify/styles";
import {aliases, mdi} from "vuetify/iconsets/mdi";

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

createApp(App).use(vuetify).use(pinia).use(router).mount("#app");
