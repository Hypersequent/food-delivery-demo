import items from '../src/lib/items'
import { expect, test, type Page } from '@playwright/test'

test('Test index page', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Food Delivery/)
	await expect(page.getByRole('heading', { name: 'Bistrot Français' })).toBeVisible()
	await expect(
		page.getByText('Elegance of French Cuisine Delivered Directly to Your Doorstep!')
	).toBeVisible()

	await expect(page.getByRole('link', { name: "View Today's Menu" })).toBeVisible()
})

test('Test menu', async ({ page }) => {
	await page.goto('/#menu')
	const pizzasBtn = page.getByText('Pizzas')
	await expect(pizzasBtn).toHaveClass('button button--is-active')
	await expect(page.locator('#pizzaMenu')).toBeVisible()

	const drinksBtn = page.getByText('Drinks')
	await drinksBtn.click()
	await expect(drinksBtn).toHaveClass('button button--is-active')
	await expect(pizzasBtn).toHaveClass('button')
	await expect(page.locator('#coffeeMenu')).toBeVisible()

	await pizzasBtn.click()

	await expect(page.locator('#pizzaMenu > .item')).toHaveCount(items.pizzas.length)
	await expect(page.locator('#pizzaMenu > .item .item__title')).toHaveText(
		items.pizzas.map((p) => p.title)
	)

	await expect(page.locator('#coffeeMenu > .item')).toHaveCount(items.drinks.length)
	await expect(page.locator('#coffeeMenu > .item .item__title')).toHaveText(
		items.drinks.map((p) => p.title)
	)

	await expect(page.locator('#noodlesMenu > .item')).toHaveCount(items.desserts.length)
	await expect(page.locator('#noodlesMenu > .item .item__title')).toHaveText(
		items.desserts.map((p) => p.title)
	)
})

async function selectMenu(page: Page) {
	const pizzasBtn = page.getByText('Pizzas')
	const drinksBtn = page.getByText('Drinks')
	await page.locator('#pizzaMenu > .item .my-cart-btn').nth(0).click()

	await drinksBtn.click()
	await page.locator('#coffeeMenu > .item .my-cart-btn').nth(0).click()

	await pizzasBtn.click()
	await page.locator('#pizzaMenu > .item .my-cart-btn').nth(3).click()
}

test('Test cart counter', async ({ page }) => {
	await page.goto('/#menu')
	await selectMenu(page)
	await expect(page.locator('.my-cart-badge')).toHaveText('3')
})

test('Test cart modal', async ({ page }) => {
	await page.goto('/#menu')

	await selectMenu(page)

	await page.locator('.my-cart-icon').click()
	await expect(page.locator('#cart')).toBeVisible()
	const total = items.pizzas[0].price + items.drinks[0].price + items.pizzas[3].price
	await expect(page.getByTestId('cartTotal')).toHaveText('$' + total)
})

test('Test checkout', async ({ page }) => {
	await page.goto('/#menu')

	await selectMenu(page)

	await page.locator('.my-cart-icon').click()
	await page.getByRole('link', { name: 'Checkout' }).click()

	await expect(page).toHaveURL(/.*checkout/)

	await expect(page.getByRole('heading', { name: 'Bistrot Français' })).toBeVisible()
	await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible()

	const total = items.pizzas[0].price + items.drinks[0].price + items.pizzas[3].price
	await expect(page.getByTestId('cartTotal')).toHaveText('$' + total)

	await page.getByText('Name').fill('Petar Petrovic')
	await page.getByText('Address').fill('Bulevar Slobode 25')

	await page.getByText('Place Order').click()

	await expect(page.locator('.alert.alert-success')).toBeVisible()
})
