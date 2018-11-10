<template lang="pug">
  #home
    b-container(fluid)
      b-row(align-h="center" align-content="stretch")
        b-col(md="4")
          b-card(title="Card 1")
            p Fugiat quis ut nisi consectetur laborum mollit labore anim dolore eiusmod voluptate dolore aliqua consequat. Aute enim excepteur ullamco ut ad proident aute fugiat dolor non do non in aliqua. Voluptate consequat laborum adipisicing quis ut amet reprehenderit ipsum Lorem ullamco et aute commodo.
            b-button-group
              b-button(variant="info") Botão 1
              b-button(variant="info" href="https://www.google.com") Botão 2

            hr
            b-button(block)
              fa-icon(:icon="['fab', 'google']")
              span &nbsp; Google


        b-col(md="6")
          b-card(title="Card 2" sub-title="Card 2 subtítulo")
            p Fugiat quis ut nisi consectetur laborum mollit labore anim dolore eiusmod voluptate dolore aliqua consequat. Aute enim excepteur ullamco ut ad proident aute fugiat dolor non do non in aliqua. Voluptate consequat laborum adipisicing quis ut amet reprehenderit ipsum Lorem ullamco et aute commodo.
            router-link(to="/" block) Link




</template>

<script>
export default {
  name: "Home",
}
</script>


