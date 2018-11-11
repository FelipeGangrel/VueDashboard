<template lang="pug">
  aside#sidebar(
    @mouseover="mouseOver=true"
    @mouseout="mouseOver=false"
    :class="{'lock': $store.getters.sidebarLocked, 'expanded': $store.getters.sidebarExpanded}")

    div.lock-toggle(@click="toggleLock")
      fa-icon(icon="list-ul" v-show="lock")
      fa-icon(icon="bars" v-show="!lock")

    section
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")
      v-sidebar-menu(icon="cube" title="Components")
        v-sidebar-menu-item(short="ca" title="Cards")
        v-sidebar-menu-item(short="bt" title="Buttons")
        v-sidebar-menu-item(short="f" title="Form")


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
  #sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateZ(0);
    z-index: 900;
    width: 80px;
    height: 100vh;
    padding: 70px 0px;
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
      // min-height: calc(100vh + 50%);
      &.expanded {
        margin-left: 0px;
      }
    }

    section {
      max-height: calc(100vh - 70px);
      // background-color: #414141;
      padding: 0 10px;
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
    background-color: #212121;
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
