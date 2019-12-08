<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { beforeUpdate } from 'svelte';
	import { open, storeArticleId, storeStoryId } from '../stores.js';
	import CardInnerLayout from './CardInnerLayout.svelte';
	import { articles, stories } from '../story.js';

	$: filter = () => {
		const article = articles.filter(item => item.id === $storeArticleId)[0]
		const story = stories.filter(item => item.article_id === article.id && item.num === $storeStoryId)
		const storyLength = stories.filter(item => item.article_id === article.id).length
		return {
			article: article,
			story: story[0],
			storyLength: storyLength
		}
	}

	$: filterArticle = () => {
		const { article, story } = filter()

		return {
			title: article.title,
			contents: story.contents,
			num: story.num
		}
	}

	$: allPages = () => {
		const { article, story, storyLength } = filter()
		return storyLength || 0
	}

	$: updatePrev = () => {
		if ($storeStoryId === 1) return;
		storeStoryId.update(value => --value)
	}

	$: updateNext = () => {
		const { storyLength } = filter()
		if ($storeStoryId === storyLength) return;
		storeStoryId.update(value => ++value)
	}

  $: leftDisabled = ($storeStoryId === 1) ? 'disabled' : '';
	$: rightDisabled = ($storeStoryId === allPages()) ? 'disabled' : '';

</script>

<div class="inner">
	<CardInnerLayout {...filterArticle()} />

	{#if $open}
	<button
		class={`left ${leftDisabled}`}
		transition:scale="{{duration: 500, delay: 1000, opacity: 0.5, start: 0, easing: quintOut}}"
		on:click|preventDefault={updatePrev}
	>
		PREV
	</button>
	<button
		class={`right ${rightDisabled}`}
		transition:scale="{{duration: 500, delay: 1000, opacity: 0.5, start: 0, easing: quintOut}}"
		on:click|preventDefault={updateNext}
	>
	NEXT
	</button>
	{/if}

	<div class="label">
	{`${filterArticle()['num']} / ${allPages()}`}
	</div>

</div>


<style>
	.inner {
		width: 100%;
		height: 100%;
		position: relative;
	}

	button {
		color: #fff;
		min-width: 120px;
		min-height: 35px;
		font-family: 'M PLUS Rounded 1c', sans-serif;
		letter-spacing: .2rem;
		font-weight: bold;
		line-height: 1rem;
		margin: 0;
		border:none;
		position: absolute;
		z-index: 20;
		border-radius: 2rem;
		text-decoration: none;
		cursor: pointer;
		bottom: 0rem;
		background-color: #54546c;
		transition: .3s;
	}

	button:hover {
		background-color: #30305D;
		transition: .3s;
	}

	.left {
		left: -.8rem;
	}

	.right {
		right: -.8rem;
	}

	.disabled {
		background-color: #dddfe6;
		pointer-events: none;
}

.label {
	font-weight: bold;
	position: absolute;
	bottom: 1rem;
	left: 50%;
  transform: translateX(-50%);
}

</style>