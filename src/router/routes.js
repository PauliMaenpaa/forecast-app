import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ForecastView from "../views/ForecastView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/forecast",
    name: "Forecast",
    component: ForecastView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
