<template>
  <Layout>
    <Header/>
    <h2>Latest passion projects</h2>
    <Portfolio/>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Portfolio from '~/components/Portfolios.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { 
      Header,
      Portfolio,
      Footer
    },
  }
</script>