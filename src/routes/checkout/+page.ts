import cart from '$src/lib/cart'
import { get } from 'svelte/store'
import type { PageLoad } from './$types'
import { getItemData } from '$src/lib/components/Cart.svelte'
import { redirect } from '@sveltejs/kit'

export const load = (async () => {
	const cartData = get(cart)
	if (cartData.length < 1) {
		redirect(302, '/')
	}
	return {
		cart: cartData.map((item) => {
			return { ...getItemData(item.id), quantity: item.quantity }
		}),
	}
}) satisfies PageLoad
