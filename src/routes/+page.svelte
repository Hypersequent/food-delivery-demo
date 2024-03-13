<script lang="ts">
	import Menu from '$lib/components/Menu.svelte'
	import Cart from '$lib/components/Cart.svelte'
	import Hero1 from '$lib/components/hero/Hero1.svelte'
</script>

<Hero1 />
<div class="maincontent">
	<div class="container">
		<section id="menu">
			<Menu />
		</section>
	</div>
</div>
<Cart />
