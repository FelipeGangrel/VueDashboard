<template lang="pug">
  #main
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
  methods: {
    toggleSidebar() {
      this.$store.dispatch('sidebarExpandedToggle');
    }
  }
}
</script>

<style lang="scss" scoped>
  #main {
    background-color: #FAFAFA;
    width: 100%;
    // min-height: 100vh;
    margin-left: 80px;
    background-color: #FAFAFA;

    transition-property: margin-left;
    transition-duration: .35s;
    transition-timing-function: ease;

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


