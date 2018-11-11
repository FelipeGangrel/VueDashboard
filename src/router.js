import Vue from "vue";
import Router from "vue-router";
import PageHome from "./views/PageHome.vue";
import PageCards from "./views/PageCards.vue";


Vue.use(Router);


const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/cards",
    name: "cards",
    component: PageCards,
  }
];

export default new Router({
  mode: "history",
  routes,
});
