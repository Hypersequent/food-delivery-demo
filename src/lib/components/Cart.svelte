<script context="module" lang="ts">
	import items from '../items'

	export function getItemData(id: string) {
		return Object.values(items)
			.flat()
			.find((item) => item.id === id)!
	}
</script>

<script lang="ts">
	import { assets, base } from '$app/paths'
	import cart from '../cart'
	const count = cart.count

	let show = false

	function modal(node: HTMLElement, isShown: boolean) {
		const modal = node
		const backdrop = document.createElement('div')
		backdrop.classList.add('modal-backdrop', 'fade')
		const closeBtns = modal.querySelectorAll('[data-dismiss="modal"]')

		;[...closeBtns].forEach((btn) => {
			btn.addEventListener('click', hideModal)
		})

		function showModal() {
			document.body.appendChild(backdrop)
			modal.style.display = 'block'
			setTimeout(() => {
				backdrop.classList.add('show')
				modal.classList.add('show')
			}, 10)
		}

		function hideModal() {
			show = false
			backdrop.classList.remove('show')
			modal.classList.remove('show')
			setTimeout(() => {
				document.body.contains(backdrop) && document.body.removeChild(backdrop)
				modal.style.display = 'none'
			}, 200)
		}
		backdrop.addEventListener('click', hideModal)

		isShown ? showModal() : hideModal()

		return {
			destroy() {
				backdrop.remove()
			},
			update(newShow: boolean) {
				newShow ? showModal() : hideModal()
				show = !!newShow
			},
		}
	}

	function updateQuantity(e: Event, id: string) {
		const target = e.target as HTMLInputElement
		const quantity = parseInt(target.value) || 0
		cart.update(id, quantity)
	}

	$: total = $cart.reduce((acc, cartItem) => {
		const item = getItemData(cartItem.id)
		return acc + item.price * cartItem.quantity
	}, 0)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="nav-item my-cart-icon"
	on:click={() => {
		show = true
	}}
>
	<img src="{base}/img/cart.svg" style="width: 20px" alt="cart" />
	<span class="badge badge-notify my-cart-badge">{$count}</span>
</div>

<div
	class="modal fade"
	id="cart"
	tabindex="-1"
	role="dialog"
	aria-labelledby="myModalLabel"
	use:modal={show}
>
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">My cart</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div>
					{#if show}
						{#if $count === 0}
							<div class="col">No items in your cart</div>
						{:else}
							{#each $cart as cartitem}
								{@const item = getItemData(cartitem.id)}
								<div class="row py-2 align-items-center border-bottom">
									<div class="col-2">
										{#if item.imageUrl}
											<img src={assets + item.imageUrl} alt={item.title} style="width: 50px" />
										{/if}
									</div>
									<div class="col-3">
										{item.title}
									</div>
									<div class="col-3">
										<input
											type="number"
											value={cartitem.quantity}
											class="form-control"
											min="1"
											on:change={(e) => updateQuantity(e, item.id)}
										/>
									</div>
									<div class="col">
										${item.price * cartitem.quantity}
									</div>
									<div class="col">
										<button
											on:click={() => cart.update(item.id, 0)}
											class="btn btn-danger px-2 py-1">X</button
										>
									</div>
								</div>
							{/each}
							<div class="row px-2 pt-3">
								<div class="col-6">Total</div>
								<div class="col-2 text-right font-weight-bold">
									${total}
								</div>
							</div>
						{/if}
					{/if}
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				{#if $count > 0}
					<a type="button" class="btn btn-primary text-white" href="{base}/checkout">Checkout</a>
				{/if}
			</div>
		</div>
	</div>
</div>
