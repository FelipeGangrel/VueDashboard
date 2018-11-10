<template lang="pug">
  #app(:class="{'sidebar-expanded': sidebarExpanded}")
    v-sidebar
    v-main
      router-view
</template>

<script>
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default {
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
    }
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
    // margin: 0px -5px;

    transition-property: width;
    transition-duration: .35s;
    transition-timing-function: linear;
  }

  // sidebar e main
  #app {
     &.sidebar-expanded {
      #sidebar {
        width: 260px;
      }
      #main {
        margin-left: 260px;
      }
    }

    @media only screen and (max-width: 800px) {
      #sidebar {
        width: 0px;
        padding: 10px 0px;
        position: relative;
        overflow: hidden;
      }
      #main {
        margin-left: 0px;
      }

      &.sidebar-expanded {
        width: calc(100vw + 260px);
        #sidebar {
          // left: 0px;
          width: 260px;
          padding: 10px;
          // height: 100vh;
        }
        #main {
          margin-left: 0px;
          width: 100vw;
        }
      }
    }
  }
</style>

