import Vue from "vue";
import Router from "vue-router";
import PageDashboard from "./views/PageDashboard.vue";
import PageCards from "./views/PageCards.vue";
import PageForms from "./views/PageForms.vue";
import PageButtons from "./views/PageButtons.vue";


Vue.use(Router);


const routes = [
  {
    path: "/",
    name: "dashboard",
    component: PageDashboard,
  },
  {
    path: "/cards",
    name: "cards",
    component: PageCards,
  },
  {
    path: "/forms",
    name: "forms",
    component: PageForms,
  },
  {
    path: "/buttons",
    name: "buttons",
    component: PageButtons,
  },
];

export default new Router({
  mode: "history",
  routes,
});
