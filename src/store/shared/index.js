export default {
  state: {
    sidebarExpanded: false,
    sidebarLocked: false,
    pageTitle: '',
  },
  mutations: {
    sidebarExpanded(state, payload) {
      state.sidebarExpanded = payload;
    },
    sidebarLocked(state, payload) {
      state.sidebarLocked = payload;
    },
    setPageTitle(state, payload) {
      state.pageTitle = payload;
    },
  },
  actions: {
    sidebarExpanded ({commit}, payload) {
      commit('sidebarExpanded', payload);
    },
    sidebarLocked ({commit}, payload) {
      commit('sidebarLocked', payload);
    },
    setPageTitle ({commit}, payload) {
      commit('setPageTitle', payload);
    },
  },
  getters: {
    sidebarExpanded: (s) => s.sidebarExpanded,
    sidebarLocked: (s) => s.sidebarLocked,
    pageTitle: (s) => s.pageTitle,
  },
}
