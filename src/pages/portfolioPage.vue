<template>
  <Layout>
    <h2>Latest passion projects</h2>
    <PortfolioPages/>
  </Layout>
</template>

<script>
  import PortfolioPages from '~/components/Portfolio/PortfolioPages.vue';

  export default {
    components: { 
      PortfolioPages
    },
  }
</script>