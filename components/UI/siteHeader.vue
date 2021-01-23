<template>
  <div>
    <admin-menu :menu="drawer" />
    <v-app-bar fixed app flat color="white" class="pa-4" min-height="96">
      <v-app-bar-nav-icon class="mr-4" @click.stop="drawer = !drawer">
        <template>
          <v-icon>{{ !drawer ? "mdi-menu" : "mdi-close" }}</v-icon>
        </template>
      </v-app-bar-nav-icon>
      <v-img
        src="/images/logo.png"
        max-width="200"
        height="auto"
        @click="$router.push('/')"
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(n, i) in navi"
        :key="i"
        tile
        color="white"
        class="mr-2 elevation-0"
        :to="n.link"
        >{{ n.title }}</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
import AdminMenu from "@/components/Admin/adminMenu";
export default {
  name: "SiteHeader",
  components: { AdminMenu },
  data() {
    return {
      drawer: false,
      title: "Fractional Design",
      navi: [
        {
          title: "Portfolio",
          link: "/portfolio",
        },
        {
          title: "Blog",
          link: "/blog",
        },
        {
          title: "Resume",
          link: "/resume",
        },
      ],
    };
  },
};
</script>
