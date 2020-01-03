<template>
  <Layout class="not-found">
       <Header/>
    <h1>Whoops!</h1>
    <p>We can't seem to find that page</p>
    <g-link class="home-link" to="/">Go to home</g-link>
        <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { 
      Header,
      Footer
    },
  }
</script>

<style lang="sass" scoped>
  .not-found .container
    height: 100%
    width: 10000% !important

</style>