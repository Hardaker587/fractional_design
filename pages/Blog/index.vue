<template>
  <div>
    <site-page-title title="Blog" />
    <v-row>
      <v-col v-for="(n, i) in 12" :key="i" cols="4">
        <BlogItem />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SitePageTitle from "~/components/UI/sitePageTitle";
import BlogItem from "~/components/Blog/BlogItem";
export default {
  name: "Index",
  components: { BlogItem, SitePageTitle },
};
</script>
