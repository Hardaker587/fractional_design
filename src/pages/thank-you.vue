<template>
  <Layout class="not-found">
       <Header/>
    <h1>Thanks!</h1>
    <p>We will get back to you as soon as possible, in the mean time, why don't you have a look at our blog?</p>
    <g-link class="home-link" to="/blogarchive">Go to the blog</g-link>
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