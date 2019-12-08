<script>
	import { onMount } from 'svelte';

	let canvas;
	let width;
	let height;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame;

		width = '100%';
		height = '100%';

		(function loop() {
			frame = requestAnimationFrame(loop);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = i / canvas.height >>> 0;

				const t = window.performance.now();

				const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
				const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000));
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
		}());

		return () => {
			cancelAnimationFrame(frame);
		};
	});

</script>

<style>
	canvas {
		width: 100%;
		height: 100%;
		-webkit-mask-image: url('/images/cat01.svg');
		mask-image: url('/images/cat01.svg');
    -webkit-mask-position: -120% 180%;
    mask-position: -120% 180%;
    -webkit-mask-size: 80% 80%;
    mask-size: 80% 80%;
    -webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
	}
</style>

	<canvas
		bind:this={canvas}
		width={width}
		height={height}
	></canvas>

