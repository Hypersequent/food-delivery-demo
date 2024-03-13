import { browser } from '$app/environment'
import { derived, writable } from 'svelte/store'

type CartItem = {
	id: string
	quantity: number
}

function createCart() {
	let initialCart: CartItem[] = []
	if (browser && localStorage.getItem('cart')) {
		try {
			initialCart = JSON.parse(localStorage.getItem('cart') || '[]')
			Array.isArray(initialCart) || (initialCart = saveToLocalStorage([]))
		} finally {
			//empty
		}
	}
	const { subscribe, update } = writable(initialCart)

	function saveToLocalStorage(cart: CartItem[]) {
		if (browser) {
			localStorage.setItem('cart', JSON.stringify(cart))
		}
		return cart
	}

	function addItem(itemId: string) {
		update((cart) => {
			const existingItem = cart.find((item) => item.id === itemId)
			if (existingItem) {
				existingItem.quantity += 1
			} else {
				cart.push({ id: itemId, quantity: 1 })
			}
			return saveToLocalStorage(cart)
		})
	}

	function updateItem(itemId: string, quantity: number) {
		update((cart) => {
			const existingItem = cart.find((item) => item.id === itemId)
			if (existingItem && quantity > 0) {
				existingItem.quantity = quantity
			}
			if (quantity === 0) {
				return saveToLocalStorage(cart.filter((item) => item.id !== itemId))
			}
			return saveToLocalStorage(cart)
		})
	}

	function removeItem(itemId: string) {
		update((cart) => {
			return saveToLocalStorage(cart.filter((item) => item.id !== itemId))
		})
	}

	return {
		subscribe,
		get count() {
			return derived(this, ($cart) => {
				return $cart.reduce((acc, item) => acc + item.quantity, 0)
			})
		},
		set() {
			0
		},
		add: addItem,
		update: updateItem,
		remove: removeItem,
	}
}

const cart = createCart()

export default cart
