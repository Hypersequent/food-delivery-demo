<script lang="ts">
	import { assets, base } from '$app/paths'
	import items from '$lib/items'
	import cart from '../cart'

	function menu(node: HTMLElement) {
		let selected = 'pizzaMenu'
		const buttons = node.querySelectorAll('.button')
		const menus = document.querySelectorAll('div.menu')
		const onClick = (e: Event) => {
			;[...buttons].forEach((button) => {
				button.classList.remove('button--is-active')
			})
			e.preventDefault()

			const target = e.target as HTMLAnchorElement
			const id = target.getAttribute('data-target') as string
			target.classList.add('button--is-active')
			selectMenu(id)
		}

		const selectMenu = (id: string) => {
			;[...menus].forEach((menu) => {
				if (menu.id === id) {
					menu.classList.add('menu--is-visible')
				} else {
					menu.classList.remove('menu--is-visible')
				}
			})
		}
		buttons.forEach((button) => {
			button.addEventListener('click', onClick)
		})

		selectMenu(selected)
		return {
			destroy() {
				buttons.forEach((button) => {
					button.removeEventListener('click', onClick)
				})
			},
		}
	}

	function addToCart(id: string) {
		cart.add(id)
	}
</script>

<div class="block menu1">
	<div class="buttons-container" use:menu>
		<a href="{base}/" role="button" class="button button--is-active" data-target="pizzaMenu"
			>Pizzas</a
		>
		<a href="{base}/" role="button" class="button" data-target="coffeeMenu">Drinks</a>
		<a href="{base}/" role="button" class="button" data-target="noodlesMenu">Desserts</a>
	</div>

	<!-- Start Pizza Menu -->
	<div class="menu" id="pizzaMenu" data-aos="fade-up">
		{#each items.pizzas as pizza}
			<div class="item row align-items-center">
				<div class="col-sm-3 pr-5">
					<img class="product-img" src={assets + pizza.imageUrl} alt={pizza.title} />
				</div>
				<div class="details col-sm-9">
					<div class="item__header">
						<h3 class="item__title">{pizza.title}</h3>
						<span class="item__dots"></span>
						<span class="item__price">${pizza.price}</span>
					</div>
					<p class="item__description">
						{pizza.description}
					</p>
					<button
						class="btn btn-sm btn-outline-primary my-cart-btn"
						on:click={() => addToCart(pizza.id)}>Add to cart</button
					>
				</div>
			</div>
		{/each}
	</div>
	<!-- End Pizza Menu -->

	<!-- Start Coffee Menu -->
	<div class="menu" id="coffeeMenu" data-aos="fade-up">
		{#each items.drinks as drink}
			<div class="item row align-items-center">
				<div class="col">
					<div class="item__header">
						<h3 class="item__title">{drink.title}</h3>
						<span class="item__dots"></span>
						<span class="item__price">${drink.price}</span>
					</div>
					<p class="item__description">
						{drink.description}
					</p>
					<button
						class="btn btn-sm btn-outline-primary my-cart-btn"
						on:click={() => addToCart(drink.id)}>Add to cart</button
					>
				</div>
			</div>
		{/each}
	</div>
	<!-- End Coffee Menu -->

	<!-- Start Noodles Menu -->
	<div class="menu" id="noodlesMenu" data-aos="fade-up">
		{#each items.desserts as dessert}
			<div class="item row align-items-center">
				<div class="col">
					<div class="item__header">
						<h3 class="item__title">{dessert.title}</h3>
						<span class="item__dots"></span>
						<span class="item__price">${dessert.price}</span>
					</div>
					<p class="item__description">
						{dessert.description}
					</p>
					<button
						class="btn btn-sm btn-outline-primary my-cart-btn"
						on:click={() => addToCart(dessert.id)}>Add to cart</button
					>
				</div>
			</div>
		{/each}
	</div>
	<!-- End Noodles Menu -->
</div>
<!-- End block -->
