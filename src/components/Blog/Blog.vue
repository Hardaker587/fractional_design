<template>
  <ul id="blog">
   <vue-glide>
    <vue-glide-slide v-for="{ node } in $static.allBlogPost.edges" :key="node.id">
     <div class="image-container">
         <img :src="node.thumbnail" />
     </div>
      <g-link :to="node.path">
        <h6 v-html="node.title"/>
      </g-link>
      <span v-html="node.date"/>
    </vue-glide-slide>
              <template slot="control">
        <button data-glide-dir="<"><b-icon-arrow-left-short
></b-icon-arrow-left-short></button>
        <button data-glide-dir=">"><b-icon-arrow-right-short
></b-icon-arrow-right-short></button>
      </template>
    </vue-glide>
  </ul>
</template>

<static-query>
  query Blog {
    allBlogPost(sortBy: "DESC") {
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
  #blog
    padding: 30px 0
    
    .glide
      display: flex
      align-items: center

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

  @media (min-width: 576px)
    #blog
      padding: 50px 0

      li
        margin-bottom: 0
</style>
