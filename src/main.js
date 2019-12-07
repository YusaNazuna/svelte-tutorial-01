import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'YUKARI',
		count: 0
	},
});

export default app
