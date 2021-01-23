<template>
  <v-app>
    <siteHeader />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app dark>
      <span>&copy; Fractional Design {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <span>All rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import siteHeader from "~/components/UI/siteHeader";
export default {
  components: { siteHeader },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
