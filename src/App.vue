<template lang="pug">
  #App(:class="{'sidebar-expanded': $store.getters.sidebarExpanded}")
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
  #App {
    display: flex;
    justify-content: flex-start;
    align-content: stretch;
    // display: block;
    background-color: #FAFAFA;
    max-height: calc(100vh + 300px);
    overflow: hidden;
    min-height: 100vh;
    width: 100vw;

    &.sidebar-expanded {
      @media only screen and (max-width: 800px) {
        width: calc(100vw + 260px);
        // margin-left: 260px;
        // overflow: scroll;
      }
    }


  }
</style>

