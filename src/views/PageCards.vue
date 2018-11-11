<template lang="pug">
  #PageCards
    v-page-content
      b-container
        b-row
          b-col(cols="12" lg="8" md="12" class="d-flex align-items-stretch mb-4")
            b-card(title="Card com imagem" img-src="https://picsum.photos/800/400/?image=25" img-top)
              p.card-text Cillum culpa id et dolore deserunt id dolore enim reprehenderit
                | est. Anim ex sint est labore consectetur. Culpa exercitation
                | aliquip consequat sunt sit mollit adipisicing excepteur et.
          b-col(cols="12" lg="4" md="6" class="d-flex align-items-stretch mb-4")
            b-card(title="Card").flex-fill
              p.card-text Use a combinação de classes #[span.font-italic "d-flex align-items-stretch"]
                | no elemento pai e #[span.font-italic "flex-fill"] internamente para fazer com que os elementos compartilhem suas alturas
          b-col(cols="12" lg="12" md="6" class="mb-4")
            b-card(title="Card title" sub-title="Card subtitle")
              p.card-text Fugiat quis ut nisi consectetur laborum mollit labore anim dolore
                | eiusmod voluptate dolore aliqua consequat. Aute enim excepteur
                | ullamco ut ad proident aute fugiat dolor non do non in aliqua.
                | Voluptate consequat laborum adipisicing quis ut amet reprehenderit
                | ipsum Lorem ullamco et aute commodo.
              p.card-text
                a(href="/") Card link
                | &nbsp;
                b-link(to="/") Outro link
                | &nbsp;

        b-row
          b-col(cols="12" class="mb-4")
            b-card(title="Card com imagem em baixo"
              img-src="https://picsum.photos/1200/800/?image=15" img-bottom)
              p.card-text Ea aute est aliquip veniam laborum ipsum
                | aliqua enim aliqua occaecat incididunt nostrud.
              p.card-text Dolore id consectetur nulla ut ad. Aliquip
                | est sit commodo sint officia enim aliquip sit Lorem sunt
                | velit do non sit. Minim mollit ad nulla consequat ad aliqua
                | veniam aute tempor id. Duis labore incididunt minim ex velit eu.
                | Nostrud aute irure pariatur non reprehenderit ea deserunt.
                | Eiusmod id ipsum nulla labore magna sunt nisi fugiat ea elit culpa.



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





