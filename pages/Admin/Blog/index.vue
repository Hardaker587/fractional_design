<template>
  <v-row>
    <v-col cols="12">
      <site-page-title
        title="Manage Posts"
        :has-link="true"
        link-text="Add new post"
        link="/admin/blog/new"
    /></v-col>
    <v-col cols="12">
      <v-list>
        <v-list-item v-for="post in blog_posts" :key="post.key" three-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{
              post.title
            }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption">
              <span class="font-weight-bold">Published: </span>
              {{ post.status.publishedDate }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-btn text color="primary">Edit</v-btn>
              <v-btn color="error" text>Delete</v-btn>
            </v-list-item-subtitle>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item> </v-list
    ></v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SitePageTitle from "~/components/UI/sitePageTitle";
export default {
  name: "Index",
  components: { SitePageTitle },
  computed: {
    ...mapGetters({
      blog_posts: "admin/getter_blog_posts",
    }),
  },
  mounted() {
    this.get_blog_posts();
  },
  methods: {
    ...mapActions({
      get_blog_posts: "admin/action_get_blog_posts",
    }),
  },
};
</script>
