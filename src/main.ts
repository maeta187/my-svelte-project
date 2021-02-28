import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte',
		count: 0,
		img: 'https://placehold.jp/150x150.png',
		htmlStrongText: 'this string contains some <strong>HTML!!!</strong>',
		numbers: [1, 2, 3, 4],
		teacher: {
			name: 'ジョン',
			age: 32,
			subject: '理科',
			homeroomTeacherFlag: true,
		},
		user: {
			loggedIn: false,
		},
		num: 11,
		cats: [
			{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
			{ id: 'z_AbfPXTKms', name: 'Maru' },
			{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
		],
		colors: [
			{ id: 1, color: 'darkblue' },
			{ id: 2, color: 'indigo' },
			{ id: 3, color: 'deeppink' },
			{ id: 4, color: 'salmon' },
			{ id: 5, color: 'gold' }
		],
	},
});

export default app;