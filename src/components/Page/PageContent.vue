<template lang="pug">
  #PageContent
    #content
      slot
</template>

<script>
export default {
  name: "PageContent",
}
</script>

<style lang="scss" scoped>
  #PageContent {
    @include bounceInUp();
    // margin-top: -50px;
    background-color: rgba(#FAFAFA, .9);
    position: relative;
    min-height: calc(100vh - 200px);
      #content {
        position: absolute;
        top: -80px;
      }
  }
</style>


