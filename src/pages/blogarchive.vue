<template>
  <Layout>
    <h2>From the blog</h2>
    <Blog/>
  </Layout>
</template>

<script>
  import Blog from '~/components/Blog/BlogPage.vue';

  export default {
    components: { 
      Blog
    },
  }
</script>