<script>
	import { fly } from 'svelte/transition';
	import { open } from '../stores.js';

	let visible;
	const unsubscribe = open.subscribe(value => visible = value)
</script>

{#if visible}
	<div class="card" transition:fly="{{ y: 100, duration: 1000 }}">
	demo
	</div>
{/if}

<style>
	.card {
		width: 80%;
		max-width: 700px;
		height: 65%;
		background: rgba(255,255,255,.9);
		border-radius: 1.5rem;
		padding: 1.5rem;
		position: absolute;
		z-index: 5;
		bottom: 20%;
		left: 50%;
		transform: translate(-50%, 20%);
	}
</style>
