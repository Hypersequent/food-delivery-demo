import cart, { type CartItem } from '$src/lib/cart'
import { get } from 'svelte/store'
import type { PageLoad } from './$types'
import { getItemData } from '$src/lib/components/Cart.svelte'
import { redirect } from '@sveltejs/kit'
import type { Item } from '$src/lib/items'
import { base } from '$app/paths'

export const load = (async () => {
	const cartData = get(cart)
	if (cartData.length < 1) {
		redirect(302, `${base}/`)
	}

	type fullItem = Item & CartItem

	const data: fullItem[] = cartData.map((item) => {
		return { ...getItemData(item.id), quantity: item.quantity }
	})

	return {
		cart: data,
		total: data.reduce((acc, item) => acc + item.price * item.quantity, 0),
	}
}) satisfies PageLoad
