<template>
  <Layout>
    <Hero/>
    <Portfolio/>
    <About/>
    <h2>Latest passion projects</h2>
    <Pages/>
    <h2>From the blog</h2>
    <Blog/>
    <Contact/>
  </Layout>
</template>

<script>
  import Hero from '~/components/Generic/Hero.vue';
  import Portfolio from '~/components/Portfolio/Portfolios.vue';
  import About from '~/components/Generic/About.vue';
  import Pages from '~/components/Archive.vue';
  import Blog from '~/components/Blog/Blog.vue';
  import Contact from '~/components/Generic/Contact.vue';

  export default {
    components: { 
      Hero,
      Portfolio,
      About,
      Pages,
      Blog,
      Contact,
    },
  }
</script>