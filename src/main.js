import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';

import App from "./App.vue";
import router from "./router";
import store from "./store";

library.add(fas, fab);
Vue.use(BootstrapVue);
Vue.component('fa-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


import "vue2-animate/dist/vue2-animate.css";
import "./assets/scss/main.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
