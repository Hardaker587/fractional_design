<template>
<ul id="pages">
   <carousel :nav="true">
    <li v-for="{ node } in $static.allPages.edges" :key="node.id">
      <g-link :to="node.path">
        <h6 v-html="node.title"/>
      </g-link>
      <span v-html="node.date"/>
    </li>
    </carousel>
    </ul>
</template>

<static-query>
  query Pages {
    allPages(sortBy: "DESC") {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</static-query>

<style lang="sass" scoped>
  #pages
    padding: 30px 0

    li
      display: flex
      justify-content: center
      margin-bottom: 10px
      background: rgb(50,50,50)
      border-radius: 10px
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.5)
      text-align: center
      padding: 10px
      margin-left: 5px

      &:hover
        background: #bf202f
    a
      color: #fff !important 

      span
        display: flex
        align-items: center
        color: #cdcdcd
        font-size: 14px

  @media (min-width: 576px)
    #pages
      padding: 50px 0
      display: grid
      grid-template-columns: repeat(2, auto)
      grid-gap: 2em

      li
        margin-bottom: 0
</style>
