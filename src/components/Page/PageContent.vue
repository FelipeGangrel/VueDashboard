<template lang="pug">
  #PageContent
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
  }
</style>


