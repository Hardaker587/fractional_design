<template>
  <v-row>
    <site-page-title
      title="Manage Portfolio"
      :has-link="true"
      link-text="Add new portfolio item"
      link="/admin/portfolio/new"
    />
  </v-row>
</template>

<script>
import SitePageTitle from "~/components/UI/sitePageTitle";
export default {
  name: "Index",
  components: { SitePageTitle },
};
</script>
