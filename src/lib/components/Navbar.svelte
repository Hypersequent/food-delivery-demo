<script lang="ts">
	import { base } from '$app/paths'
	let show = false
</script>

<nav class="navbar navbar-expand-md navbar-light sticky-top bg-white">
	<a class="navbar-brand" href="/"><img src="{base}/img/logo.png" alt="logo" /></a>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		aria-expanded="false"
		aria-label="Toggle navigation"
		on:click={() => (show = !show)}
	>
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" class:show id="navbarsExampleDefault">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" href="/">Welcome</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/#menu">Today's Menu</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/about">About us</a>
			</li>
		</ul>
	</div>
</nav>
