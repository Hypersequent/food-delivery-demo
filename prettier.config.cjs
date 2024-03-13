/** @type {import('prettier').Options} */
module.exports = {
	arrowParens: 'always',
	bracketSpacing: true,
	jsxSingleQuote: true,
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	printWidth: 100,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
}
