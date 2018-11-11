<template lang="pug">
  #item(ref="item")
    div.short {{ short }}
    router-link.title(v-show="sidebarExpanded" tag="div" :to="to") {{ title }}
</template>

<script>
import ElementResizeEvent from "element-resize-event";

export default {
  name: "SidebarMenuItem",
  data() {
    return {
      width: 0,
    }
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
  methods: {
    handleResize(width) {
      this.$set(this,"width", width);
    }
  }
}
</script>

<style lang="scss" scoped>
  #item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    height: 44px;

    border-radius: 22px;
    margin: 4px 0;

    transition-property: color, background-color;
    transition-duration: .35s, .36s;
    transition-timing-function: ease, ease;

    &:hover {
      background-color: rgba(#FFFFFF, .1);
      color: #FFFFFF;
    }
    div.short {
      width: 28px;
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
  }
</style>


