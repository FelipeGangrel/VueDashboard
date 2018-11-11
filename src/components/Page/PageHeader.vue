<template lang="pug">
  #PageHeader
    header
      nav
        div.toggle-sidebar
          fa-icon(icon="bars" @click="toggleSidebar")
        span.title {{ title }}
        fa-icon(icon="ellipsis-v")
</template>

<script>
export default {
  name: "PageHeader",
  props: ['title'],
  data() {
    return {}
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
  #PageHeader {
    header {
      background-color: #4a3faf;
      padding-bottom: 100px;
      background: linear-gradient(90deg,#0c2646,#204065 60%,#2a5788);
      margin-bottom: -50px;
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
  }
</style>


