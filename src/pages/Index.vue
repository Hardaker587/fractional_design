<template>
  <Layout>
    <Header/>
    <Hero/>
    <Portfolio/>
    <About/>
    <h2>Latest passion projects</h2>
    <Pages/>
    <h2>From the blog</h2>
    <Blog/>
    <Contact/>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Portfolio from '~/components/Portfolios.vue';
  import About from '~/components/About.vue';
  import Pages from '~/components/Archive.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { 
      Header,
      Hero,
      Portfolio,
      About,
      Pages,
      Blog,
      Contact,
      Footer,
    },
  }
</script>