<template lang="pug">
  #Navbar(:class="{'sidebar-expanded' : $store.getters.sidebarExpanded, 'sidebar-locked' : $store.getters.sidebarLocked}")
    nav(id="nav")
      div.toggle-sidebar
      button.icon.toggle-sidebar(@click="toggleSidebar"): fa-icon(icon="bars")
      span.title {{ title }}
      div.buttons
        button.icon: fa-icon(icon="user")
        button.icon(id="options-popover"): fa-icon(icon="ellipsis-v")
        b-popover(target="options-popover" container="nav" placement="bottomleft" triggers="focus")
          div.user-menu
            router-link.menu-item(to="/perfil" tag="div")
              div.icon: fa-icon(icon="user")
              div.title Meu perfil
            router-link.menu-item(to="/perfil" tag="div")
              div.icon: fa-icon(icon="sign-out-alt")
              div.title Sair
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    title() {
      return this.$store.getters.pageTitle;
    }
  },
  methods: {
    toggleSidebar() {
      const expanded = this.$store.getters.sidebarExpanded;
      const locked = this.$store.getters.sidebarLocked;
      this.$store.dispatch('sidebarExpanded', !expanded);
      this.$store.dispatch('sidebarLocked', !locked);
    },
  }
}
</script>

<style lang="scss" scoped>
  #Navbar {
    width: calc(100vw - 80px);

    @media only screen and (max-width: 800px) {
      width: 100%;
    }

    margin-bottom: -80px;

    &.sidebar-locked {
      width: calc(100vw - 260px);
    }

    &.sidebar-expanded {
      @media only screen and (max-width: 800px) {
        width: 100%;
        left: 260px;
      }
    }

    nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
      // background-color: #212121;
      padding: 0 20px;
      height: 80px;
      // background-color: rgba(red, .5);
      .toggle-sidebar {
        @media only screen and (min-width: 801px) {
          display: none;
        }
      }
      span.title {
        flex-grow: 2;
        font-size: 1.3em;
        text-transform: uppercase;
        font-weight: 200;
        letter-spacing: .2em;
        @media only screen and (max-width: 800px) {
          margin-left: 20px;
        }
      }
      button.icon {
        color: #FFF;
        background-color: rgba(#FFF, .2);
        border: none;
        outline: none;
        width: 44px;
        height: 44px;
        border-radius: 22px;
        cursor: pointer;
        &:hover {
          background-color: rgba(#FFF, .4);
        }
      }
      div.buttons {
        button:not(:first-child) {
          margin-left: 10px;
        }
      }
      .user-menu {
        margin: -8px -12px;
        .menu-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 44px;
          padding: 0 24px;
          cursor: pointer;

          &:hover {
            background-color: #f1f1f1;
          }
          &:first-child {

          }
          div.icon {
            width: 24px;
          }
        }
      }
    }
  }
</style>


