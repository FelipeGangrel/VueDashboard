<template lang="pug">
  aside#sidebar(
    @mouseover="toggleMouseOver"
    @mouseout="toggleMouseOver"
    :class="{expanded: isExpanded}")
    div.lock(@click="toggleLock")
      fa-icon(icon="list-ul" v-show="lock")
      fa-icon(icon="bars" v-show="!lock")
    section
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Charts")
</template>

<script>
import SidebarMenu from "./SidebarMenu";
import SidebarMenuItem from "./SidebarMenuItem";

export default {
  name: "Aside",
  components: {
    "v-sidebar-menu": SidebarMenu,
    "v-sidebar-menu-item": SidebarMenuItem,
  },
  data() {
    return {
      mouseOver: false,
      lock: false,
    }
  },
  computed: {
    isExpanded() {
      return this.mouseOver || this.lock;
    }
  },
  watch: {
    isExpanded(value) {
      this.$store.dispatch('sidebarExpandedToggle');
    }
  },
  methods: {
    toggleMouseOver() {
      this.mouseOver = !this.mouseOver;
    },
    toggleLock() {
      this.lock = !this.lock;
    }
  }
}
</script>

<style lang="scss" scoped>
  #sidebar {
    position: fixed;
    z-index: 2;
    width: 80px;
    min-height: 100vh;
    padding: 70px 10px 10px 10px;
    display: block;
    background-color: #212121;
    color: #cccccc;
    box-shadow: 0px 0px 15px 2px rgba(#000, .4);

    transition-property: top,left,width;
    transition-duration: .2s,.35s,.35s;
    transition-timing-function: linear,linear,ease;
    // @include slideInLeft();

    @media only screen and (min-width: 801px) {
      &.expanded {
        width: 260px;
      }
    }

  }

  div.lock {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 22px;
    background-color: #212121;
    // border: 20px solid #212121;
    position: absolute;
    right: 10px;
    top: 15px;
    cursor: pointer;
    font-size: 10px;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }


  .fadeInLeft {
    @include fadeInLeft();
  }
  .fadeOutLeft {
    @include fadeOutLeft(
      $duration: .2s
    );
  }

</style>
