import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import IndieView from "../views/IndieView.vue";
import JazzView from "../views/JazzView.vue";
import FunkView from "../views/FunkView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/indie",
    name: "indie",
    component: IndieView,
  },
  {
    path: "/jazz",
    name: "jazz",
    component: JazzView,
  },
  {
    path: "/funk",
    name: "funk",
    component: FunkView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
