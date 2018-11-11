<template lang="pug">
  #PageDashboard
    v-page-content
      b-container
        b-row
          b-col(cols="12" lg="4" class="d-flex align-items-stretch mb-4")
            b-card(class="bg-success text-light flex-fill")
              b-row(align-v="center")
                b-col(cols="2" md="auto")
                  h1: fa-icon(icon="chart-line")
                b-col
                  h4 $ 3.600,00
                  small Vendas
          b-col(cols="12" lg="4" class="d-flex align-items-stretch mb-4")
            b-card(class="bg-danger text-light flex-fill")
              b-row(align-v="center")
                b-col(cols="2" md="auto")
                  h1: fa-icon(icon="cube")
                b-col
                  h3 $ 3.600,00
                  small Vendas
          b-col(cols="12" lg="4" class="d-flex align-items-stretch mb-4")
            b-card(class="bg-info text-light flex-fill")
              b-row(align-v="center")
                b-col(cols="2" md="auto")
                  h1: fa-icon(icon="check")
                b-col
                  h3 $ 3.600,00
                  small Vendas
        b-row
          b-col(class="mb-4")
            b-card(title="Vendedores")
              b-table(striped hover :items="items" :fields="fields")

        b-row
          b-col(class="mb-4")
            b-card(title="Vendedores" class="bg-dark text-light")
              b-table(striped dark hover :items="items" :fields="fields")

</template>

<script>
import Page from "../components/Page/Page";

export default {
  name: "PageDashboard",
  extends: Page,
  data() {
    return {
      fields: {
        last_name: {
          label: "Person last name",
          sortable: true
        },
        first_name: {
          label: "Person first name",
          sortable: false
        },
        foo: {
          // This key overrides `foo`!
          key: "age",
          label: "Person age",
          sortable: true
        },
        city: {
          key: "address.city"
        },
        "address.country": {
          label: "Country"
        }
      },
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          address: { country: "USA", city: "New York" }
        },
        {
          isActive: false,
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw",
          address: { country: "Canada", city: "Toronto" }
        },
        {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          address: { country: "Australia", city: "Sydney" }
        },
        {
          isActive: true,
          age: 38,
          first_name: "Jami",
          last_name: "Carney",
          address: { country: "England", city: "London" }
        },
      ]
    };
  },
  created() {
    this.setPageTitle("Dashboard");
  }
};
</script>

