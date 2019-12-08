<script>
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { open } from '../stores.js';
	import CardInner from './CardInner.svelte';

	let buttonVisible = false;

	onMount(() => {
		setTimeout(() => {
			buttonVisible = true;
		}, 2000);
	})

</script>



{#if $open}
	<div class="card" transition:fly="{{ y: 100, duration: 1000 }}">
		<CardInner />
	</div>
{/if}

<style>
	.card {
		width: 80%;
		max-width: 700px;
		height: 85%;
		background: rgba(255,255,255,.9);
		border-radius: 1.5rem;
		padding: .5rem 1.5rem;
		position: absolute;
		z-index: 5;
		bottom: 24%;
		left: 50%;
		transform: translate(-50%, 20%);
		overflow: hidden;
	}
</style>
