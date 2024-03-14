<script lang="ts">
	import { onMount } from 'svelte'
	import AOS from 'aos?client'
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from '$lib/components/Navbar.svelte'
	import '$lib/styles/style.scss'
	import 'aos/dist/aos.css'
	import { afterNavigate, onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
				AOS.refresh()
			})
		})
	})
	onMount(() => {
		AOS.init()
	})
	afterNavigate(() => {
		AOS.refresh()
	})
</script>

<Navbar />
<slot />
<Footer />
