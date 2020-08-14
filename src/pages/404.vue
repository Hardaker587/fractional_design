<template>
  <Layout class="not-found">
    <h1>Whoops!</h1>
    <p>We can't seem to find that page</p>
    <g-link class="home-link" to="/">Go to home</g-link>
  </Layout>
</template>

<script>

  export default {
    components: {
    },
  }
</script>

<style lang="sass" scoped>
  .not-found .container
    height: 100%
    width: 10000% !important

</style>