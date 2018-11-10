export default {
  state: {
    sidebarExpanded: false,
  },
  mutations: {
    sidebarExpandedToggle(state) {
      state.sidebarExpanded = !state.sidebarExpanded;
    }
  },
  actions: {
    sidebarExpandedToggle ({commit}) {
      commit('sidebarExpandedToggle');
    }
  },
  getters: {
    sidebarExpanded: (s) => s.sidebarExpanded,
  },
}
