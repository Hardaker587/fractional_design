<template>
  <div class="Hero__Content">
		<h1>{{ Hero.title }}</h1>
		<p>{{ Hero.description }}</p>
  </div>
</template>

<script>
	console.log(Hero.title)
	import Hero from '~/data/Hero.yml'

	export default {
		computed: {
			Hero () {
				return Hero
			}
//			SocialMedia () {
//				return SocialMedia
//			}
		}
	} 
</script>

<style lang="sass" scoped>
.Hero__Content
	text-align: center
	margin: 30px 0

	.Hero__Content__Icons
		margin-top: 30px
		display: flex
		justify-content: center

		li
			padding: 0 10px
			display: flex

			a
				display: flex

				img
					width: 18px
					height: 18px
</style>