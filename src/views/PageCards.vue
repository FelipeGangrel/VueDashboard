<template lang="pug">
  #PageCards
    v-page-content
      b-container(fluid)
        b-row(align-h="center" align-content="stretch")
          b-col
            b-card(title="Card 2" sub-title="Card 2 subtítulo")
              p Fugiat quis ut nisi consectetur laborum mollit labore anim dolore
                | eiusmod voluptate dolore aliqua consequat. Aute enim excepteur
                | ullamco ut ad proident aute fugiat dolor non do non in aliqua.
                | Voluptate consequat laborum adipisicing quis ut amet reprehenderit
                | ipsum Lorem ullamco et aute commodo.

</template>

<script>
import Page from "../components/Page/Page";

export default {
  name: "PapeCards",
  extends: Page,
  created() {
    this.setPageTitle('Cards');
  }
}
</script>





