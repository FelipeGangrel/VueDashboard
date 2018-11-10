import Vue from "vue";
import Vuex from "vuex";
import VuexPersistedState from "vuex-persistedstate";

import shared from "./shared";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
  },
  plugins: [
    VuexPersistedState()
  ]
});
