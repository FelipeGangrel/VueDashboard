<template lang="pug">
  router-link#SidebarMenuItem(tag="div" :to="to")
    div.short {{ short }}
    div.title(v-show="sidebarExpanded") {{ title }}
</template>

<script>
import ElementResizeEvent from "element-resize-event";

export default {
  name: "SidebarMenuItem",
  data() {
    return {}
  },
  props: {
    title: String,
    short: String,
    to: String,
  },
  computed: {
    sidebarExpanded() {
      return this.$store.getters.sidebarExpanded;
    }
  },
}
</script>

<style lang="scss" scoped>
  #SidebarMenuItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    height: 44px;

    border-radius: 22px;
    margin: 5px 0;

    transition-property: color, background-color;
    transition-duration: .35s, .36s;
    transition-timing-function: ease, ease;

    &:hover {
      background-color: rgba(#FFFFFF, .1);
      color: #FFFFFF;
    }
    div.short {
      width: 28px;
      font-size: 12px;
      text-transform: uppercase;
      text-align: center;
    }
    div.title {
      flex-grow: 2;
      text-transform: uppercase;
      font-size: 11px;
      margin-left: 16px;
      text-align: left;
      @include fadeInLeft();
    }

    &.router-link-exact-active {
      background-color: rgba(#fafafa, 1);
      color: $primary;
    }
  }
</style>


