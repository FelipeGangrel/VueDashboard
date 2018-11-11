<template lang="pug">
  router-link#SidebarItem(:to="to" tag="div")
    div.icon: fa-icon(:icon="icon")
    div.title(v-show="sidebarExpanded") {{ title }}
</template>

<script>
export default {
  name: "SidebarItem",
  props: ['icon', 'title', 'to'],
  computed: {
    sidebarExpanded() {
      return this.$store.getters.sidebarExpanded;
    }
  },
}
</script>

<style lang="scss" scoped>
  #SidebarItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 22px;
    padding: 0 16px;
    height: 44px;
    text-transform: uppercase;
    cursor: pointer;

    transition-property: color, background-color;
    transition-duration: .35s, .36s;
    transition-timing-function: ease, ease;

    &.open {
      background-color: rgba(#FFFFFF, .1);
    }

    &:hover {
      background-color: rgba(#FFFFFF, .1);
      color: #FFFFFF;
    }
    div.icon {
      width: 28px;
      text-align: center;
    }
    div.title {
      flex-grow: 2;
      font-size: 12px;
      margin-left: 16px;
      @include fadeInLeft();
    }

    &.router-link-exact-active {
      background-color: rgba(#fafafa, 1);
      color: $primary;
    }
  }
</style>


