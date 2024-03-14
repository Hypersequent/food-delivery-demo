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
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
			imageUrl: '/img/pizza-1.png',
		},
		{
			id: 'p2',
			title: 'Hot Pastrami',
			price: 25,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
			imageUrl: '/img/pizza-2.png',
		},
		{
			id: 'p3',
			title: 'Classic Pizza',
			price: 20,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
			imageUrl: '/img/pizza-3.png',
		},
		{
			id: 'p4',
			title: 'Country Pizza',
			price: 17,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
			imageUrl: '/img/pizza-4.png',
		},
	],
	drinks: [
		{
			id: 'd1',
			title: 'Cappuccino',
			price: 4,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
		{
			id: 'd2',
			title: 'Iced Coffee',
			price: 5,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
		{
			id: 'd3',
			title: 'Café Latte',
			price: 3,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
		{
			id: 'd4',
			title: 'Espresso',
			price: 4,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
	],
	desserts: [
		{
			id: 's1',
			title: 'Chicken Noodles',
			price: 16,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
		{
			id: 's2',
			title: 'Egg Noodles',
			price: 12,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
		{
			id: 's3',
			title: 'Veg Noodles',
			price: 10,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
		{
			id: 's4',
			title: 'Chuck Norris Noodles',
			price: 20,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
		},
	],
} as Record<string, Item[]>
