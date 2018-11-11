<template lang="pug">
  #App(:class="{'sidebar-expanded': $store.getters.sidebarExpanded}")
    v-sidebar
    v-main
      v-navbar
      transition(enter-active-class="fadeIn")
        router-view
</template>

<script>
import ElementResizeEvent from "element-resize-event";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

export default {
  name: "App",
  components: {
    "v-sidebar": Sidebar,
    "v-navbar": Navbar,
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

    max-height: calc(100vh + 300px);
    overflow: hidden;
    min-height: 100vh;
    width: 100vw;

    &.sidebar-expanded {
      @media only screen and (max-width: 800px) {
        width: calc(100vw + 260px);
      }
    }

  }

  .fadeInLeft {
    @include fadeInLeft();
    transition-duration: 1s;
  }
</style>

