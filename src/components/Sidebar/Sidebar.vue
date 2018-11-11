<template lang="pug">
  aside#Sidebar(
    @mouseover="mouseOver=true"
    @mouseout="mouseOver=false"
    :class="{'lock': $store.getters.sidebarLocked, 'expanded': $store.getters.sidebarExpanded}")

    div.lock-toggle(@click="toggleLock" v-show="isExpanded")
      fa-icon(icon="list-ul" v-show="$store.getters.sidebarLocked")
      fa-icon(icon="bars" v-show="!$store.getters.sidebarLocked")

    section
      v-sidebar-item(icon="cube" title="Dashboard" to="/")
      v-sidebar-menu(:icon="['fas','cube']" title="Menu 1")
        v-sidebar-menu-item(short="ca" title="Cards" to="/cards")
        v-sidebar-menu-item(short="bt" title="Buttons" to="/buttons")
        v-sidebar-menu-item(short="f" title="Form" to="/forms")

</template>

<script>
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";
import SidebarMenuItem from "./SidebarMenuItem";

export default {
  name: "Sidebar",
  components: {
    "v-sidebar-item": SidebarItem,
    "v-sidebar-menu": SidebarMenu,
    "v-sidebar-menu-item": SidebarMenuItem,
  },
  data() {
    return {
      mouseOver: false,
    }
  },
  computed: {
    isExpanded() {
      return this.mouseOver || this.$store.getters.sidebarLocked;
    }
  },
  watch: {
    isExpanded(value) {
      this.$store.dispatch('sidebarExpanded', value);
    },
  },
  methods: {
    toggleLock() {
      const state = this.$store.getters.sidebarLocked;
      this.$store.dispatch('sidebarLocked', !state);
    }
  }
}
</script>

<style lang="scss" scoped>
  #Sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateZ(0);
    z-index: 90;
    width: 80px;
    height: 100vh;
    padding: 120px 0px;
    background-color: #212121;
    color: #cccccc;
    box-shadow: 0px 0px 15px 2px rgba(#000, .4);
    overflow: hidden;

    transition-property: top,left,width;
    transition-duration: .2s,.35s,.35s;
    transition-timing-function: linear,linear,ease;

    &:hover, &.lock {
      width: 260px;
    }

    @media only screen and (max-width: 800px) {
      width: 260px;
      margin-left: -260px;
      position: relative;
      // min-height: calc(100vh + 50%);
      &.expanded {
        margin-left: 0px;
      }
    }

    section {
      max-height: calc(100vh - 70px);
      // background-color: #414141;
      padding: 0 17px;
      margin-right: -2px;
      overflow-y: scroll;
    }


  }

  div.lock-toggle {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 22px;
    background-color: #313131;
    position: absolute;
    right: 15px;
    top: 20px;
    cursor: pointer;
    font-size: 12px;
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
