<script lang="ts">
	import { assets } from '$app/paths'
	import Hero2 from '$src/lib/components/hero/Hero2.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	function onSubmit(e: SubmitEvent) {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		form.querySelector('.alert')!.classList.add('show')
		form.reset()
	}
</script>

<div class="maincontent pt-0 pb-0">
	<div class="d-md-flex h-md-100 align-items-center">
		<div class="col-md-6 p-0 h-md-100">
			<Hero2 />
		</div>
		<div class="col-md-6 p-0 h-md-100 loginarea">
			<div class="d-md-flex align-items-center h-md-100 p-3 justify-content-center">
				<form on:submit={onSubmit}>
					<h3 class="mb-4 text-center">Checkout</h3>

					<!-- Items Table -->
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Image</th>
								<th scope="col">Title</th>
								<th scope="col">Count</th>
								<th scope="col">Total Price</th>
							</tr>
						</thead>
						<tbody>
							{#each data.cart as item}
								<tr>
									<td>
										{#if item.imageUrl}
											<img
												src={assets + item.imageUrl}
												class="img-fluid"
												alt={item.title}
												style="width: 50px"
											/>
										{/if}
									</td>
									<td>{item.title}</td>
									<td>{item.quantity}</td>
									<td>${item.price * item.quantity}</td>
								</tr>
							{/each}
							<tr>
								<td>Total</td>
								<td></td>
								<td></td>
								<td class="font-weight-bold" data-testid="cartTotal">${data.total}</td>
							</tr>
						</tbody>
					</table>

					<!-- Additional Checkout Details -->
					<div class="form-group">
						<label for="customerName">Name</label>
						<input
							type="text"
							class="form-control"
							id="customerName"
							placeholder="Enter your name"
							required
						/>
					</div>
					<div class="form-group">
						<label for="customerAddress">Address</label>
						<input
							type="text"
							class="form-control"
							id="customerAddress"
							placeholder="Enter your address"
							required
						/>
					</div>
					<div class="form-group">
						<label for="paymentMethod">Payment Method</label>
						<select class="form-control" id="paymentMethod">
							<option>Credit Card</option>
							<option>Debit Card</option>
							<option>PayPal</option>
						</select>
					</div>
					<button type="submit" class="btn btn-dark btn-round btn-block">Place Order</button>
					<div class="alert alert-success alert-dismissible fade mt-3" role="alert">
						<h4 class="alert-heading">Youre order place successfully!</h4>
						<p>Thank you for your order. We will deliver your food as soon as possible.</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
