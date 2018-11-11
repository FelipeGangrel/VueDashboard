<template lang="pug">
  #PageHeader
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      showOptionsPopover: false,
    }
  },
  computed: {
    title() {
      return this.$store.getters.pageTitle;
    }
  },
  methods: {
    toggleSidebar() {
      const expanded = this.$store.getters.sidebarExpanded;
      const locked = this.$store.getters.sidebarLocked;
      this.$store.dispatch('sidebarExpanded', !expanded);
      this.$store.dispatch('sidebarLocked', !locked);
    },
    toggleOptionsPopover() {
      this.showOptionsPopover = !this.showOptionsPopover;
    }
  }
}
</script>

<style lang="scss" scoped>
  #PageHeader {
    height: 200px;
    // background-color: red;
    // margin-bottom: -50px;
  }
</style>


