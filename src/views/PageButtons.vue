<template lang="pug">
  #PageButtons
    v-page-content
      b-container
        b-row(col class="md-4")
          b-col
            b-card(title="Buttons")
              b-row
                template(v-for="variant in ['primary','secondary','success','outline-success','info','warning','danger','link']")
                  b-col(md="4" class="pb-2" v-for="size in ['sm','','lg']" :key='`${variant}_${size}`')
                    b-button(:size='size' :variant='variant') {{variant}} {{size}}


</template>

<script>
import Page from "../components/Page/Page";

export default {
  name: "PageButtons",
  extends: Page,
  created() {
    this.setPageTitle('Buttons');
  }
}
</script>

