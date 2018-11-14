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
    // margin-top: -50px;
    background-color: rgba(#f1f1f1, 1);
    position: relative;
    min-height: calc(100vh - 200px);
    height: 100%;
    margin-top: 200px;
      #content {
        @include bounceInUp();
        position: relative;
        width: 100%;
        top: -80px;
      }
  }
</style>


