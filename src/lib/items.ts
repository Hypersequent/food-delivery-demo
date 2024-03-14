export type Item = {
	id: string
	title: string
	price: number
	description: string
	imageUrl?: string
}
export default {
	pizzas: [
		{
			id: 'p1',
			title: 'Cheese Pizza',
			price: 15,
			description: 'Melted mozzarella atop a classic tomato base, finished with a hint of oregano.',
			imageUrl: '/img/pizza-1.png',
		},
		{
			id: 'p2',
			title: 'Hot Pastrami',
			price: 25,
			description: 'Savory pastrami with a spicy kick, complemented by pickles and mustard sauce.',
			imageUrl: '/img/pizza-2.png',
		},
		{
			id: 'p3',
			title: 'Classic Pizza',
			price: 20,
			description:
				'Traditional toppings of pepperoni, mushrooms, and bell peppers on a rich tomato sauce.',
			imageUrl: '/img/pizza-3.png',
		},
		{
			id: 'p4',
			title: 'Country Pizza',
			price: 17,
			description: 'A rustic blend of bacon, onions, and potatoes, seasoned with rosemary.',
			imageUrl: '/img/pizza-4.png',
		},
		// Added entries
		{
			id: 'p5',
			title: 'Veggie Delight',
			price: 18,
			description:
				'A wholesome combination of spinach, olives, tomatoes, and feta cheese, drizzled with olive oil and garlic sauce.',
			imageUrl: '/img/pizza-5.png',
		},
		{
			id: 'p6',
			title: 'BBQ Chicken',
			price: 22,
			description:
				'Juicy grilled chicken, caramelized onions, and smoky BBQ sauce, topped with cheddar and mozzarella cheese.',
			imageUrl: '/img/pizza-6.png',
		},
	],
	drinks: [
		{
			id: 'd1',
			title: 'Cappuccino',
			price: 4,
			description:
				'A classic blend of rich espresso, steamed milk, and frothy foam, dusted with cocoa.',
		},
		{
			id: 'd2',
			title: 'Iced Coffee',
			price: 5,
			description: 'Cool and refreshing, our iced coffee is a perfect pick-me-up on any day.',
		},
		{
			id: 'd3',
			title: 'Café Latte',
			price: 3,
			description:
				'Smooth espresso meets creamy milk, topped with a touch of foam for a gentle warmth.',
		},
		{
			id: 'd4',
			title: 'Espresso',
			price: 4,
			description: 'Bold and robust, our espresso offers a concentrated burst of coffee flavor.',
		},
		// Added entries
		{
			id: 'd5',
			title: 'Green Tea',
			price: 3,
			description:
				'Delicate and refreshing, our green tea provides a smooth, soothing sip with a hint of grassy notes.',
		},
		{
			id: 'd6',
			title: 'Lemonade',
			price: 4,
			description:
				'Freshly squeezed lemon mixed with just the right amount of sugar for a sweet and tangy refreshment.',
		},
	],
	desserts: [
		{
			id: 's1',
			title: 'Crème Brûlée',
			price: 16,
			description:
				'A rich custard base beneath a layer of hard caramel, often flavored with vanilla.',
		},
		{
			id: 's2',
			title: 'Tarte Tatin',
			price: 12,
			description:
				'An upside-down pastry with caramelized fruit, often apples, under a buttery crust.',
		},
		{
			id: 's3',
			title: 'Macarons',
			price: 10,
			description:
				'Colorful, round cakes made from almonds, sugar, and egg whites, with a creamy filling.',
		},
		{
			id: 's4',
			title: 'Chocolate Soufflé',
			price: 20,
			description:
				'A light, airy chocolate dessert, rising to perfection when baked, with a fluffy interior.',
		},
		// Added entries
		{
			id: 's5',
			title: 'Cheesecake',
			price: 14,
			description:
				'Creamy, smooth, and rich, our cheesecake sits atop a buttery graham cracker crust and is finished with a lush fruit topping.',
		},
		{
			id: 's6',
			title: 'Apple Pie',
			price: 15,
			description:
				'Classic American apple pie with a flaky crust, filled with spiced apple slices and baked to golden perfection.',
		},
	],
} as Record<string, Item[]>
