<template>
  <v-row>
    <Introduction />
    <home-portfolio />
    <home-blog />
  </v-row>
</template>
<script>
import HomeBlog from "~/components/Home/HomeBlog";
import Introduction from "~/components/Home/Introduction";
import HomePortfolio from "~/components/Home/HomePortfolio";
export default {
  components: { HomeBlog, HomePortfolio, Introduction },
};
</script>
