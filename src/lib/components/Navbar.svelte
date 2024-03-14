<script lang="ts">
	import { assets, base } from '$app/paths'
	let show = false
</script>

<nav class="navbar navbar-expand-md navbar-light sticky-top bg-white">
	<a class="navbar-brand" href="{base}/"><img src="{assets}/img/logo.jpg" alt="logo" /></a>
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
				<a class="nav-link" href="{base}/">Welcome</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{base}/#menu">Today's Menu</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{base}/about">About us</a>
			</li>
		</ul>
	</div>
</nav>
