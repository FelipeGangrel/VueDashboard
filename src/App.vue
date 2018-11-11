<template lang="pug">
  #app(:class="{'sidebar-expanded': sidebarExpanded}" ref="app")
    v-sidebar
    v-main
      router-view
</template>

<script>
import ElementResizeEvent from "element-resize-event";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    "v-sidebar": Sidebar,
    "v-main": Main,
  },
  data() {
    return {
    }
  },

  computed: {
    sidebarExpanded() {
      return this.$store.getters.sidebarExpanded;
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebarExpanded = !this.sidebarExpanded;
    },
  }
};
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    justify-content: flex-start;
    background-color: #FAFAFA;
    width: 100vw;
    min-height: 100vh;

    transition-property: width;
    transition-duration: .35s;
    transition-timing-function: linear;
  }
</style>

