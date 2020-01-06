<template>
  <ul id="about">
    <li v-for="item in About.items" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
    </li>
  </ul>
</template>

<script>
  import About from '~/data/About.yml'

	export default {
		computed: {
			About () {
				return About
			}
		}
	} 
</script>


<style lang="sass" scoped>
  #about
    margin: 30px 0

    li
      margin-top: 15px
      background: #fff
      border-radius: 5px;
      padding: 20px
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.5)

      h3
        margin-bottom: 5px
      
      p
        font-size: 15px
        line-height: 1.8

  @media (min-width: 576px)
    #about
      display: grid
      grid-template-columns: repeat(2, auto)
      grid-gap: 2em

      li
        margin-top: 0
        
  @media (max-width: 576px)
    #about
      display: grid
      grid-template-columns: repeat(1, auto)
      grid-gap: 2em

      li
        margin-top: 0
        max-width: 100%
</style>