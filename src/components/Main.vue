<template lang="pug">
  #main(:class="{'sidebar-locked': $store.getters.sidebarLocked, 'sidebar-expanded': $store.getters.sidebarExpanded}")
    header
      nav
        div.toggle-sidebar
          fa-icon(icon="bars" @click="toggleSidebar")
        span.title Header aqui
        fa-icon(icon="ellipsis-v")
    main
      div#container
        slot
</template>

<script>
export default {
  name: "Main",
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
      const expanded = this.$store.getters.sidebarExpanded;
      const locked = this.$store.getters.sidebarLocked;
      this.$store.dispatch('sidebarExpanded', !expanded);
      this.$store.dispatch('sidebarLocked', !locked);
    }
  }
}
</script>

<style lang="scss" scoped>
  #main {
    background-color: #FAFAFA;
    width: calc(100% - 80px);
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 50px;
    margin-left: 80px;

    @media only screen and (max-width: 800px) {
      margin-left: 0px;
      width: 100%;
    }

    &.sidebar-locked {
      margin-left: 260px;
      width: calc(100% - 260px);
      @media only screen and (max-width: 800px) {
        width: calc(100vw);
        margin-left: 0px;
      }
    }

    header {
      background-color: #4a3faf;
      padding-bottom: 100px;
      background: linear-gradient(90deg,#0c2646,#204065 60%,#2a5788);
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        padding: 0 20px;
        height: 80px;
        .toggle-sidebar {
          width: 30px;
          @media only screen and (min-width: 801px) {
            display: none;
          }
        }
        .title {
          flex-grow: 2;
          font-size: 1.3em;
          text-transform: uppercase;
          font-weight: 200;
          letter-spacing: .2em;
        }
      }
    }

    #container {
      margin-top: -20px;
    }

  }
</style>


