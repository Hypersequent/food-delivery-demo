declare module 'aos?client' {
	import all from 'aos'
	export = all
}

// fallback
declare module '*?client'
declare module '*?server'
