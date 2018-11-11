<template lang="pug">
  #PageCards
    v-page-content
      b-container(fluid)
        b-row
          b-col(col sm="12" class="mb-4")
            b-card(title="Card 2" sub-title="Card 2 subtítulo")
              p Fugiat quis ut nisi consectetur laborum mollit labore anim dolore
                | eiusmod voluptate dolore aliqua consequat. Aute enim excepteur
                | ullamco ut ad proident aute fugiat dolor non do non in aliqua.
                | Voluptate consequat laborum adipisicing quis ut amet reprehenderit
                | ipsum Lorem ullamco et aute commodo.

        b-row
          b-col(col sm="12" md="6" class="mb-4")
            b-card(title="Card")
              p Cillum culpa id et dolore deserunt id dolore enim reprehenderit
                | est. Anim ex sint est labore consectetur. Culpa exercitation
                | aliquip consequat sunt sit mollit adipisicing excepteur et.
          b-col(col sm="12" md="6" class="mb-4")
            b-card(title="Card")
              p Cillum culpa id et dolore deserunt id dolore enim reprehenderit
                | est. Anim ex sint est labore consectetur. Culpa exercitation
                | aliquip consequat sunt sit mollit adipisicing excepteur et.

        b-row
          b-col(col sm="12" md="8" class="d-flex align-items-stretch mb-4")
            b-card(title="Card")
              p Cillum culpa id et dolore deserunt id dolore enim reprehenderit
                | est. Anim ex sint est labore consectetur. Culpa exercitation
                | aliquip consequat sunt sit mollit adipisicing excepteur et.
          b-col(col sm="12" md="4" class="d-flex align-items-stretch mb-4")
            b-card(title="Card")
              p Cillum culpa id et dolore deserunt id dolore enim reprehenderit
                | est. Anim ex sint est labore consectetur. Culpa exercitation
                | aliquip consequat sunt sit mollit adipisicing excepteur et.

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





