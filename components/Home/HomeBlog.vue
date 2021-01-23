<template>
  <v-row style="max-width: 100vw">
    <v-col cols="12">
      <site-page-title
        title="Blog"
        :has-link="true"
        link="/blog"
        link-text="View all"
    /></v-col>
    <v-col
      v-for="(n, i) in 6"
      :key="i"
      :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
    >
      <BlogItem />
    </v-col>
  </v-row>
</template>

<script>
import SitePageTitle from "@/components/UI/sitePageTitle";
import BlogItem from "~/components/Blog/BlogItem";
export default {
  name: "HomeBlog",
  components: { SitePageTitle, BlogItem },
};
</script>
