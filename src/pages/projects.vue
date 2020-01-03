<template>
  <Layout>
    <Header/>
    <h2>Latest passion projects</h2>
    <Pages/>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Pages from '~/components/Archive.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { 
      Header,
      Pages,
      Footer
    },
  }
</script>