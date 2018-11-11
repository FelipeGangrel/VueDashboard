<template lang="pug">
  #menu
    header(ref="menu" @click="toggleMenu")
      div.icon: fa-icon(icon="home")
      div.title(v-show="sidebarExpanded") {{ title }}
      div.angle(v-show="sidebarExpanded"): fa-icon(icon="angle-down")

    transition(enter-active-class="fadeInUp" leave-active-class="fadeOutDown")
      section(v-show="active" :class="{open: active}")
        slot
</template>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      width: 0,
      active: false,
    }
  },
  props: {
    title: String,
  },
  computed: {
    sidebarExpanded() {
      return this.$store.getters.sidebarExpanded;
    }
  },
  methods: {
    toggleMenu() {
      this.active = !this.active;
    }
  }
}
</script>

<style lang="scss" scoped>
  #menu {
    cursor: pointer;
    margin: 5px 0;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 22px;
      padding: 0 16px;
      height: 44px;
      text-transform: uppercase;

      transition-property: color, background-color;
      transition-duration: .35s, .36s;
      transition-timing-function: ease, ease;

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
      div.angle {
        @include fadeInLeft();
      }
    }
    section {
      max-height: 0;
      overflow: hidden;

      transition-property: max-width;
      transition-duration: 1s;
      transition-timing-function: ease;
      &.open {
        max-height: 100%;
      }
    }
  }

  .fadeInUp {
    @include fadeInUp();
  }
  .fadeOutDown {
    @include fadeOutDown();
  }


</style>

