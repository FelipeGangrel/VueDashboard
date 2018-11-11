export default {
  state: {
    sidebarExpanded: false,
    sidebarLocked: false,
  },
  mutations: {
    sidebarExpanded(state, payload) {
      state.sidebarExpanded = payload;
    },
    sidebarLocked(state, payload) {
      state.sidebarLocked = payload;
    },
  },
  actions: {
    sidebarExpanded ({commit}, payload) {
      commit('sidebarExpanded', payload);
    },
    sidebarLocked ({commit}, payload) {
      commit('sidebarLocked', payload);
    }
  },
  getters: {
    sidebarExpanded: (s) => s.sidebarExpanded,
    sidebarLocked: (s) => s.sidebarLocked,
  },
}
