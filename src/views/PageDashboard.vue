<template lang="pug">
  #PageDashboard
    v-page-header(title="Dashboard")
    v-page-content
      b-container(fluid)
        b-card
          b-row
            b-col
              p Labore consequat cupidatat id consequat proident in reprehenderit.
                | Dolor nulla Lorem cupidatat officia sit. Deserunt tempor duis
                | elit consequat voluptate aute esse sunt.
          b-row
            b-col
              p Labore consequat cupidatat id consequat proident in reprehenderit.
                | Dolor nulla Lorem cupidatat officia sit.
                | Deserunt tempor duis elit consequat voluptate aute esse sunt.
              b-button(variant="outline-primary" size="lg" block) botão
            b-col
              p Labore consequat cupidatat id consequat proident in reprehenderit.
                | Dolor nulla Lorem cupidatat officia sit.
                | Deserunt tempor duis elit consequat voluptate aute esse sunt.
</template>

<script>
import Page from "../components/Page/Page";

export default {
  name: "PageDashboard",
  extends: Page
}
</script>

