import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte',
		count: 0,
		img: 'https://placehold.jp/150x150.png',
		htmlStrongText: 'this string contains some <strong>HTML!!!</strong>',
		numbers: [1, 2, 3, 4],
	},
});

export default app;