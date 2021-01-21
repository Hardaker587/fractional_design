<template>
  <v-row align="center">
    <v-col :cols="!hasLink ? 12 : 6" class="pa-12">
      <div class="text-h3 font-weight-black">{{ title }}</div>
    </v-col>
    <v-col v-if="hasLink" cols="6" class="pa-12">
      <v-btn text :to="link" color="primary" class="float-right">{{
        linkText
      }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SitePageTitle",
  props: {
    title: { type: String, required: true, default: "" },
    hasLink: { type: Boolean, required: false, default: false },
    link: { type: String, required: false, default: "" },
    linkText: { type: String, required: false, default: "" },
  },
};
</script>
