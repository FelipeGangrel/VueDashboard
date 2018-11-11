<template lang="pug">
  #main(:class="{'sidebar-locked': $store.getters.sidebarLocked, 'sidebar-expanded': $store.getters.sidebarExpanded}")
    main
      slot
</template>

<script>
export default {
  name: "Main",
  computed: {
    sidebarExpanded() {
      return this.$store.getters.sidebarExpanded;
    }
  },
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

  }
</style>


