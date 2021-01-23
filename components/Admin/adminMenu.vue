<template>
  <v-navigation-drawer v-model="drawer" app class="pa-4">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Admin panel </v-list-item-title>
        <v-list-item-subtitle>
          You do your thang, like a chicken wang
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
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
    <v-btn rounded color="red" class="log_out" dark width="90%">Log Out</v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AdminMenu",
  props: {
    menu: { type: Boolean, required: true, default: false },
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin",
        },
        {
          icon: "mdi-palette",
          title: "Portfolio",
          to: "/admin/portfolio",
        },
        {
          icon: "mdi-post",
          title: "Blog",
          to: "/admin/blog",
        },
        {
          icon: "mdi-account",
          title: "Resume",
          to: "/admin/resume",
        },
      ],
    };
  },
  watch: {
    menu(value) {
      this.drawer = value;
    },
  },
};
</script>

<style scoped>
.log_out {
  position: absolute;
  bottom: 20px;
}
</style>
