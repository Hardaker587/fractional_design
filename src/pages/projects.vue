<template>
  <Layout>
    <h2>Latest passion projects</h2>
    <Pages/>
  </Layout>
</template>

<script>
  import Pages from '~/components/Archive.vue';
  
  export default {
    components: { 
      Pages
    },
  }
</script>