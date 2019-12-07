<script>

	import { readable } from 'svelte/store';

	const time = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1000);

		return function stop() {
			clearInterval(interval);
		}
	})

	const formatter = new Intl.DateTimeFormat('ja', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
	});

</script>

<div class="time font-modak">{formatter.format($time)}</div>

<style>
	.time {
		color: #fff1b9;
		font-size: 6em;
		letter-spacing: .1em;
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
