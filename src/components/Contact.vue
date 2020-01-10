<template>
	<div id="contact" class="d-flex align-items-center">
		<div class="Contact__Content">
			<!-- Content -->
			<div class="Contact__Info d-flex flex-column">
					<h2>{{ Contact.title }}</h2>
				<p>{{ Contact.description }} </p>
<!--
				<ul class="Contact__SocialMedia__Icons">
					<li v-for="item in SocialMedia.items" :key="item.name">
						<a :href="item.link">
							<g-image immediate="true" :alt="item.name" :src="'/images/' + item.name + '.svg'" />
						</a>
					</li>
				</ul>
-->
			</div>
			<!-- Form -->
			<div class="Contact__Form">
				<form action="/thank-you" method="POST" netlify>
					<label for="name">Name</label>
					<input type="name" placeholder="What can we call you?">
					
					<label for="email">Email</label>
					<input type="email" placeholder="email@domain.com">
					
					<label for="message">Message</label>
					<textarea type="message" placeholder="Your message..."/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import Contact from '~/data/Contact.yml'
	//import SocialMedia from '~/data/SocialMedia.yml'

	export default {
		computed: {
			Contact () {
				return Contact
			}
//			SocialMedia () {
//				return SocialMedia
//			}
		}
	}  
</script>

<style lang="sass" scoped>
	#contact
		padding: 30px 0

		h2
			margin-bottom: 15px

		.Contact__Info
			margin-right: 2rem
			margin-bottom: 2rem

		.Contact__Form

			form
				flex-direction: column
				display: flex

				*
					font:
						family: 'Nunito', sans-serif
						size: 16px

				label
					font:
						size: 12px
						weight: 700
					margin-bottom: 20px
					text-transform: uppercase

				input
					margin-bottom: 20px

				input, textarea
					border: none
					border-bottom: 1px solid #CFCFCF
					outline: none
					padding-bottom: 10px
					color: #CFCFCF

				textarea
					height: 60px
					resize: none

				button
					margin-top: 30px
					padding: 15px
					border: none
					border-radius: 50px
					cursour: pointer
					font-size: 16px
					font-weight: 700
					text-transform: uppercase
					background-color: rgb(50,50,50)
					color: white
					transition: 0.2s
					float: right
					width: 200px
					margin-left: auto

					&:hover
						background-color: #bf202f
					
	.Contact__SocialMedia__Icons
		display: flex
		flex-direction: row
		margin-top: 20px

		li
			padding-right: 15px

			img
				width: 15px
				height: 15px

	@media (min-width: 576px)
		.Contact__Content
			display: flex
			flex-direction: row
			width: 100%

		.Contact__Info
			width: 25%

		.Contact__Form
			width: 70%

	@media (max-width: 576px)
		.Contact__Content
			display: flex
			flex-direction: column

		.Contact__Info
			width: 100%

		.Contact__Form
			width: 100%
</style>

