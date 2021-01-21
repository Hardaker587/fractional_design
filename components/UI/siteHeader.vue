<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app flat color="white" class="pa-4" min-height="96">
      <v-app-bar-nav-icon class="mr-4" @click.stop="drawer = !drawer" />
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
export default {
  name: "SiteHeader",
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
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
