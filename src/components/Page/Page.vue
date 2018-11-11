<script>
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";

export default {
  name: "Page",
  components: {
    "v-page-header": PageHeader,
    "v-page-content": PageContent
  },
  methods: {
    setPageTitle(title) {
      this.$store.dispatch('setPageTitle', title);
    }
  }
}
</script>





