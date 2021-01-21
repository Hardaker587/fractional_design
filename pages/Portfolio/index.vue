<template>
  <div>
    <site-page-title title="Portfolio" />
    <PortfolioItem v-for="n in 5" :key="n" />
  </div>
</template>

<script>
import PortfolioItem from "~/components/Portfolio/PortfolioItem";
import SitePageTitle from "~/components/UI/sitePageTitle";
export default {
  name: "Index",
  components: { SitePageTitle, PortfolioItem },
};
</script>
