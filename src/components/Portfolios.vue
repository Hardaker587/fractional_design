<template>
  <ul id="portfolio">
    <vue-glide>
    <vue-glide-slide v-for="{ node } in $static.allPortfolio.edges" :key="node.id">
    <div class="image-container">
        <img :src="node.thumbnail" />
    </div>
      <g-link :to="node.path">
        <h6 v-html="node.title"/>
      </g-link>
      <span v-html="node.date"/>
    </vue-glide-slide>
    </vue-glide>
  </ul>
</template>

<static-query>
  query Portfolio {
    allPortfolio(sortBy: "DESC") {
      edges {
        node {
          id
          title
          date (format: "YYYY")
          path
          thumbnail (width: 720, height: 200, quality: 90)
        }
      }
    }
  }
</static-query>

<style lang="sass" scoped>
  #portfolio
    padding: 30px 0

    li
      display: flex
      margin-bottom: 10px

      &:last-child
        margin-bottom: 0

      a
        margin-right: auto

      span
        display: flex
        align-items: center
        color: #cdcdcd
        font-size: 14px
        
        
    .image-container
        height: 200px
        width: 100%
        overflow: hidden
        display: flex
        justify-content: center
        align-items: center
        
        img
            height: 100%
            width: auto
            max-width: unset

  @media (min-width: 576px)
    #portfolio
      padding: 50px 0
      display: grid
      grid-template-columns: repeat(2, auto)
      grid-gap: 2em

      li
        margin-bottom: 0
</style>
