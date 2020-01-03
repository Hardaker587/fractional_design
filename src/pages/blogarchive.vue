<template>
  <Layout>
    <Header/>
    <h2>From the blog</h2>
    <Blog/>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Blog from '~/components/Blog.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { 
      Header,
      Blog,
      Footer
    },
  }
</script>