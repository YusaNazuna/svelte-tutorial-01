<script>
	import { spring } from 'svelte/motion';
	import { pannable } from '../pannable.js';

	const x = 100
	const y = -100

	const coords = spring({ x: x, y: y }, {
		stiffness: 0.2,
		damping: 0.4
	});

	const handlePanStart = () => {
		coords.stiffness = coords.damping = 1;
	}

	const handlePanMove = (event) => {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	const handlePanEnd = (event) => {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: x, y: y });
	}
</script>

<style>
	.common {
		--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		cursor: move;
	}

	.img {
		pointer-events: none;
	}
</style>

<div
	class="common"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
	style="transform:
		translate({$coords.x}px,{$coords.y}px)
		rotate({$coords.x * 0.2}deg)"
>
<img
	class="common img"
	src="/images/fish-01.svg"
	alt="fish"
/>
</div>