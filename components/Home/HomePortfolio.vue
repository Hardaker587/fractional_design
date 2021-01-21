<template>
  <div>
    <site-page-title
      title="Portfolio"
      :has-link="true"
      link="/portfolio"
      link-text="View all"
    />
    <PortfolioItem v-for="n in 5" :key="n" />
  </div>
</template>

<script>
import SitePageTitle from "@/components/UI/sitePageTitle";
import PortfolioItem from "~/components/Portfolio/PortfolioItem";
export default {
  name: "HomePortfolio",
  components: { SitePageTitle, PortfolioItem },
};
</script>
