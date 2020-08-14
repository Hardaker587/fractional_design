<template>
  <div>
    <div class="container bg-light">
      <Header/>
      <slot/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Generic/Header.vue';
  import Footer from '~/components/Generic/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    },
  }
  </script>